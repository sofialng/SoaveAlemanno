import vaso from "../img/vaso.jpg"
import daniela from "../img/daniela-full.jpg"

function Arches({quote}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary-dark">
        {/* Container */} 
        <div className="flex flex-col md:flex-row h-full items-center justify-center">
            <div className="
                relative
                w-full
                sm:w-2/3
                flex
                flex-row
                p-4
                lg:p-16
                gap-4
            ">
                {/* Immagini */}
                <img 
                    src={daniela}
                    alt="Daniela"
                    className="
                        relative
                        w-1/2
                        h-auto
                        object-cover
                        rounded-t-full
                    "
                    />

                <img 
                    src={vaso}
                    alt="Vaso"
                    className="
                        relative
                        w-1/2
                        h-auto
                        object-cover
                        rounded-t-full
                    "
                    />
            </div>

            <div className="
                relative 
                w-full md:w-1/3
                text-3xl
                font-serif-italic
                text-white
                m-32 md:m-16 
                ">
                {quote}
            </div>
        </div>
    </section>
  );
}

export default Arches;
