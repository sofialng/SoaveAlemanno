function DoveISogni({ picture, title, children }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary-light">
      {/* Container */}
      <div className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-16
        py-16
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
        ">

          {/* Testo */}
          <div className="
            w-full
            lg:w-2/3
            flex
            flex-col
            gap-6
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

            <p className="
              font-sans
              text-sm
              sm:text-base
              leading-relaxed
              max-w-2xl
            ">
              {children}
            </p>
          </div>

          {/* Immagine */}
          <div className="
            w-full
            lg:w-1/3
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
                rounded-2xl
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
