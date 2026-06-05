import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function Navbar() {
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
      {/* overlay mobile */}
      {open && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40" />
      )}

      {/* NAVBAR OVERLAY */}
      <nav
        className="
          absolute top-0 left-0 w-full z-50
          transition-all duration-300 bg-transparent"
      >
        <div className="h-20 flex items-center justify-between px-15">

            {/* Logo */}
            <NavLink to="/" className="h-full flex items-center">
                <img
                    src={logo}
                    alt="Soave"
                    className="h-full w-auto p-2 cursor-pointer"
                />
            </NavLink>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-4">
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
                <NavLink to="/prenota" className="ml-4 button-highlight">
                    Prenota una consulenza
                </NavLink>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-primary-dark"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden absolute top-20 left-0 w-full">
            <div className="flex flex-col items-center py-6 gap-4 text-lg">
                <NavLink to="/" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap" : "px-4 whitespace-nowrap"}  onClick={() => setOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/chisono" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap" : "px-4 whitespace-nowrap"}  onClick={() => setOpen(false)}>
                    Chi sono
                </NavLink>
                <NavLink to="/galleria" className={({ isActive }) => isActive ? "font-bold px-4 whitespace-nowrap" : "px-4 whitespace-nowrap"}  onClick={() => setOpen(false)}>
                    Galleria
                </NavLink>
                <NavLink to="/prenota" className="button-highlight" onClick={() => setOpen(false)}>
                    Prenota una consulenza
                </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;