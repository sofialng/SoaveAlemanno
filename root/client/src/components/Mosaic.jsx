function SideRevealStory({ image, title, subtitle, children }) {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary-light overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* cinematic overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT PANEL */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-20 flex justify-end">

        <div className="
          w-full
          lg:w-[45%]
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-2xl
          p-10
          text-white
        ">

          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            {subtitle}
          </p>

          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
            {title}
          </h2>

          <div className="w-16 h-px bg-white/30 my-6" />

          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            {children}
          </p>

        </div>

      </div>
    </section>
  );
}

export default SideRevealStory;