import { useEffect, useState } from "react";

import SkillGrid from "../components/SkillGrid";
import Inspiration from "../components/Inspiration";

import { SiFreelancer } from "react-icons/si";


const Home = () => {

    const roles = ['Full Stack Developer', 'Software Architect Trainee', 'Technical Lead & Mentor', 'RPA & AI Developer', 'Product Builder & Tech Educator'];
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const fullText = roles[currentRole];

        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText.charAt(charIndex));
                setCharIndex(charIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentRole((currentRole + 1) % roles.length);
                setDisplayText("");
                setCharIndex(0);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, currentRole]);

    const getExperienceDuration = (startYear: number, startMonth: number) => {
        const startDate = new Date(startYear, startMonth - 1);
        const now = new Date();

        const totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 +
            (now.getMonth() - startDate.getMonth());

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        return { years, months };
    };

    const experience = getExperienceDuration(2016, 5);

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center mt-[5%]">
                <div className="w-[90%] 2xl:w-[60%] flex flex-col md:flex-col lg:flex-row gap-10 justify-center items-center">
                    <div className="w-[90%] lg:w-[50%] flex flex-col gap-5 mt-20">
                        <span className="text-white text-4xl font-bold">Hello <span className="wave">👋</span>, This is</span>
                        <span className="bg-gradient-to-r from-[#FFC220] via-[#FF4FD8] to-[#8514f5] bg-clip-text text-transparent text-4xl font-bold">Vinoth Sasikumar</span>
                        <h2 className="text-[#8B99AE] text-2xl font-semibold">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </h2>
                        <p className="text-[#8B99AE] text-justify">
                            {experience.years}.{experience.months} years building scalable web apps using .NET, Angular, React & Azure. Experienced in team leadership, cloud integration, and driving business-focused tech solutions. Passionate about architecture, innovation, and helping teams grow.
                        </p>                        
                        <div className="flex flex-col md:flex-col lg:flex-row justify-start items-center gap-10">
                            <a href="https://www.linkedin.com/in/vinothsasikumar/" aria-label="linkedin" target="_blank">
                                <button className="flex justify-center items-center gap-2 bg-[#0a66c2] text-white p-3 font-semibold rounded-lg">
                                    Connect with me on <i className="pi pi-linkedin"></i>
                                </button>
                            </a>

                            <button className="flex justify-center items-center gap-2 border border-mart-yellow text-mart-yellow p-3 font-semibold rounded-lg transition-colors duration-500 hover:text-white hover:border-white">
                                Learn with me 😄
                            </button>
                        </div>
                    </div>
                    <SkillGrid />
                </div>
                <div className="w-full p-[5%] flex justify-center items-center">
                    <div className="bg-[#212738] w-[90%] lg:w-[50%] p-[5%] rounded-xl flex flex-col justify-center items-center text-center gap-5">
                        <SiFreelancer className="text-7xl text-white" />
                        <h1 className="text-3xl font-semibold text-white">Let's Grow Together</h1>
                        <p className="text-white text-justify">
                            Whether you’re looking for a freelance developer, a collaborator for your next big idea, or someone to teach modern technologies — I’m open and ready. Let’s build and grow together.
                        </p>
                        <button className="flex justify-center items-center gap-2 border border-mart-yellow text-mart-yellow p-3 font-semibold rounded-lg transition-colors duration-500 hover:text-white hover:border-white">
                            Get in Touch
                        </button>
                    </div>
                </div>
                <Inspiration />
            </div>
        </>
    )
};

export default Home;