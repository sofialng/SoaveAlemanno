import img from "../img/img";

export default function Hero() {

  return (
    <section className="relative h-[100svh] min-h-[500px] overflow-hidden flex items-center justify-center">

      {/* BACKGROUND FISSO */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${img.home.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Overlay bianco */}
      <div
        className="absolute inset-0 bg-white/50"
      />

      {/* Contenuto centrato */}
        <div
          className="
            relative h-full
            flex flex-col
            items-center
            justify-start
            px-6
            pt-40
            text-center
            gap-4
            max-w-none md:max-w-5xl lg:max-w-7xl
          "
        >
      {/* <div
        className="
          relative h-full w-full
          flex flex-col
          justify-start
          items-start
          text-left
          px-8 md:px-20
          pt-20 md:pt-30
        "
      > */}

        {/* Logo */}
        {/* <img
          src={logo}
          alt="Soave Alemanno Wedding & Event Planner"
          className="w-auto h-auto max-w-xs md:max-w-sm mb-10"
        /> */}

        {/* Ornament */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-black"/>
          <span className="text-[0.65rem] tracking-[0.5em] uppercase font-light">
            Soave Alemanno - Wedding &amp; Event Planner
          </span>
          <div className="w-12 h-px bg-black"/>
        </div>

        {/* Headline */}
        <h1
          className="title"
        >
          Il vostro amore merita un giorno indimenticabile
        </h1>

        {/* Sottotitolo */}
        <p
          className="max-w-md text-sm md:text-base font-light leading-relaxed tracking-wide"
        >
          Al resto, penso io.
        </p>

        {/* CTA */}
        {/* <button
        onClick={scrollToSection}
        className="px-10 py-3.5 my-3 text-[0.65rem] uppercase tracking-[0.3em] font-light border transition-all duration-300"
        // style={{
        //   borderColor: "var(--color-secondary-dark)",
        //   color: "var(--color-secondary-dark)",
        //   background: "transparent",
        // }}
        // onMouseEnter={(e) => {
        //   e.currentTarget.style.background = "var(--color-secondary-dark)";
        //   e.currentTarget.style.color = "var(--color-secondary-light)";
        // }}
        // onMouseLeave={(e) => {
        //   e.currentTarget.style.background = "transparent";
        //   e.currentTarget.style.color = "var(--color-secondary-dark)";
        // }}
        style={{
          borderColor: "transparent",
          color: "var(--color-secondary-light)",
          background: "var(--color-secondary-dark)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--color-secondary-dark)";
          e.currentTarget.style.borderColor = "var(--color-secondary-dark)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--color-secondary-dark)";
          e.currentTarget.style.color = "var(--color-secondary-light)";
        }}
        >
          Esplora
        </button> */}

        {/* Scroll indicator */}
        <div className="absolute bottom-0 translate-y-15  flex flex-col items-center gap-2 ">
          <span
            className="text-[0.65rem] uppercase tracking-[0.4em] font-light"
          >
            Scorri
          </span>
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>

      </div>
    </section>
  );
}