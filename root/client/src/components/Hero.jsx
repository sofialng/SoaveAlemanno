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
    <section
      className="relative h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${sfondoHome})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >

      {/* Background */}
      <img
        src={sfondoHome}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* Overlay sfumato — scurisce il basso per leggibilità + bianco */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,31,34,0.25) 0%, rgba(13,31,34,0.15) 40%, rgba(13,31,34,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0 bg-white/50"
      />

      {/* Contenuto centrato */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center gap-2">

        {/* Logo */}
        <img
          src={logo}
          alt="Soave Alemanno Wedding & Event Planner"
          className="w-auto h-auto max-w-xs md:max-w-sm mb-10"
        />

        {/* Ornament */}
        {/* <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ background: "rgba(255,255,255,0.45)" }} />
          <span className="text-[0.55rem] tracking-[0.5em] uppercase font-light" style={{ color: "rgba(255,255,255,0.6)" }}>
            Wedding &amp; Event Planner
          </span>
          <div className="w-12 h-px" style={{ background: "rgba(255,255,255,0.45)" }} />
        </div> */}

        {/* Headline */}
        <h1
          className="font-serif text-2xl md:text-3xl tracking-wide leading-tight mb-6"
        >
          Il vostro amore merita un giorno indimenticabile
        </h1>

        {/* Sottotitolo */}
        <p
          className="max-w-md text-sm md:text-base font-light leading-relaxed mb-12 tracking-wide"
        >
          Ogni dettaglio pensato per voi. Ogni emozione vissuta come se fosse
          l'unica che conta.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToSection}
          className="px-12 py-4 text-[0.68rem] uppercase tracking-[0.32em] font-light border transition-all duration-500"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.borderColor = "black";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "black";
          }}
        >
          Esplora
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span
            className="text-[0.58rem] uppercase tracking-[0.4em] font-light"
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

export default HomeScreen;