function DoveISogni({ picture, title, subtitle, children }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary-light">
      {/* Container */}
      <div className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-16
        py-8
        flex
        items-center
        min-h-screen
      ">
        <div className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-8
          w-full
          px-8
          md:px-16
        ">

          {/* Testo */}
          <div className="
            w-full
            lg:w-1/2
            flex
            flex-col
            gap-6
            lg:pr-16
            text-center
            lg:text-left
          ">
            <h1 className="
              font-serif
              text-2xl
              sm:text-3xl
              lg:text-4xl
              tracking-widest
            ">
              {title}
            </h1>

            <h3 className="
              font-sans
              font-bold
            ">
              {subtitle}
            </h3>

            <p className="
              font-sans
              text-sm
              sm:text-base
              leading-relaxed
              max-w-2xl
              text-justify
            ">
              {children}
            </p>
          </div>

          {/* Immagine */}
          <div className="
            w-full
            lg:w-1/2
            flex
            justify-center
          ">
            <img 
              src={picture}
              alt="Foto"
              className="
                w-full
                max-w-sm
                lg:max-w-none
                rounded-xl
                object-cover
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default DoveISogni;
