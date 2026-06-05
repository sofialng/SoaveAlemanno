function DoveISogni({ picture, title, subtitle, children }) {
  return (
    <section className="relative min-h-screen bg-secondary-light flex items-center overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="flex flex-col gap-6 text-center lg:text-left">

            {/* decorative line */}
            <div className="w-16 h-px bg-black/20 mx-auto lg:mx-0" />

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide text-black">
              {title}
            </h1>

            <h3 className="text-sm sm:text-base uppercase tracking-widest text-black/60">
              {subtitle}
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-black/70 max-w-xl mx-auto lg:mx-0">
              {children}
            </p>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* decorative frame */}
              <div className="absolute -inset-4 border border-black/10 rounded-2xl" />

              <img
                src={picture}
                alt="Foto"
                className="
                  relative
                  w-full
                  max-w-md
                  lg:max-w-lg
                  rounded-2xl
                  object-cover
                  shadow-lg
                "
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default DoveISogni;