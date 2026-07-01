import heroImage from "../img/soave-alemanno-bg-2.svg";
import { NavLink } from "react-router-dom";

export default function BoxToForm({ title, subtitle, img, paragraph }) {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-24 px-6 bg-primary-dark/40"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center top",
        backgroundSize: "110% auto",
      }}
    >

      {/* BOX centrale */}
      <div
        className="flex z-10 w-full max-w-xl flex flex-col items-center text-center gap-4 p-4 md:p-8 bg-secondary-light shadow-md"
      >

        {/* Immagine */}
        <div className="relative w-full mb-5 flex justify-center">
          <div
            className="absolute -bottom-2 -right-2 w-full h-full pointer-events-none"
          />
          <img
            src={img}
            alt="Soave Alemanno"
            draggable={false} onContextMenu={(e) => e.preventDefault()}
            className="relative w-auto h-52 object-cover"f89
            style={{ display: "block" }}
          />
        </div>

        {/* Ornament */}
        { subtitle && <div className="flex items-center gap-4 w-full justify-center">
          <div className="w-8 h-px bg-black/40"/>
          <span
            className="subtitle"
          >
            {subtitle}
          </span>
          <div className="w-8 h-px bg-black/40"/>
        </div> }

        {/* Titolo */}
        <h2
          className="title text-xl sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>

        {/* Separatore */}
        <div
          className="w-8 h-px bg-black/40"
        />

        {/* Testo */}
        <p
          className="paragraph"
        >
          {paragraph}
        </p>

        {/* CTA */}
        <NavLink
          to="/prenota"
          className="
            px-6 sm:px-10
            py-3.5
            my-3
            text-[0.55rem] sm:text-[0.65rem]
            uppercase
            tracking-[0.25em] sm:tracking-[0.3em]
            font-light
            border
            transition-all
            duration-300
            whitespace-nowrap
            "
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
          Prenota una consulenza gratuita
        </NavLink>

      </div>
    </section>
  );
}