import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    useEffect(() => {
        setSelectedMenu(headerValues.findIndex(path => path.url === location.pathname.substring(1)));
        document.getElementById('portfolio-title')?.scrollIntoView();
    }, [location]);

    const headerValues = [
        { icon: 'pi pi-home', value: 'Home', url: 'home' },
        { icon: 'pi pi-book', value: 'Blog', url: 'blogs' },
        { icon: 'pi pi-objects-column', value: 'Projects', url: 'projects' },
        { icon: 'pi pi-info-circle', value: 'About', url: 'about' },
        { icon: 'pi pi-address-book', value: 'Contact', url: 'contact' },
    ];

    const [selectedMenu, setSelectedMenu] = useState<number>(() => {
        const storedIndex = sessionStorage.getItem("selectedMenu");
        return storedIndex ? parseInt(storedIndex, 10) : 0;
    });

    useEffect(() => {
        sessionStorage.setItem("selectedMenu", selectedMenu.toString());
    }, [selectedMenu]);

    return (
        <>
            <span id='portfolio-title'></span>
            <div className="w-full h-[5%] flex flex-col md:flex-col lg:flex-row gap-5 lg:gap-0 justify-evenly items-center p-10">
                <span className="text-mart-yellow font-marck-script text-3xl cursor-pointer">&lt; Vino /&gt;</span>
                <nav className="hidden md:flex lg:flex flex-row gap-5 items-center">
                    {
                        headerValues.map((data: any, index: number) => {
                            return (
                                <NavLink to={`/${data.url}`} key={index} onClick={() => setSelectedMenu(index)} className={"group relative flex flex-row justify-center items-center gap-2 menuButton custom-underline hoverTransition " + (index === selectedMenu ? 'text-mart-yellow' : 'text-white')}>
                                    <span className={data.icon}></span>
                                    {data.value}
                                </NavLink>
                            )
                        })
                    }
                </nav>
            </div >
        </>
    )
};

export default Header;