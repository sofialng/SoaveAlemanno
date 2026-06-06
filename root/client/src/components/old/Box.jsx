import heroImage from "../img/soave-alemanno-bg-2.svg";
import cardImage from "../img/romantic-night.png";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/prenota" className="button-highlight">
                Prenota una consulenza
            </NavLink>
        </div>

      </div>
    </section>
  );
}