function WeddingJourney({ items = [] }) {
  return (
    <section className="relative bg-secondary-light py-24 overflow-hidden">

      {/* subtle vertical guide line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-black/10 hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6">

        {/* header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50">
            il nostro processo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-black mt-3">
            Il viaggio verso il tuo giorno perfetto
          </h2>
        </div>

        {/* timeline */}
        <div className="space-y-16">

          {items.map((item, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col lg:flex-row items-center gap-8
                ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
              `}
            >

              {/* dot */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black/40" />

              {/* content */}
              <div className="w-full lg:w-1/2 px-4">
                <div
                  className={`
                    max-w-md
                    ${index % 2 === 0 ? "lg:ml-auto lg:text-right" : "lg:mr-auto lg:text-left"}
                  `}
                >

                  <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-2">
                    {item.step}
                  </p>

                  <h3 className="font-serif text-2xl text-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-black/70 leading-relaxed">
                    {item.text}
                  </p>

                </div>
              </div>

              {/* optional image */}
              {item.image && (
                <div className="w-full lg:w-1/2 px-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WeddingJourney;