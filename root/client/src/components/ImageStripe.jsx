import { NavLink } from "react-router-dom";

export default function ImageStripe({picture, title, subtitle, paragraph, button }) {
  return (
    <section className="relative max-h-[80vh] overflow-hidden">
      {/* Container */}
        <div className="
            relative
            w-full
        ">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>

            {/* Contenuto sopra */}
            <div className="absolute flex flex-col 
                w-full h-full
                items-center
                gap-4
                z-20
                p-8 md:p-16 lg:p-32">

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
            </div>

            {/* Sfondo */}
            <img 
                src={picture}
                alt="Albero"
                className="
                    relative
                    w-full
                    h-[80vh]
                    object-cover
                    object-[40%_50%]
                    -z-10
                "
                />
        </div>
    </section>
  );
}