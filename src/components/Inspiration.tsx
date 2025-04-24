import { Carousel } from 'primereact/carousel';

const Inspiration = () => {

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const influencers = [
        { 'image': '/inspiration/ratan.jpg', 'quote': 'If you want to walk fast, walk alone. But if you want to walk far, walk together – Ratan Tata' },
        { 'image': '/inspiration/apj.jpg', 'quote': 'A dream is not that which you see while sleeping, it is something that does not let you sleep – A.P.J. Abdul Kalam' },
        { 'image': '/inspiration/billgates.png', 'quote': 'It’s fine to celebrate success, but it is more important to heed the lessons of failure – Bill Gates' },
        { 'image': '/inspiration/larry.jpg', 'quote': 'It is easier to make progress on mega-ambitious dreams. Since no one else is crazy enough to do it, you have little competition – Larry Page' },
        { 'image': '/inspiration/msd.png', 'quote': 'Face the failure, until the failure fails to face you – M.S.Dhoni' },
        { 'image': '/inspiration/sridhar_vembu.jpg', 'quote': 'If we really take care of the customer, treat them right and leave money on the table, they stay longer with us long-term – Sridhar Vembu' },
        { 'image': '/inspiration/steve.png', 'quote': 'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become – Steve Jobs' },
        { 'image': '/inspiration/thalaivar.png', 'quote': 'You won’t get anything without hard work. What you get without hard work will never fructify – Rajnikanth' },
    ];

    const inspirationTemplate = (data: any) => {
        return (
            <div className='w-full relative'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-10 lg:px-20'>
                    <img className='w-48 rounded-full' src={data.image} alt='Ratan Tata' />
                    <span className='text-base lg:text-2xl text-center'>{data.quote}</span>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="w-full h-auto p-10 text-white text-center">
                <h1 className='text-3xl'>Inspiration That Fuels Me</h1>
                <br />
                <i>
                    Every quote here holds a lesson, a spark, or a moment of clarity. These are the voices I return to when I need direction, motivation, or just a reminder of why I started.
                </i>
                <br /><br />
                <Carousel value={influencers} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={inspirationTemplate} />
            </div>
        </>
    )
};

export default Inspiration;