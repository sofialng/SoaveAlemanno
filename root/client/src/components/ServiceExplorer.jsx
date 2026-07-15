import { useState } from "react";
import PhotoCredit from "./PhotoCredit";

function ServiceExplorer({ title, subtitle, paragraph, data }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="subtitle">
            {subtitle}
          </p>
          <h2 className="title">
            {title}
          </h2>
          <p className="paragraph">
            {paragraph}
          </p>
        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - selector */}
          <div className="flex flex-col gap-3 lg:sticky lg:top-28 self-start">

            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`
                  text-left px-5 py-4 transition-all
                  border
                  ${
                    active === index
                      ? "bg-secondary-dark text-secondary-light border-secondary-dark"
                      : "bg-transparent border-secondary-dark/20 hover:bg-secondary-dark/5"
                  }
                `}
              >
                <p className={`
                  title text-lg m-0 p-0
                  ${
                    active === index
                      ? "text-secondary-light"
                      : ""
                  }
                  `}>
                  {item.title}
                </p>
                <p className={`
                  paragraph text-sm m-0 p-0 text-left
                  ${
                    active === index
                      ? "text-secondary-light/70"
                      : ""
                  }
                  `}>
                  {item.subtitle}
                </p>
              </button>
            ))}

          </div>

          {/* RIGHT - content */}
          <div className="relative">

            <div className="mt-6">
              <h3 className="title text-2xl">
                {data[active].title}
              </h3>

              <p className="paragraph text-left">
                {data[active].description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-secondary-dark">
                {data[active].services.map((s, i) => (
                  <span
                    key={i}
                    className="text-[0.6rem] uppercase tracking-[0.25em] font-light px-3 py-1.5 border"
                    style={{
                      borderColor: "var(--color-secondary-dark)",
                      color: "var(--color-secondary-dark)",
                      opacity: 0.85,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <img
              src={data[active].image}
              draggable={false} onContextMenu={(e) => e.preventDefault()}
              className="w-full h-[280px] object-cover shadow-lg mt-4"
            />
            {data[active].credit && <PhotoCredit credit={data[active].credit} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceExplorer;