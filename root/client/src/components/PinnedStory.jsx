import { useEffect, useRef, useState } from "react";

function ScrollScenes({ steps = [] }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight;
      const vh = window.innerHeight;

      const progress =
        (-rect.top / (totalHeight - vh)) * steps.length;

      const index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(progress))
      );

      setActive(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section ref={containerRef} className="relative bg-secondary-light">

      {/* STICKY VISUAL */}
      <div className="sticky top-0 h-screen flex items-center">

        <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg relative">

            <img
              src={steps[active]?.image}
              className="
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-300 ease-in-out
              "
              alt=""
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-6">

            <p className="
              text-xs uppercase tracking-[0.35em] text-black/50
              transition-all duration-300 ease-in-out
            ">
              {steps[active]?.tag}
            </p>

            <h2 className="
              font-serif text-4xl md:text-5xl text-black
              transition-all duration-300 ease-in-out
            ">
              {steps[active]?.title}
            </h2>

            <p className="
              text-black/70 leading-relaxed
              transition-all duration-300 ease-in-out
            ">
              {steps[active]?.text}
            </p>

            {/* indicator */}
            <div className="flex gap-2 mt-4">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`
                    h-1 w-8 rounded-full
                    transition-all duration-300 ease-in-out
                    ${i === active ? "bg-black" : "bg-black/20"}
                  `}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* scroll space */}
      <div style={{ height: `${steps.length * 100}vh` }} />

    </section>
  );
}

export default ScrollScenes;