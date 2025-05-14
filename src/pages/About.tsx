import { DiHtml5, DiCss3, DiBootstrap, DiSass, DiNpm, DiMsqlServer } from 'react-icons/di';
import { FaSourcetree } from 'react-icons/fa';
import { BiLogoGoLang } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import {
    SiJavascript, SiTypescript, SiMaterialdesign, SiTailwindcss, SiAngular, SiJasmine, SiJest,
    SiReact, SiDotnet, SiFlutter, SiElectron, SiNodedotjs, SiNestjs, SiNextdotjs, SiGraphql,
    SiPostgresql, SiMongodb, SiDocker, SiConfluence, SiBitbucket, SiJira,
    SiJenkins, SiGit, SiGithub, SiGitlab, SiApachekafka, SiNginx,
    SiPython
} from 'react-icons/si';

import Marquee from "react-fast-marquee";
import { IconCloudRenderer } from '../components/mage/IconGlobe';
import TimelinePage from '../components/mage/ExperienceTimeline';

const About = () => {

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
  
    const clients = [
        { name: "Independence Blue Cross", logo: "/logo/clients/ibx.png" },
        { name: "Wells Fargo", logo: "/logo/clients/wells.png" },
        { name: "Athenahealth", logo: "/logo/clients/athena.png" },
        { name: "International Cricket Council", logo: "/logo/clients/icc.png" },
        { name: "ESPNcricinfo", logo: "/logo/clients/espn.png" },
        { name: "Star Sports", logo: "/logo/clients/star.png" },
    ];

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-10 mt-[5%]">
                <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row lg:justify-around gap-10 lg:gap-0 items-center">
                    <div className="w-[90%] lg:w-[50%] text-[#8B99AE] text-justify">
                        With {experience.years}.{experience.months} years of experience in designing, developing, and delivering scalable enterprise solutions, I specialize in:
                        <br /><br />
                        <ul className="list-disc pl-5">
                            <li>Modern Web Technologies: Angular, React, .NET Core, SQL Server, Mongo DB</li>
                            <li>Cloud & Integration: Azure, Kafka, Microservices, Redis</li>
                            <li>Leadership: Leading a development team, mentoring team members, and collaborating with stakeholders to achieve business goals.</li>
                        </ul>
                        <br />
                        Key Achievements:
                        Successfully led migration of legacy applications to modern frameworks, improving performance and scalability.
                        Designed and implemented centralized systems for seamless access and automation, enhancing operational efficiency.
                        Recognized with multiple awards, including Shining Star and Best of Us Award, for outstanding contributions to projects and teams.
                        <br /><br />
                        Aspiring Project Manager:
                        As I continue to excel in technical leadership, I am enthusiastic about transitioning into a project management role where I can combine my technical expertise, team management skills, and strategic vision to deliver impactful projects. I am eager to contribute to organizational success through effective project planning, resource management, and stakeholder collaboration.
                        <br /><br />
                        What I Bring:
                        A proven record of delivering high-quality solutions.
                        Strong interpersonal and communication skills.
                        Passion for mentoring teams and driving results.
                        <br /><br />
                        Let’s connect to discuss technology, leadership, and opportunities to collaborate on innovative projects!
                        <IconCloudRenderer />
                    </div>
                    <div className="w-[90%] lg:w-[30%] overflow-hidden rounded-xl">
                        <img className="transition-transform duration-500 ease-in-out lg:hover:scale-105" src="/pics/me.png" alt="Vinoth Sasikumar" />
                    </div>
                </div>
                <div className="bg-[#212738] w-[90%] p-[5%] rounded-xl flex flex-col justify-center items-center text-center gap-5">
                    <h1 className="text-2xl font-semibold text-white">Skills, Tools & Technologies</h1>
                    <p className="text-white text-center">
                        A showcase of the technologies, frameworks, and tools I’ve mastered and passionately work with to build scalable, efficient, and innovative solutions. From full-stack development to cloud integration and team leadership, my expertise spans across modern technology stacks that drive real-world impact.
                    </p>
                    <div className='w-full text-white text-5xl'>
                        <ul className='flex flex-col gap-10'>
                            <li className='flex flex-col justify-center items-start gap-5'>
                                <span className='text-xl'>Programming Languages</span>
                                <div className='inline-flex flex-row flex-wrap justify-evenly items-center gap-x-10 lg:gap-x-10 gap-y-10'>
                                    <SiJavascript />
                                    <SiTypescript />
                                    <TbBrandCSharp />
                                    <SiPython />
                                    <BiLogoGoLang />
                                    <DiHtml5 />
                                    <DiCss3 />
                                </div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex flex-col justify-center items-start gap-5'>
                                <span className='text-xl'>UI & Styling Frameworks</span>
                                <div className='inline-flex flex-row flex-wrap justify-evenly items-center gap-x-10 lg:gap-x-10 gap-y-10'>
                                    <SiTailwindcss />
                                    <SiMaterialdesign />
                                    <DiSass />
                                    <DiBootstrap />
                                </div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex flex-col justify-center items-start gap-5'>
                                <span className='text-xl'>Frontend Frameworks & Libraries</span>
                                <div className='inline-flex flex-row flex-wrap justify-evenly items-center gap-x-10 lg:gap-x-10 gap-y-10'>
                                    <SiAngular />
                                    <SiReact />
                                    <SiNextdotjs />
                                    <SiFlutter />
                                    <SiElectron />
                                    <DiNpm />
                                    <SiJasmine />
                                    <SiJest />
                                </div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex flex-col justify-center items-start gap-5'>
                                <span className='text-xl'>Backend & API Technologies</span>
                                <div className='inline-flex flex-row flex-wrap justify-evenly items-center gap-x-10 lg:gap-x-10 gap-y-10'>
                                    <SiDotnet />
                                    <SiNodedotjs />
                                    <SiNestjs />
                                    <SiGraphql />
                                </div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex flex-col justify-center items-start gap-5'>
                                <span className='text-xl'>Databases</span>
                                <div className='inline-flex flex-row flex-wrap justify-evenly items-center gap-x-10 lg:gap-x-10 gap-y-10'>
                                    <DiMsqlServer />
                                    <SiPostgresql />
                                    <SiMongodb />
                                </div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex flex-col justify-center items-start gap-5'>
                                <span className='text-xl'>Cloud, DevOps & Infrastructure</span>
                                <div className='inline-flex flex-row flex-wrap justify-evenly items-center gap-x-10 lg:gap-x-10 gap-y-10'>
                                    <VscAzure />
                                    <SiDocker />
                                    <SiApachekafka />
                                    <SiNginx />
                                    <SiJenkins />
                                </div>
                            </li>
                            <hr className='w-full' />
                            <li className='flex flex-col justify-center items-start gap-5'>
                                <span className='text-xl'>Version Control & Collaboration</span>
                                <div className='inline-flex flex-row flex-wrap justify-evenly items-center gap-x-10 lg:gap-x-10 gap-y-10'>
                                    <SiGit />
                                    <SiGithub />
                                    <SiGitlab />
                                    <SiBitbucket />
                                    <FaSourcetree />
                                    <SiConfluence />
                                    <SiJira />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-[90%] p-[3%] flex flex-col justify-center items-start gap-5'>
                    <h1 className="text-2xl font-semibold text-white">My Journey So Far</h1>
                    <p className="text-white text-center">
                        From writing my first line of code to leading high-impact teams every role, every project has shaped the engineer and mentor I am today.
                    </p>
                    <TimelinePage />                    
                </div>
                <div className='w-[90%] p-[3%] flex flex-col justify-center items-center gap-5'>
                    <h1 className="text-2xl font-semibold text-white">Building Solutions for Exceptional Clients</h1>
                    <p className='text-white text-justify'>
                        From startups to enterprise giants, my journey with clients has been driven by a deep commitment to excellence, innovation, and collaboration. Every project has been a partnership focused on delivering real business value, building trust, and creating systems that are not just functional but truly transformative. Here's a glimpse into some of the incredible brands and teams I've had the honor to work with.
                    </p>

                    <div className="bg-[#f5f5f5] mask-gradient p-10">
                        <Marquee>
                            {
                                [0, 1].map(_ => {
                                    return (
                                        clients.map((data: any, index: number) => {
                                            return (
                                                <img key={index} src={data.logo} alt={data.name} className="rounded-lg object-cover mx-5 cursor-pointer grayscale transition-all duration-500 hover:grayscale-0" />
                                            )
                                        })
                                    )
                                })
                            }
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;