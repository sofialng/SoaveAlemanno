import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function Navigator() {
    const [open, setOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsSticky(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // trigger iniziale

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


  return (
    <>
        {/* Overlay fullscreen blur */}
        {open && (
            <div className="fixed inset-0 z-40 bg-white/30 backdrop-blur-md lg:hidden" />
            )}

        <nav id="navbar" className={`fixed top-0 left-0 w-full z-50 isolation-isolate
            ${open 
                ? "" 
                : isSticky 
                    ? "bg-secondary-light backdrop-blur-md shadow-md transition duration-300 " 
                    : "bg-transparent"}
        `}>
        <div className="h-20 flex items-center justify-between px-15">
            
            {/* Logo */}
            <NavLink to="/" className="h-full flex items-center">
                <img
                    src={logo}
                    alt="Soave"
                    className="h-full w-auto p-2 cursor-pointer"
                />
            </NavLink>
            {/*<h1 className="font-serif text-3xl">Soave <span className="font-serif-italic">Alemanno</span></h1>*/}


            {/* Menu desktop */}
            <div className="hidden lg:flex items-center">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-black font-bold px-4 whitespace-nowrap transition-all duration-300" : "px-4 whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:text-secondary-dark hover:font-bold"}>
                    Home
                </NavLink>
                <NavLink to="/chisono" className={({ isActive }) => isActive ? "text-black font-bold px-4 whitespace-nowrap transition-all duration-300" : "px-4 whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:text-secondary-dark hover:font-bold"}>
                    Chi sono
                </NavLink>
                {/*<a className="px-4 whitespace-nowrap">Servizi</a>*/}
                <NavLink to="/galleria" className={({ isActive }) => isActive ? "text-black font-bold px-4 whitespace-nowrap transition-all duration-300" : "px-4 whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:text-secondary-dark hover:font-bold"}>
                    Galleria
                </NavLink>
                {/* <NavLink to="/contatti" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap transition-all duration-300" : "px-4 whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:text-secondary-dark hover:font-bold"}>
                    Contatti
                </NavLink> */}
                <NavLink to="/prenota" className={({ isActive }) => isActive ? "font-bold ml-4 button transition-all duration-300" : "ml-4 button transition-all duration-300 hover:-translate-y-0.5"}>
                    Prenota una consulenza
                </NavLink>
            </div>

            {/* Hamburger */}
            <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-purple-900"
            >
            ☰
            </button>
        </div>
                

        {/* Menu mobile */}
        {open && (
            <div className="lg:hidden absolute top-20 left-0 w-full">
                <div className="flex flex-col items-center py-6 space-y-4 text-lg  ">
                    <NavLink to="/" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap" : "px-4 whitespace-nowrap"}  onClick={() => setOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/chisono" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap" : "px-4 whitespace-nowrap"}  onClick={() => setOpen(false)}>
                        Chi sono
                    </NavLink>
                    <NavLink to="/servizi" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap" : "px-4 whitespace-nowrap"}  onClick={() => setOpen(false)}>
                        Servizi
                    </NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap" : "px-4 whitespace-nowrap"}  onClick={() => setOpen(false)}>
                        Portfolio
                    </NavLink>
                    <NavLink to="/recensioni" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap" : "px-4 whitespace-nowrap"}  onClick={() => setOpen(false)}>
                        Recensioni
                    </NavLink>
                    <NavLink to="/prenota" className={({ isActive }) => isActive ? "font-bold px-4 py-2 bg-purple-900 text-white rounded-full" : "px-4 py-2 bg-purple-900 text-white rounded-full"}  onClick={() => setOpen(false)}>
                        Prenota una consulenza
                    </NavLink>
                </div>
            </div>
        )}
        </nav>
    </>
  );
}

export default Navigator;