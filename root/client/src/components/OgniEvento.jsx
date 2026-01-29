import soaveBg from "../img/soave-alemanno-bg.svg"
import wedding1 from "../img/wedding-1.svg"
import wedding2 from "../img/wedding-2.svg"
import wedding3 from "../img/wedding-3.svg"

function OgniEvento({quote}) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-secondary-light items-center">

    <div className="flex flex-col w-full">
        {/* Immagine di sfondo */}
        <div className="
            absolute inset-0
            w-full h-[60vh]
            flex
            items-center
            p-8 md:p-16 lg:px-32 lg:py-8
            ">
            <img 
                src={soaveBg}
                alt="Soave Alemanno Wedding & Event Planner"
                className="
                w-full h-auto
            "/>
        </div>

        {/* Contenuto sopra */}
        <div className="
            relative z-10
            h-[60vh]
            flex items-center justify-center
            p-8 md:p-16 lg:px-32 lg:py-8
        ">
            <p className="
            max-w-xl
            text-center
            text-black
            text-md md:text-lg
            leading-relaxed
            tracking-widest
            ">
            {quote}
            </p>
        </div>

        <div className="relative flex flex-col lg:flex-row w-full justify-center">
            <a href="https://storyset.com/happy">
                <img 
                    src={wedding1}
                    className="w-full h-auto clickable-image"
                    alt="Finish line"
                />
            </a>
            {/*<a href="https://storyset.com/people">
                <img 
                    src={wedding3}
                    className="w-full h-auto clickable-image"
                    alt="Finish line"
                />
            </a>*/}
            <a href="https://storyset.com/people">
                <img 
                    src={wedding2}
                    className="w-full h-auto clickable-image"
                    alt="Finish line"
                />
            </a>
        </div>
    </div>
    </section>


  );
}

export default OgniEvento;
