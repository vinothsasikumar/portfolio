"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

interface Icon {
    x: number;
    y: number;
    z: number;
    scale: number;
    opacity: number;
    id: number;
}

interface IconCloudProps {
    icons?: React.ReactNode[];
    images?: string[];
}

function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
}

export function IconCloud({ icons, images }: IconCloudProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [iconPositions, setIconPositions] = useState<Icon[]>([]);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [targetRotation, setTargetRotation] = useState<{
        x: number;
        y: number;
        startX: number;
        startY: number;
        distance: number;
        startTime: number;
        duration: number;
    } | null>(null);
    const animationFrameRef = useRef<number>(0);
    const rotationRef = useRef(rotation);
    const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
    const imagesLoadedRef = useRef<boolean[]>([]);

    // Create icon canvases once when icons/images change
    useEffect(() => {
        if (!icons && !images) return;

        const items = icons || images || [];
        imagesLoadedRef.current = new Array(items.length).fill(false);

        const newIconCanvases = items.map((item, index) => {
            const offscreen = document.createElement("canvas");
            offscreen.width = 40;
            offscreen.height = 40;
            const offCtx = offscreen.getContext("2d");

            if (offCtx) {
                if (images) {
                    // Handle image URLs directly
                    const img = new Image();
                    img.crossOrigin = "anonymous";
                    img.src = items[index] as string;
                    img.onload = () => {
                        offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

                        // Create circular clipping path
                        offCtx.beginPath();
                        offCtx.arc(20, 20, 20, 0, Math.PI * 2);
                        offCtx.closePath();
                        offCtx.clip();

                        // Draw the image
                        offCtx.drawImage(img, 0, 0, 40, 40);

                        imagesLoadedRef.current[index] = true;
                    };
                } else {
                    // Handle SVG icons
                    offCtx.scale(0.4, 0.4);
                    const svgString = renderToString(item as React.ReactElement);
                    const img = new Image();
                    img.src = "data:image/svg+xml;base64," + btoa(svgString);
                    img.onload = () => {
                        offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
                        offCtx.drawImage(img, 0, 0);
                        imagesLoadedRef.current[index] = true;
                    };
                }
            }
            return offscreen;
        });

        iconCanvasesRef.current = newIconCanvases;
    }, [icons, images]);

    // Generate initial icon positions on a sphere
    useEffect(() => {
        const items = icons || images || [];
        const newIcons: Icon[] = [];
        const numIcons = items.length || 20;

        // Fibonacci sphere parameters
        const offset = 2 / numIcons;
        const increment = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < numIcons; i++) {
            const y = i * offset - 1 + offset / 2;
            const r = Math.sqrt(1 - y * y);
            const phi = i * increment;

            const x = Math.cos(phi) * r;
            const z = Math.sin(phi) * r;

            newIcons.push({
                x: x * 100,
                y: y * 100,
                z: z * 100,
                scale: 1,
                opacity: 1,
                id: i,
            });
        }
        setIconPositions(newIcons);
    }, [icons, images]);

    // Animation and rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
            const dx = mousePos.x - centerX;
            const dy = mousePos.y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = 0.003 + (distance / maxDistance) * 0.025;

            if (targetRotation) {
                const elapsed = performance.now() - targetRotation.startTime;
                const progress = Math.min(1, elapsed / targetRotation.duration);
                const easedProgress = easeOutCubic(progress);

                rotationRef.current = {
                    x:
                        targetRotation.startX +
                        (targetRotation.x - targetRotation.startX) * easedProgress,
                    y:
                        targetRotation.startY +
                        (targetRotation.y - targetRotation.startY) * easedProgress,
                };

                if (progress >= 1) {
                    setTargetRotation(null);
                }
            } else if (!isDragging) {
                rotationRef.current = {
                    x: rotationRef.current.x + (dy / canvas.height) * speed,
                    y: rotationRef.current.y + (dx / canvas.width) * speed,
                };
            }

            iconPositions.forEach((icon, index) => {
                const cosX = Math.cos(rotationRef.current.x);
                const sinX = Math.sin(rotationRef.current.x);
                const cosY = Math.cos(rotationRef.current.y);
                const sinY = Math.sin(rotationRef.current.y);

                const rotatedX = icon.x * cosY - icon.z * sinY;
                const rotatedZ = icon.x * sinY + icon.z * cosY;
                const rotatedY = icon.y * cosX + rotatedZ * sinX;

                const scale = (rotatedZ + 200) / 300;
                const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

                ctx.save();
                ctx.translate(
                    canvas.width / 2 + rotatedX,
                    canvas.height / 2 + rotatedY,
                );
                ctx.scale(scale, scale);
                ctx.globalAlpha = opacity;

                if (icons || images) {
                    // Only try to render icons/images if they exist
                    if (
                        iconCanvasesRef.current[index] &&
                        imagesLoadedRef.current[index]
                    ) {
                        ctx.drawImage(iconCanvasesRef.current[index], -20, -20, 40, 40);
                    }
                } else {
                    // Show numbered circles if no icons/images are provided
                    ctx.beginPath();
                    ctx.arc(0, 0, 20, 0, Math.PI * 2);
                    ctx.fillStyle = "#4444ff";
                    ctx.fill();
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "16px Arial";
                    ctx.fillText(`${icon.id + 1}`, 0, 0);
                }

                ctx.restore();
            });
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [icons, images, iconPositions, isDragging, mousePos, targetRotation]);

    return (
        <canvas
            width={400}
            height={400}
            ref={canvasRef}
            className="rounded-lg"
            aria-label="3D Talent Cloud"
            role="img"
        />
    );
}


const slugs = [
    "html5",
    "css",
    "tailwindcss",
    "bootstrap",
    "typescript",
    "javascript",
    "node.js",
    "express",
    "vite",
    "angular",
    "react",
    "reactrouter",
    "next.js",
    "nestjs",
    ".net",
    "apachekafka",
    "postgresql",
    "mysql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "sonarqube",
];

export function IconCloudRenderer() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}
