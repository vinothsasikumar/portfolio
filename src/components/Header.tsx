import { useState } from "react";

const Header = () => {

    const headerValues = [
        { 'icon': 'pi pi-home', 'value': 'Home' },
        { 'icon': 'pi pi-book', 'value': 'Blog' },
        { 'icon': 'pi pi-objects-column', 'value': 'Projects' },
        { 'icon': 'pi pi-file', 'value': 'Resume' },
        { 'icon': 'pi pi-info-circle', 'value': 'About' },
        { 'icon': 'pi pi-address-book', 'value': 'Contact' },
    ];

    const [selectedMenu, setSelectedMenu] = useState<number>(0);

    return (
        <>
            <div className="w-full h-[5%] flex flex-col md:flex-col lg:flex-row gap-5 lg:gap-0 justify-evenly items-center p-10">
                <span className="text-mart-yellow font-marck-script text-3xl cursor-pointer">&lt; Vino /&gt;</span>
                <ul className="hidden md:flex lg:flex flex-row gap-5 items-center">
                    {
                        headerValues.map((data: any, index: number) => {
                            return (
                                <li key={index} onClick={() => setSelectedMenu(index)} className={"group relative flex flex-row justify-center items-center gap-2 menuButton custom-underline hoverTransition " + (index === selectedMenu ? 'text-mart-yellow' : 'text-white')}> <span
                                    className={data.icon}></span> {data.value}</li>
                            )
                        })
                    }
                </ul>
            </div >
        </>
    )
};

export default Header;