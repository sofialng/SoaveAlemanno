import sfondoHome from "../img/hero.jpg";
import logo from "../img/logo.png";

function HomeScreen() {
  const scrollToSection = () => {
    const element = document.getElementById("DoveISogni");
    const navbar = document.getElementById("navbar");
    if (!element) return;
    const navbarHeight = navbar?.offsetHeight || 0;
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight + 1;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* Foto parallax */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${sfondoHome})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay leggero */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom right, rgba(250,248,245,0.72) 0%, rgba(250,248,245,0.3) 55%, transparent 100%)",
        }}
      />

      {/* Contenuto — in alto a sinistra */}
      <div className="relative w-full h-full flex flex-col justify-start items-start px-10 md:px-20 pt-36 md:pt-44 max-w-xl">

        {/* Logo */}
        <img
          src={logo}
          alt="Soave Alemanno Wedding & Event Planner"
          className="w-auto h-auto max-w-[180px] md:max-w-[220px] mb-10"
        />

        {/* Ornament */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-8 h-px" style={{ background: "var(--color-primary-light)" }} />
          <span
            className="text-[0.55rem] uppercase tracking-[0.42em] font-light"
            style={{ color: "var(--color-primary-light)" }}
          >
            Wedding &amp; Event Planner
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-light text-3xl md:text-5xl tracking-wide leading-tight mb-5"
          style={{ color: "var(--color-primary-dark)" }}
        >
          Il vostro amore
          <br />
          merita un giorno
          <br />
          <span className="italic">indimenticabile</span>
        </h1>

        {/* Separatore */}
        <div
          className="w-8 h-px mb-6"
          style={{ background: "var(--color-primary-dark)", opacity: 0.15 }}
        />

        {/* Sottotitolo */}
        <p
          className="text-sm font-light leading-relaxed mb-10 max-w-xs"
          style={{ color: "var(--color-primary-dark)", opacity: 0.55 }}
        >
          Ogni dettaglio pensato per voi. Ogni emozione vissuta come se fosse
          l'unica che conta.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToSection}
          className="px-10 py-3.5 text-[0.65rem] uppercase tracking-[0.3em] font-light border transition-all duration-400"
          style={{
            borderColor: "var(--color-primary-dark)",
            color: "var(--color-primary-dark)",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-primary-dark)";
            e.currentTarget.style.color = "var(--color-secondary-light)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--color-primary-dark)";
          }}
        >
          Esplora
        </button>
      </div>

      {/* Scroll indicator — in basso a sinistra */}
      <div className="absolute bottom-10 left-10 md:left-20 flex flex-col items-start gap-2">
        <span
          className="text-[0.55rem] uppercase tracking-[0.4em] font-light"
          style={{ color: "var(--color-primary-dark)", opacity: 0.35 }}
        >
          Scorri
        </span>
        <div
          className="w-px h-10"
          style={{
            background: `linear-gradient(to bottom, var(--color-primary-dark), transparent)`,
            opacity: 0.25,
          }}
        />
      </div>

    </section>
  );
}

export default HomeScreen;