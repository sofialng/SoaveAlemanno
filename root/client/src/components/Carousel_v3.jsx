const NUMERALI = ["I", "II", "III", "IV", "V"];

export default function Carousel({ tipi }) {
  return (
    <section
      className="relative py-16 bg-secondary-light overflow-hidden"
    >
      {/* HEADER */}
      <div
        className="max-w-5xl mx-auto px-6 lg:px-20 mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="subtitle">Le nostre proposte</span>
        </div>
        <h2 className="title">
          Un matrimonio per ogni
          <span className="font-calligraphy">{" "}sogno</span>
        </h2>
      </div>

      {/* ELENCO */}
      <div className="max-w-5xl mx-auto px-6 lg:px-20">
        {tipi.map((tipo, index) => {
          const imageRight = index % 2 !== 0;

          return (
            <div key={index}>
              <div
                className={`
                  flex
                  flex-col
                  ${imageRight ? "lg:flex-row-reverse" : "lg:flex-row"}
                  items-center
                  gap-10
                  lg:gap-16
                  py-14
                `}
              >
                {/* FOTO */}
                <div className="w-full lg:w-2/5 shrink-0">
                  <div
                    className="p-4 shadow-lg -inset-4 border border-black/10 m-4"
                  >
                    <img
                      src={tipo.image}
                      alt={tipo.titolo}
                      className="
                        w-full
                        h-64
                        md:h-72
                        object-cover
                      "
                    />
                  </div>
                </div>

                {/* TESTO */}
                <div className="w-full lg:w-3/5">
                  <div className="flex items-center gap-4 mb-4">
                    {/* <span className="font-calligraphy text-secondary-dark/30 text-4xl">
                      {NUMERALI[index]}
                    </span> */}
                    {/* <span
                      className="
                        text-[0.65rem]
                        tracking-[0.5em]
                        uppercase
                        text-secondary-dark
                      "
                    >
                      Capitolo {NUMERALI[index]}
                    </span> */}
                  </div>

                  <h3 className="title text-3xl md:text-4xl mb-5">
                    {tipo.titolo}
                  </h3>

                  <p className="paragraph text-left mb-6 max-w-lg">
                    {tipo.descrizione}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {tipo.dettagli.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-secondary-dark" />
                        <span className="subtitle">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SEPARATORE */}
              {index < tipi.length - 1 && (
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px flex-1 bg-secondary-dark/15" />
                  <span className="text-secondary-dark/40 text-sm">✦</span>
                  <span className="h-px flex-1 bg-secondary-dark/15" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}