"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

const experienceData = [
    { logo: '/logo/experience/ust.png', company: 'UST', role: 'Associate Architect', duration: 'OCT 2023 - Present', location: 'Chennai, TamilNadu' },
    { logo: '/logo/experience/ust.png', company: 'UST', role: 'Technical Lead', duration: 'FEB 2022 - SEP 2023', location: 'Trivandrum, Kerala' },
    { logo: '/logo/experience/ust.png', company: 'UST', role: 'Lead Software Engineer', duration: 'JUN 2021 - FEB 2022', location: 'Chennai, TamilNadu' },
    { logo: '/logo/experience/adp.png', company: 'ADP India', role: 'Software Engineer', duration: 'OCT 2019 - MAY 2021', location: 'Chennai, TamilNadu' },
    { logo: '/logo/experience/ahs.png', company: 'Access Healthcare Services', role: 'Senior Developer', duration: 'APR 2018 - OCT 2019', location: 'Chennai, TamilNadu' },
    { logo: '/logo/experience/kadamba.png', company: 'Kadamba Technologies', role: 'Software Developer', duration: 'APR 2017 - APR 2018', location: 'Chennai, TamilNadu' },
    { logo: '/logo/experience/kadamba.png', company: 'Kadamba Technologies', role: 'Software Trainee', duration: 'MAY 2016 - APR 2017', location: 'Chennai, TamilNadu' },
];

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full md:px-10"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-dark-blue flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-500 border border-neutral-500 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-img:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default function TimelinePage() {
    const timelineData: TimelineEntry[] = [];

    experienceData.forEach((experience) => {
        let width = 0;

        switch (experience.company.toLowerCase()) {
            case 'ust': width = 10; break;
            case 'adp india': width = 15; break;
            case 'kadamba technologies': width = 15; break;
            default: width = 50; break;
        }

        timelineData.push({
            title: experience.company,
            content: (
                <div className="flex flex-col justify-center items-start gap-5">
                    {experience.logo && (
                        <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className={`w-[${width}%] ${experience.company.toLowerCase() === 'ust' ? 'bg-white p-3' : ''} rounded-md object-contain p-1 hidden lg:block`}
                        />
                    )}
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">{experience.duration}</time>
                    <p className="mb-1 text-base font-normal text-gray-500">{experience.role}</p>
                    <p className="mb-4 text-base font-normal text-gray-500">{experience.location}</p>
                </div>
            )
        })
    });

    return (
        <Timeline data={timelineData} />
    );
}
