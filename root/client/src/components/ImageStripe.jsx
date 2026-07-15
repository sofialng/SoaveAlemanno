import { NavLink } from "react-router-dom";
import PhotoCredit from "./PhotoCredit";

export default function ImageStripe({picture, title, subtitle, paragraph, button, credit }) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Container */}
        <div className="relative w-full">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>

            {/* Contenuto sopra */}
            <div className="relative z-20 flex min-h-[80vh] flex-col justify-center items-center p-8 md:p-16 lg:p-16 text-center gap-4">

                <h1 className="title text-secondary-light">
                    {title}
                </h1>

                <h3 className="subtitle text-secondary-light">
                    {subtitle}
                </h3>

                <p className="paragraph text-secondary-light">
                    {paragraph}
                </p>

                {/* CTA */}
                {button && 
                    <NavLink
                        to="/galleria"
                        className="px-10 py-3.5 my-8 text-[0.65rem] uppercase tracking-[0.3em] font-light border transition-all duration-300"
                        style={{
                        borderColor: "var(--color-secondary-light)",
                        color: "var(--color-secondary-light)",
                        background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--color-secondary-light)";
                        e.currentTarget.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--color-secondary-light)";
                        }}
                    >
                        {button}
                    </NavLink>
                }
            {credit && <PhotoCredit className="text-secondary-light/40 z-30" credit={credit} />}
            </div>

            {/* Sfondo */}
            <img 
                src={picture}
                alt="Albero"
                className="absolute inset-0 w-full h-full object-cover object-[40%_50%]"
                />

        </div>        
    </section>
  );
}