import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillFacebook, AiTwotoneMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className="w-full h-auto flex flex-col md:flex-col lg:flex-row gap-5 lg:gap-0 justify-evenly items-center p-10">
                <span className="text-white flex flex-row justify-center items-center gap-2">
                    Credits to <a href="https://github.com/emmabostian/developer-portfolios" target="_blank"><i className="pi pi-github"></i></a> &
                    <a href="https://codewithmukesh.com/" target="_blank"><img className="w-5" src="/mukesh.svg" alt="Vinoth Sasikumar" /></a>
                </span>
                <div className='flex flex-row justify-center gap-5 text-3xl text-white'>
                    <a href='https://www.linkedin.com/in/vinothsasikumar' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
                    <a href='https://github.com/vinothsasikumar' target='_blank' rel='noreferrer'><AiFillGithub /></a>
                    <a href='https://www.instagram.com/vinoth_sasikumar' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
                    <a href='https://www.facebook.com/vinothsasikumar26' target='_blank' rel='noreferrer'><AiFillFacebook /></a>
                    <a href='mailto:vinoth.sasikumar@outlook.com' target='_blank' rel='noreferrer'><AiTwotoneMail /></a>
                </div>
                <span className="text-white flex flex-row justify-center items-center gap-2">
                    Made with <i className="pi pi-heart-fill text-ang-purple"></i> by
                    <img className="w-10" src="/favicon.png" alt="Vinoth Sasikumar" />
                </span>
            </div>
        </>
    )
};

export default Footer;