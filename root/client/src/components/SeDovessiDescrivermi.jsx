import finishLine from "../img/finish-line.svg";
import powerful from "../img/powerful.svg";
import creative from "../img/creative.svg";
import visionBoard from "../img/vision-board.svg";
import greenVector from "../img/green-vector.svg";

function SeDovessiDescrivermi() {
  return (
    <section className="relative overflow-hidden py-20 ">
        <div className="relative items-center h-full justify-center ">

            {/* Vettore verde */}
            <img
                src={greenVector}
                alt="Green vector"
                className="
                absolute 
                top-[5%]
                w-full 
                -z-10
                pointer-events-none
                "
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">

                {/* Titolo */}
                <div className="mb-16">
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-2">
                    Se dovessi descrivermi...
                </h1>
                <p className="font-sans text-base sm:text-lg lg:text-xl">
                    ...potrei dire di me che sono:
                </p>
                </div>

                {/* Cards */}
                <div
                className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-4 
                    gap-10
                "
                >

                {/* Card */}
                <div className="flex flex-col items-center gap-4">
                    <a href="https://storyset.com/happy">
                        <img 
                            src={finishLine}
                            className="w-full clickable-image"
                            alt="Finish line"
                        />
                    </a>
                    <p className="font-calligraphy text-2xl">Inarrestabile</p>
                    <p className="text-sm leading-relaxed max-w-xs">
                    perché trascinatrice piena di energie con la mente sempre in fermento e mille idee da sviluppare.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <a href="https://storyset.com/people">
                        <img 
                            src={powerful}
                            className="w-full clickable-image"
                            alt="Powerful"
                        />
                    </a>
                    <p className="font-calligraphy text-2xl">Forte</p>
                    <p className="text-sm leading-relaxed max-w-xs">
                    quando c'è un obiettivo da raggiungere non c'è ostacolo che possa farmi desistere.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <a href="https://storyset.com/idea">
                        <img 
                            src={creative}
                            className="w-full clickable-image"
                            alt="Creative"
                        />
                    </a> 
                    <p className="font-calligraphy text-2xl">Appassionata</p>
                    <p className="text-sm leading-relaxed max-w-xs">
                    amo ciò che faccio e ci metto tutta me stessa.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <a href="https://storyset.com/worker">
                        <img 
                            src={visionBoard}
                            className="w-full clickable-image"
                            alt="Vision board"
                        />
                    </a> 
                    <p className="font-calligraphy text-2xl">
                    <span className="tracking-[0.4em]">At</span>tenta
                    </p>
                    <p className="text-sm leading-relaxed max-w-xs">
                    ogni evento è importante, unico ed irripetibile ed un'organizzazione impeccabile è l'elemento chiave per un'ottima riuscita.
                    </p>
                </div>

                </div>
            </div>
        </div>

    </section>
  );
}

export default SeDovessiDescrivermi;