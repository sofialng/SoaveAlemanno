function EditorialBlock({ image, title, subtitle, children }) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-secondary-light overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 w-full">

        <div className="max-w-xl bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl">

          {/* subtitle */}
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">
            {subtitle}
          </p>

          {/* title */}
          <h1 className="font-serif text-3xl md:text-5xl text-black mt-3">
            {title}
          </h1>

          {/* divider */}
          <div className="w-20 h-px bg-black/20 my-5" />

          {/* text */}
          <p className="text-sm md:text-base leading-relaxed text-black/70">
            {children}
          </p>

        </div>

      </div>
    </section>
  );
}

export default EditorialBlock;