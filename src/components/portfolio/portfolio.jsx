import React from 'react';
import Inspiration from '../inspiration/inspiration';
import './portfolio.scss';

import { AiFillLinkedin, AiFillGithub, AiFillFileText, AiFillInstagram } from 'react-icons/ai';
import { BiCheckCircle } from 'react-icons/bi';
import { DiHtml5, DiCss3, DiBootstrap, DiSass, DiNpm, } from 'react-icons/di';
import { FaSourcetree } from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiCsharp, SiMaterialui, SiTailwindcss, SiAngular, SiJasmine,
    SiReact, SiDotnet, SiFlutter, SiElectron, SiNodedotjs, SiNestjs, SiNextdotjs, SiGraphql,
    SiMicrosoftsqlserver, SiPostgresql, SiMongodb, SiDocker, SiConfluence, SiBitbucket, SiJira,
    SiJenkins, SiAzurepipelines, SiMicrosoftazure, SiGit, SiGithub, SiGitlab, SiApachekafka, SiNginx
} from 'react-icons/si';

const Portfolio = () => {
    return (
        <>
            <header className='flex flex-col p-5 lg:p-10 bg-primary-black text-primary-white justify-between'>
                <div className='flex flex-col justify-evenly lg:justify-center h-85vh'>
                    <div className='flex flex-col lg:flex-row justify-evenly pt-10'>
                        <div className='flex justify-center lg:justify-end'>
                            <img src={require('../../assets/images/profilepic.jpg')} className='w-full h-full profilepic' alt='profile pic' />
                        </div>
                        <div className='flex flex-col mt-10 lg:mt-0'>
                            <h1 className='text-center lg:text-left text-4xl lg:text-7xl font-sacramento font-bold lg:font-medium'>Vinoth Sasikumar</h1>
                            <div className='flex flex-col text-center lg:text-left text-ash text-sm lg:text-lg font-bold font-quicksand mt-5 lg:pl-10'>
                                <span>Software Engineer</span>
                                <span>Upcoming Entrepreneur</span>
                                <span>From Chennai, Tamil Nadu, India</span>
                                <div className='w-full lg:w-8/12 flex-row justify-evenly lg:justify-between mt-10 text-5xl text-primary-white hidden lg:flex'>
                                    <a href='https://www.linkedin.com/in/vinothsasikumar/' target='_blank' rel='noreferrer' tooltip='Linkedin'><AiFillLinkedin /></a>
                                    <a href='https://github.com/vinothsasikumar' target='_blank' rel='noreferrer' tooltip='Github'><AiFillGithub /></a>
                                    <a href='https://www.instagram.com/vino26695/' target='_blank' rel='noreferrer' tooltip='Instagram'><AiFillInstagram /></a>
                                    <a href={require('../../assets/resume/resume.pdf')} target='_blank' rel='noreferrer' tooltip='Resume'><AiFillFileText /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-evenly lg:justify-between mt-10 lg:mt-0 w-full lg:w-1/12 text-4xl lg:hidden'>
                        <a href='https://www.linkedin.com/in/vinothsasikumar/' target='_blank' rel='noreferrer' tooltip='Linkedin'><AiFillLinkedin /></a>
                        <a href='https://github.com/vinothsasikumar' target='_blank' rel='noreferrer' tooltip='Github'><AiFillGithub /></a>
                        <a href='https://www.instagram.com/vino26695/' target='_blank' rel='noreferrer' tooltip='Instagram'><AiFillInstagram /></a>
                        <a href={require('../../assets/resume/resume.pdf')} target='_blank' rel='noreferrer' tooltip='Resume'><AiFillFileText /></a>
                    </div>
                </div>
                <div className='scroll-downs'>
                    <div className='mousey'>
                        <div className='scroller'></div>
                    </div>
                </div>
            </header>

            <section id='about' className='p-10'>
                <h1 className='text-4xl lg:text-6xl font-quicksand text-center'>About</h1>
                <p className='mt-10 text-base lg:text-2xl font-noto leading-10'>
                    Hello, I am <span className='font-sacramento font-semibold'>Vinoth</span>
                    <br /><br />
                    Earth welcomed me on 26, Jun 1995. I was born and brought up in Chennai. Completed my higher secondary in State Board, Semi Govt School and completed my Bachelor of Technology in Information Technology under Anna University, Chennai. I currently work as a <span className='italic font-semibold'>Lead Software Engineer</span> at <span className='italic font-semibold'>UST</span>.
                    <br /><br />
                    I have around 6 years of experience in building Web, Mobile, and Desktop applications. I started my career in a start-up and worked for multiple services and product-based companies.
                    <br /><br />
                    I like sharing my knowledge with others and I love to learn and work on technologies.
                    <br /><br />
                    My ultimate dream is to become a Software Entrepreneur.
                </p>
            </section>

            <section id='experience' className='bg-primary-black text-primary-white p-10'>
                <h1 className='text-4xl lg:text-6xl font-quicksand text-center'>Experience</h1>
                <div className='mt-20 font-noto'>
                    <div className='flex flex-col lg:grid grid-cols-12 text-gray-50'>

                        <div className='flex lg:contents'>
                            <div className='col-start-2 col-end-4 mr-2 lg:mx-auto relative'>
                                <div className='h-full w-6 flex items-center justify-center'>
                                    <div className='h-full w-1 bg-primary-white pointer-events-none'></div>
                                </div>
                                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-white shadow flex justify-center items-center'>
                                    <i className='text-primary-black'><BiCheckCircle /></i>
                                </div>
                            </div>
                            <div className='bg-primary-white flex flex-row justify-start items-center col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-lg w-full'>
                                <img className='w-0 lg:w-6p' src={require('../../assets/images/logo/ust.png')} alt='UST' />
                                <div className='bg-primary-white text-primary-black lg:ml-20'>
                                    <h3 className='font-semibold text-base lg:text-lg'>UST</h3>
                                    <h3 className='font-semibold text-sm lg:text-base mb-1 italic'>Lead Software Engineer</h3>
                                    <p className='leading-tight text-sm w-full'>
                                        Jun 2021 - Present
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex lg:contents'>
                            <div className='col-start-2 col-end-4 mr-2 lg:mx-auto relative'>
                                <div className='h-full w-6 flex items-center justify-center'>
                                    <div className='h-full w-1 bg-primary-white pointer-events-none'></div>
                                </div>
                                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-white shadow flex justify-center items-center'>
                                    <i className='text-primary-black'><BiCheckCircle /></i>
                                </div>
                            </div>
                            <div className='bg-primary-white flex flex-row justify-start items-center col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-lg w-full'>
                                <img className='w-0 lg:w-1/12' src={require('../../assets/images/logo/adp.png')} alt='ADP' />
                                <div className='bg-primary-white text-primary-black lg:ml-10'>
                                    <h3 className='font-semibold text-base lg:text-lg'>ADP, LLC</h3>
                                    <h3 className='font-semibold text-sm lg:text-base mb-1 italic'>Software Engineer</h3>
                                    <p className='leading-tight text-sm w-full'>
                                        Oct 2019 - May 2021
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex lg:contents'>
                            <div className='col-start-2 col-end-4 mr-2 lg:mx-auto relative'>
                                <div className='h-full w-6 flex items-center justify-center'>
                                    <div className='h-full w-1 bg-primary-white pointer-events-none'></div>
                                </div>
                                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-white shadow flex justify-center items-center'>
                                    <i className='text-primary-black'><BiCheckCircle /></i>
                                </div>
                            </div>
                            <div className='bg-primary-white flex flex-row justify-start items-center col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-lg w-full'>
                                <img className='w-0 lg:w-1/12' src={require('../../assets/images/logo/ahs.png')} alt='UST' />
                                <div className='bg-primary-white text-primary-black lg:ml-10'>
                                    <h3 className='font-semibold text-base lg:text-lg'>Access Healthcare Services</h3>
                                    <h3 className='font-semibold text-sm lg:text-base mb-1 italic'>Senior Developer</h3>
                                    <p className='leading-tight text-sm w-full'>
                                        Apr 2018 - Oct 2019
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex lg:contents'>
                            <div className='col-start-2 col-end-4 mr-2 lg:mx-auto relative'>
                                <div className='h-full w-6 flex items-center justify-center'>
                                    <div className='h-full w-1 bg-primary-white pointer-events-none'></div>
                                </div>
                                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-white shadow flex justify-center items-center'>
                                    <i className='text-primary-black'><BiCheckCircle /></i>
                                </div>
                            </div>
                            <div className='bg-primary-white flex flex-row justify-start items-center col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-lg w-full'>
                                <img className='w-0 lg:w-1/12' src={require('../../assets/images/logo/kadamba.png')} alt='UST' />
                                <div className='bg-primary-white text-primary-black lg:ml-10'>
                                    <h3 className='font-semibold text-base lg:text-lg'>Kadamba Technologies</h3>
                                    <h3 className='font-semibold text-sm lg:text-base mb-1 italic'>Software Developer</h3>
                                    <p className='leading-tight text-sm w-full'>
                                        May 2017 - Apr 2018
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex lg:contents'>
                            <div className='col-start-2 col-end-4 mr-2 lg:mx-auto relative'>
                                <div className='h-full w-6 flex items-center justify-center'>
                                    <div className='h-full w-1 bg-primary-white pointer-events-none'></div>
                                </div>
                                <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-white shadow flex justify-center items-center'>
                                    <i className='text-primary-black'><BiCheckCircle /></i>
                                </div>
                            </div>
                            <div className='bg-primary-white flex flex-row justify-start items-center col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-lg w-full'>
                                <img className='hidden lg:block w-0 lg:w-1/12' src={require('../../assets/images/logo/kadamba.png')} alt='UST' />
                                <div className='bg-primary-white text-primary-black lg:ml-10'>
                                    <h3 className='font-semibold text-base lg:text-lg'>Kadamba Technologies</h3>
                                    <h3 className='font-semibold text-sm lg:text-base mb-1 italic'>Associate Software Developer</h3>
                                    <p className='leading-tight text-sm w-full'>
                                        May 2016 - May 2017
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id='clients' className='p-10'>
                <h1 className='text-4xl lg:text-6xl font-quicksand text-center'>Clients</h1>
                <div className='inline-flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mt-10 clients'>
                    <img className='1/2 lg:w-2/12' src={require('../../assets/images/logo/star.png')} alt='Star Sports' />
                    <img className='1/2 lg:w-2/12' src={require('../../assets/images/logo/espn.png')} alt='ESPN Cric Info' />
                    <img className='1/2 lg:w-2/12' src={require('../../assets/images/logo/athena.png')} alt='Athena Health' />
                    <img className='1/2 lg:w-2/12' src={require('../../assets/images/logo/ibx.png')} alt='IBC' />
                    <img className='1/2 lg:w-2/12' src={require('../../assets/images/logo/icc.png')} alt='ICC' />
                </div>
            </section>

            <section id='tools' className='bg-primary-black text-primary-white p-10'>
                <h1 className='text-4xl lg:text-6xl font-quicksand text-center'>Tools and Technologies</h1>
                <div className='mt-10 flex flex-col'>
                    <div className='inline-flex flex-row text-5xl flex-wrap justify-evenly items-center gap-x-10 lg:gap-x-52 gap-y-10'>
                        <SiJavascript />
                        <SiTypescript />
                        <SiCsharp />
                        <DiHtml5 />
                        <DiCss3 />
                        <SiMaterialui />
                        <DiBootstrap />
                        <DiSass />
                        <SiTailwindcss />
                        <DiNpm />
                        <SiAngular />
                        <SiJasmine />
                        <SiReact />
                        <SiDotnet />
                        <SiFlutter />
                        <SiElectron />
                        <SiNodedotjs />
                        <SiNestjs />
                        <SiNextdotjs />
                        <SiGraphql />
                        <SiMicrosoftsqlserver />
                        <SiPostgresql />
                        <SiMongodb />
                        <SiDocker />
                        <SiConfluence />
                        <SiBitbucket />
                        <SiJira />
                        <SiJenkins />
                        <SiAzurepipelines />
                        <SiGit />
                        <SiGithub />
                        <SiGitlab />
                        <FaSourcetree />
                        <SiMicrosoftazure />
                        <SiApachekafka />
                        <SiNginx />
                    </div>
                </div>
            </section>

            <section id='quotes' className='p-10'>
                <Inspiration />
            </section>

            <footer className='text-center lg:text-right font-noto pt-5'>
                Made with 🖤 by <span className='font-sacramento pr-5 text-3xl font-bold'>Vino</span>
            </footer>
        </>
    );
};

export default Portfolio;