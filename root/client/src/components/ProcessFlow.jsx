import { useState } from "react";

function ProcessFlow({ steps = [] }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 bg-secondary-light">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50">
            come lavoriamo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-black mt-3">
            Un percorso chiaro, senza stress
          </h2>
        </div>

        {/* FLOW LINE */}
        <div className="relative">

          <div className="absolute top-5 left-0 right-0 h-px bg-black/10" />

          <div className="flex justify-between relative">

            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex flex-col items-center text-center w-full"
              >
                {/* DOT */}
                <div
                  className={`
                    w-10 h-10 rounded-full border flex items-center justify-center
                    transition-all duration-300
                    ${
                      active === i
                        ? "bg-black text-white border-black"
                        : "bg-white border-black/20"
                    }
                  `}
                >
                  {i + 1}
                </div>

                {/* LABEL */}
                <p className="text-xs mt-3 uppercase tracking-widest text-black/60">
                  {step.title}
                </p>
              </button>
            ))}

          </div>

        </div>

        {/* CONTENT */}
        <div className="mt-16 text-center max-w-2xl mx-auto">

          <h3 className="font-serif text-2xl mb-3">
            {steps[active]?.title}
          </h3>

          <p className="text-black/70 leading-relaxed">
            {steps[active]?.text}
          </p>

        </div>

      </div>

    </section>
  );
}

export default ProcessFlow;