const symbols = ["✦", "❀", "✿", "✧"];


export default function Cards({ title, subtitle, cards }) {
  return (
    <section className="relative py-28 overflow-hidden bg-secondary-light">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="title">
            {title}
          </p>

          <p className="subtitle mt-4">
            {subtitle}
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
                p-6 lg:p-8
                flex lg:flex-col items-center justify-center
                gap-5 lg:gap-6
                transition-all duration-300
                hover:bg-white/80 hover:-translate-y-1
                shadow-sm hover:shadow-xl
                border border-secondary-dark/20
              "
            >

              {/* ICON */}
              {/* <img
                src={card.src}
                alt={card.alt}
                className="w-auto h-30 lg:w-20 lg:h-20 object-contain flex-shrink-0"
              /> */}

              {/* TEXT */}
              <div className="text-left lg:text-left">
                <h3 className="title text-xl lg:text-2xl">
                  {card.titolo}
                </h3>

                <p className="paragraph mt-4 text-left">
                  {card.testo}
                </p>
              </div>

              {/* NUMBER (desktop only) */}
              <div className="ml-auto lg:ml-0 lg:mt-auto text-xs tracking-[0.3em] text-black/30">
                {symbols[i % symbols.length]}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}