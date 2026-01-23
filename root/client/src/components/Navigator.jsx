import { useState, useEffect } from "react";
import logo from "../img/logo.png";

function Navigator({homeRef}) {
    const [open, setOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        if (!homeRef?.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
            setIsSticky(!entry.isIntersecting);
            },
            {
            threshold: 0,
            }
        );

        observer.observe(homeRef.current);

        return () => observer.disconnect();
        }, [homeRef]);


  return (
    <>
        {/* Overlay fullscreen blur */}
        {open && (
            <div className="fixed inset-0 z-40 bg-white/30 backdrop-blur-md lg:hidden" />
            )}

        <nav className={`fixed top-0 left-0 w-full z-50 isolation-isolate
            ${open 
                ? "" 
                : isSticky 
                    ? "bg-white/10 backdrop-blur-sm shadow-md" 
                    : "bg-transparent"}
        `}>
        <div className="h-20 flex items-center justify-between px-15">
            
            {/* Logo */}
            <img
                src={logo}
                alt="Soave"
                className="h-full w-auto p-2"
                />


            {/* Menu desktop */}
            <div className="hidden lg:flex items-center">
                <a className="px-4 whitespace-nowrap">Home</a>
                <a className="px-4 whitespace-nowrap">Chi sono</a>
                <a className="px-4 whitespace-nowrap">Servizi</a>
                <a className="px-4 whitespace-nowrap">Portfolio</a>
                <a className="px-4 whitespace-nowrap">Recensioni</a>
                <a className="ml-4 button">
                    Prenota una consulenza
                </a>
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
                    <a href="">Home</a>
                    <a href="">Chi sono</a>
                    <a href="">Servizi</a>
                    <a href="">Portfolio</a>
                    <a href="">Recensioni</a>

                    <a
                        href=""
                        className="px-4 py-2 bg-purple-900 text-white rounded-full font-semibold"
                        >
                        Prenota una consulenza
                    </a>
                </div>
            </div>
        )}
        </nav>
    </>
  );
}

export default Navigator;