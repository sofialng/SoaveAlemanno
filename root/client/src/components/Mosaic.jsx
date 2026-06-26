export default function TransparentDescription({ image, title, subtitle, paragraph }) {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary-light overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={image}
          className="w-full h-full object-cover"
        />

        {/* cinematic overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
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

          <p className="subtitle text-secondary-light">
            {subtitle}
          </p>

          <h2 className="title text-4xl md:text-5xl text-secondary-light">
            {title}
          </h2>

          <div className="w-16 h-px bg-white/30 my-6" />

          <p className="paragraph text-secondary-light/80">
            {paragraph}
          </p>

        </div>
      </div>
    </section>
  );
}