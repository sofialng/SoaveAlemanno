import { useState } from "react";

function ServiceExplorer({ data }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 bg-secondary-light">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50">
            servizi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-black mt-3">
            Cosa possiamo creare per te
          </h2>
        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - selector */}
          <div className="flex flex-col gap-3">

            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`
                  text-left px-5 py-4 rounded-xl transition-all
                  border
                  ${
                    active === index
                      ? "bg-black text-white border-black"
                      : "bg-transparent border-black/10 hover:bg-black/5"
                  }
                `}
              >
                <p className="font-serif text-lg">
                  {item.title}
                </p>
                <p className="text-xs opacity-70">
                  {item.subtitle}
                </p>
              </button>
            ))}

          </div>

          {/* RIGHT - content */}
          <div className="relative">

            <img
              src={data[active].image}
              alt={data[active].title}
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
            />

            <div className="mt-6">
              <h3 className="font-serif text-2xl">
                {data[active].title}
              </h3>

              <p className="text-black/70 mt-3 leading-relaxed">
                {data[active].description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {data[active].services.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-black/10 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ServiceExplorer;