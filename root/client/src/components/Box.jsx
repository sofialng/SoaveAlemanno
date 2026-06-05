import heroImage from "../img/soave-alemanno-bg-2.svg";
import cardImage from "../img/romantic-night.png";

export default function HeroSection() {
  return (
    <section 
        className="relative min-h-screen overflow-hidden"
        style={{
            backgroundColor: "#E3D1D3",
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center top",
            backgroundSize: "110% auto",
        }}
    >

      {/* Background image
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Overlay scuro */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Testo ripetuto */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            -top-20
            -left-20
            w-[140%]
            h-[140%]
            rotate-[-15deg]
            flex
            flex-wrap
            content-start
            gap-x-12
            gap-y-2
            text-white/20
            font-bold
            text-7xl
            uppercase
            leading-none
          "
        >
          {Array.from({ length: 120 }).map((_, i) => (
            <span key={i}>SOAVE ALEANNO</span>
          ))}
        </div>
      </div> */}

      {/* Contenuto */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">

        <div
          className="
            bg-white
            rounded-3xl
            shadow-2xl
            max-w-lg
            w-full
            p-8
            flex
            flex-col
            items-center
            text-center
            gap-6
          "
        >
          {/* Immagine */}
          <img
            src={cardImage}
            alt="Profilo"
            className="
              w-auto
              h-48
              object-cover
              rounded-2xl
            "
          />

          {/* Testo */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Aoooo ti sposi?
            </h2>

            <p className="text-gray-600">
              Raccontami il tuo desiderio ed io, insieme al mio staff, saremo felici di aiutarti a realizzarlo.
            </p>
          </div>

          {/* Bottone */}
          <button
            className="
              px-8
              py-3
              bg-black
              text-white
              rounded-full
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              active:scale-95
            "
          >
            Prenota la tua consulenza
          </button>
        </div>

      </div>
    </section>
  );
}