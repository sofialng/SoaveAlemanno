function ChiSono({ picture, title, subtitle, content }) {
  return (
    <section className="relative min-h-screen bg-secondary-light flex items-center p-8 md:p-16 lg:p-32">
      <div className="
        mx-auto 
        flex 
        flex-col 
        lg:flex-row 
        items-center 
        gap-10 
        px-16
        lg:px-16 
        max-w-7xl
      ">

        {/* Immagine */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={picture}
            alt="Foto"
            className="
              w-full 
              max-w-sm 
              lg:max-w-none 
              rounded-2xl 
              object-cover
            "
          />
        </div>

        {/* Testo */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="
            font-serif 
            text-3xl 
            sm:text-4xl 
            lg:text-5xl 
            tracking-widest
          ">
            {title}
          </h1>

          <p className="
            font-calligraphy 
            text-2xl 
            sm:text-3xl 
            lg:text-4xl
          ">
            {subtitle}
          </p>

          <p className="
            font-sans 
            text-sm 
            sm:text-base 
            leading-relaxed 
            max-w-prose
          ">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChiSono;
