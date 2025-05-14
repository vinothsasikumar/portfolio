import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { GoMail, GoLocation } from "react-icons/go";
import { ArrowRight } from 'lucide-react';

import ShiningButton from '../components/mage/ShiningButton';


const Contact = () => {
    return (
        <>
            <section className='w-full flex flex-col justify-center items-center gap-5 mt-[5%]'>
                <h1 className="text-2xl font-semibold text-white">Let's Connect</h1>
                <p className='text-white text-justify'>
                    I'm always excited to collaborate, answer your questions, or simply chat.
                    Reach out through any of the options below — I'll get back to you as soon as possible!
                </p>

                <div className="h-auto bg-[#0D0E19] flex items-center justify-center p-8">
                    <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl bg-[#171923] rounded-lg p-8">

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                            <p className="text-gray-400 mb-8">
                                I'd love to hear from you. Whether you have a question, proposal, or just want to say hi.
                            </p>

                            <div className="flex items-center gap-4 p-4 mb-4 bg-[#1F2937] rounded-md">
                                <div className="bg-mart-yellow p-3 rounded-full">
                                    <GoMail />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">Email</p>
                                    <p className="text-gray-400 text-sm">vinoth.sasikumar@outlook.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 mb-8 bg-[#1F2937] rounded-md">
                                <div className="bg-mart-yellow p-3 rounded-full">
                                    <GoLocation />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">Location</p>
                                    <p className="text-gray-400 text-sm">Chennai, TamilNadu, India</p>
                                </div>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-5 text-3xl text-white">
                                <a className='transition-colors duration-300 hover:text-mart-yellow' href='https://www.linkedin.com/in/vinothsasikumar' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
                                <a className='transition-colors duration-300 hover:text-mart-yellow' href='https://github.com/vinothsasikumar' target='_blank' rel='noreferrer'><AiFillGithub /></a>
                                <a className='transition-colors duration-300 hover:text-mart-yellow' href='https://www.instagram.com/vinoth_sasikumar' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
                                <a className='transition-colors duration-300 hover:text-mart-yellow' href='https://www.facebook.com/vinothsasikumar26' target='_blank' rel='noreferrer'><AiFillFacebook /></a>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Send Me a Message</h2>
                            <p className="text-gray-400 mb-8">
                                Let's start a conversation. Fill out the form below and I'll get back to you as soon as possible.
                            </p>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Your name" className="bg-[#1F2937] border border-mart-yellow text-white rounded-md p-3" />
                                    <input type="email" placeholder="Your email" className="bg-[#1F2937] border border-mart-yellow text-white rounded-md p-3" />
                                </div>
                                <input type="text" placeholder="Subject of your message" className="w-full bg-[#1F2937] border border-mart-yellow text-white rounded-md p-3" />
                                <textarea placeholder="Write your message here..." rows={5} className="w-full bg-[#1F2937] border border-mart-yellow text-white rounded-md p-3"></textarea>
                                <ShiningButton label="Send Message" color="mart-yellow" labelcolor="dark-blue" icon={<ArrowRight className="transition-all group-hover:translate-x-1" />} />
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;