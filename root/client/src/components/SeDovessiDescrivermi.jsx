import finishLine from "../img/finish-line.svg";
import powerful from "../img/powerful.svg";
import creative from "../img/creative.svg";
import visionBoard from "../img/vision-board.svg";

const cards = [
  {
    src: finishLine,
    alt: "Finish line",
    titolo: "Inarrestabile",
    testo:
      "Trascinatrice piena di energie con la mente sempre in fermento e mille idee da sviluppare.",
  },
  {
    src: powerful,
    alt: "Powerful",
    titolo: "Forte",
    testo:
      "Quando c'è un obiettivo da raggiungere non c'è ostacolo che possa farmi desistere.",
  },
  {
    src: creative,
    alt: "Creative",
    titolo: "Appassionata",
    testo: "Amo ciò che faccio e ci metto tutta me stessa.",
  },
  {
    src: visionBoard,
    alt: "Vision board",
    titolo: "Attenta",
    testo:
      "Ogni evento è unico e irripetibile: un’organizzazione impeccabile è la chiave per una riuscita perfetta.",
  },
];

export default function Cards() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🌈 PREMIUM BACKGROUND (mesh gradient) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#f5e6d8_0%,transparent_40%),radial-gradient(circle_at_80%_30%,#e9f0ea_0%,transparent_45%),radial-gradient(circle_at_50%_80%,#f3eaf5_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf7] via-[#f7f3ee] to-[#f9f6f2]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="title">
            Se dovessi descrivermi
          </p>

          <p className="subtitle">
            …potrei dire di me che sono:
          </p>
        </div>

        {/* HORIZONTAL LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {cards.map((card, i) => (
            <div
              key={i}
              className="
                flex-1
                bg-white/60 backdrop-blur-md
                border border-black/5
                rounded-2xl
                p-6 lg:p-8
                flex lg:flex-col items-center justify-center
                gap-5 lg:gap-6
                transition-all duration-300
                hover:bg-white/80 hover:-translate-y-1
              "
            >

              {/* ICON */}
              <img
                src={card.src}
                alt={card.alt}
                className="w-auto h-30 lg:w-20 lg:h-20 object-contain flex-shrink-0"
              />

              {/* TEXT */}
              <div className="text-left lg:text-left">
                <h3 className="title text-xl lg:text-2xl">
                  {card.titolo}
                </h3>

                <p className="paragraph mt-2">
                  {card.testo}
                </p>
              </div>

              {/* NUMBER (desktop only) */}
              <div className="ml-auto lg:ml-0 lg:mt-auto text-xs tracking-[0.3em] text-black/30">
                {String(i + 1).padStart(2, "0")}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}