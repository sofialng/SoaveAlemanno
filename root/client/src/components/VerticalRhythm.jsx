function VerticalRhythm({ items = [] }) {
  return (
    <section className="relative py-28 bg-secondary-light overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-20 px-6">
        <p className="text-xs uppercase tracking-[0.35em] text-black/50">
          il nostro stile
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-black mt-3">
          Un’estetica costruita sul ritmo
        </h2>
      </div>

      {/* CENTER COLUMN */}
      <div className="relative max-w-3xl mx-auto px-6 flex flex-col gap-20">

        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">

            {/* TEXT BLOCK */}
            {item.type === "text" && (
              <>
                <p className="text-xs uppercase tracking-[0.35em] text-black/40 mb-3">
                  {item.tag}
                </p>

                <h3 className="font-serif text-2xl md:text-3xl text-black mb-4">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
                  {item.text}
                </p>
              </>
            )}

            {/* IMAGE BLOCK */}
            {item.type === "image" && (
              <img
                src={item.image}
                alt=""
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            )}

            {/* DIVIDER */}
            {item.type === "divider" && (
              <div className="w-20 h-px bg-black/20" />
            )}

          </div>
        ))}

      </div>
    </section>
  );
}

export default VerticalRhythm;