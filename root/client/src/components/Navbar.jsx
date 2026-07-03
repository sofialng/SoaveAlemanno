import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import img from "../img/img";

const links = [
  { to: "/", label: "Home" },
  { to: "/chisono", label: "Chi sono" },
  { to: "/galleria", label: "Galleria" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blocca scroll body quando menu mobile aperto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navLinkClass = ({ isActive }) =>
    [
      "text-[0.68rem] uppercase tracking-[0.25em] font-light transition-all duration-300 pb-0.5 border-b",
      isActive
        ? "border-[var(--color-secondary-dark)] text-[var(--color-secondary-dark)]"
        : "border-transparent text-black/80 hover:text-black/90 hover:border-[var(--color-primary-dark)]/30",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "text-sm uppercase tracking-[0.28em] font-light py-3 border-b w-full text-center transition-colors duration-200",
      isActive
        ? "text-[var(--color-secondary-dark)] border-[var(--color-secondary-dark)]"
        : "text-black/80 border-transparent hover:text-black/90",
    ].join(" ");

  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className="absolute top-0 left-0 w-full z-50 transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 md:px-12">

          {/* Logo */}
          <NavLink to="/" className="h-full flex items-center">
            <img src={img.logo2} alt="Soave" className="h-full w-auto p-1 cursor-pointer" draggable={false} onContextMenu={(e) => e.preventDefault()}/>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} className={navLinkClass}>
                {label}
              </NavLink>
            ))}

            {/* CTA */}
            <NavLink
              to="/prenota"
              className="ml-4 px-7 py-2.5 text-[0.65rem] uppercase tracking-[0.3em] font-light border transition-all duration-300"
              style={{
                borderColor: "var(--color-secondary-dark)",
                color: "var(--color-secondary-dark)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-secondary-dark)";
                e.currentTarget.style.color = "var(--color-secondary-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--color-secondary-dark)";
              }}
            >
              Prenota una consulenza
            </NavLink>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: "var(--color-secondary-dark)",
                transform: open ? "translateY(4px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                background: "var(--color-secondary-dark)",
                width: open ? "0" : "1rem",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: "var(--color-secondary-dark)",
                transform: open ? "translateY(-4px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden"
          style={{
            maxHeight: open ? "400px" : "0",
            background: "transparent",
          }}
        >
          <div className="flex flex-col items-center px-6 py-8 gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            <NavLink
              to="/prenota"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                  ml-4 mt-4 px-7 py-2.5
                  text-sm
                  uppercase
                  tracking-[0.28em]
                  border
                  transition-all
                  duration-300
                  hover:bg-primary-dark
                  hover:text-secondary-light
                  hover:border-transparent
                  ${
                    isActive
                      ? "bg-secondary-dark text-secondary-light border-transparent"
                      : "text-secondary-dark border-secondary-dark"
                  }
                `}
            >
              Prenota una consulenza
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;