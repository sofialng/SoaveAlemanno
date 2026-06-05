import heroImage from "../img/soave-alemanno-bg-2.svg";
import cardImage from "../img/romantic-night.png";
import { NavLink } from "react-router-dom";

export default function Box2() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundColor: "#E3D1D3",
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center top",
        backgroundSize: "110% auto",
      }}
    >

      {/* overlay soft per eleganza */}
      {/* <div className="absolute inset-0 bg-black/10" /> */}

      {/* CARD */}
      <div className="relative z-10 px-6 w-full flex justify-center">

        <div className="
          w-full max-w-md
          backdrop-blur-xl
          bg-white/70
          border border-white/40
          shadow-2xl
          rounded-3xl
          p-10
          flex flex-col items-center text-center gap-6
          transition-all duration-300
          hover:scale-[1.02]
        ">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={cardImage}
              alt="Soave Alemanno"
              className="
                w-auto h-52 object-cover
              "
            />
          </div>

          {/* TEXT */}
          <div className="space-y-3">
            <h2 className="text-3xl font-serif text-black">
              Aoooo ti sposi?
            </h2>

            <p className="text-sm text-black/70 leading-relaxed">
              Raccontami il tuo desiderio e insieme al mio team lo trasformeremo in un evento curato in ogni dettaglio,
              con eleganza e armonia.
            </p>
          </div>

          {/* CTA */}
          <NavLink
            to="/prenota"
            className="button-highlight"
          >
            Prenota una consulenza
          </NavLink>

        </div>

      </div>
    </section>
  );
}