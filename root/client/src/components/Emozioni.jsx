
import sfondoAlbero from "../img/sfondo-albero.jpg"

function Emozioni({title, subtitle, children }) {
  return (
    <section className="relative max-h-[80vh] overflow-hidden">
      {/* Container */}
        <div className="
            relative
            w-full
        ">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Contenuto sopra */}
            <div className="absolute
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                flex flex-col
                w-full md:w-[70%]
                gap-4
                z-20
                text-white
                p-8 md:p-16 lg:p-32">

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

            {/* Sfondo */}
            <img 
                src={sfondoAlbero}
                alt="Albero"
                className="
                    relative
                    w-full
                    h-[80vh]
                    object-cover
                    object-[40%_50%]
                    -z-10
                "
                />
        </div>
    </section>
  );
}

export default Emozioni;
