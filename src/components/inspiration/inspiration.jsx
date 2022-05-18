import React, { useEffect, useRef, useState } from 'react';
import './inspiration.scss'

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const influencers = [
    { 'image': require('../../assets/images/inspiration/ratan.jpg'), 'quote': 'If you want to walk fast, walk alone. But if you want to walk far, walk together – Ratan Tata' },
    { 'image': require('../../assets/images/inspiration/apj.jpg'), 'quote': 'A dream is not that which you see while sleeping, it is something that does not let you sleep – A.P.J. Abdul Kalam' },
    { 'image': require('../../assets/images/inspiration/billgates.png'), 'quote': 'It’s fine to celebrate success, but it is more important to heed the lessons of failure – Bill Gates' },
    { 'image': require('../../assets/images/inspiration/larry.jpg'), 'quote': 'It is easier to make progress on mega-ambitious dreams. Since no one else is crazy enough to do it, you have little competition – Larry Page' },
    { 'image': require('../../assets/images/inspiration/msd.png'), 'quote': 'Face the failure, until the failure fails to face you – M.S.Dhoni' },
    { 'image': require('../../assets/images/inspiration/sridhar_vembu.jpg'), 'quote': 'If we really take care of the customer, treat them right and leave money on the table, they stay longer with us long-term – Sridhar Vembu' },
    { 'image': require('../../assets/images/inspiration/steve.png'), 'quote': 'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become – Steve Jobs' },
    { 'image': require('../../assets/images/inspiration/thalaivar.png'), 'quote': 'You won’t get anything without hard work. What you get without hard work will never fructify – Rajnikanth' },
];

let count = 0
let slideInterval;

const Inspiration = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    useEffect(() => {
        slideRef.current.addEventListener('animationend', () => {
            slideRef.current.classList.remove('fade-animation');
        });

        slideRef.current.addEventListener('mouseenter', pauseSlider);
        slideRef.current.addEventListener('mouseleave', startSlider);

        startSlider();
        return () => {
            pauseSlider();
        }
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleNextClick();
        }, 5000)
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleNextClick = () => {
        count = (count + 1) % influencers.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-animation');
    };

    const handlePrevClick = () => {
        count = (currentIndex + influencers.length - 1) % influencers.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-animation');
    };

    return (
        <>
            <div ref={slideRef} className='w-full select-none relative font-noto'>
                <div className='flex flex-col lg:flex-row justify-evenly items-center px-10 lg:px-20'>
                    <img className='w-72 rounded-full' src={influencers[currentIndex].image} alt='Ratan Tata' />
                    <span className='text-base lg:text-2xl text-center'>{influencers[currentIndex].quote}</span>
                </div>

                <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                    <button onClick={handlePrevClick}><GrFormPrevious className='text-3xl' /></button>
                    <button onClick={handleNextClick}><GrFormNext className='text-3xl' /></button>
                </div>
            </div>
        </>
    );
};

export default Inspiration;