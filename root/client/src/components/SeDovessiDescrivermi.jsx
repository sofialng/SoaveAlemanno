import finishLine from "../img/finish-line.svg";
import powerful from "../img/powerful.svg";
import creative from "../img/creative.svg";
import visionBoard from "../img/vision-board.svg";
import greenVector from "../img/green-vector.svg";

function SeDovessiDescrivermi() {
  return (
    <>
        <section className="relative h-screen overflow-hidden">
          {/* Container virtuale */}
          <div className="relative items-center h-full justify-center ">
            {/* Vettore verde sfondo */}
            <img 
                src={greenVector}
                className="w-full relative top-[20%] -z-100 pointer-events-none"
                alt="Green vector"
            />
            {/* Container interno */}
            <div className="relative flex justify-center items-center w-full h-1/2 p-32">
                <div className=" relative w-full h-full flex flex-col gap-16 justify-center text-center">
                    <span>
                        <h1 className="font-serif text-3xl">Se dovessi descrivermi...</h1>
                        <p className="font-sans text-xl">...potrei dire di me che sono:</p>
                    </span>
                    {/* Cards */}
                    <div className="flex flex-row justify-center gap-8 w-full">
                        <div className="w-1/4 h-auto flex flex-col gap-4">
                            <a href="https://storyset.com/happy">
                                <img 
                                    src={finishLine}
                                    className="clickable-image"
                                    alt="Finish line"
                                />
                            </a>
                            <p className="font-calligraphy text-2xl">Inarrestabile</p>
                            <p className="text-sm leading-relaxed">perché trascinatrice piena di energie con la mente sempre in fermento e mille idee da sviluppare.</p>
                        </div>
                        <div className="w-1/4 h-auto flex flex-col gap-4">
                            <a href="https://storyset.com/people">
                                <img 
                                    src={powerful}
                                    className="clickable-image"
                                    alt="Powerful"
                                />
                            </a>
                            <p className="font-calligraphy text-2xl">Forte</p>
                            <p className="text-sm leading-relaxed">quando c’è un obiettivo da raggiungere non c’è ostacolo che possa farmi desistere.</p>
                        </div>
                        <div className="w-1/4 flex flex-col gap-4">
                            <a href="https://storyset.com/idea">
                                <img 
                                    src={creative}
                                    className="clickable-image"
                                    alt="Creative"
                                />
                            </a> 
                            <p className="font-calligraphy text-2xl">Appassionata</p>
                            <p className="text-sm leading-relaxed">amo ciò che faccio e ci metto tutta me stessa.</p>
                        </div>
                        <div className="w-1/4 flex flex-col gap-4">
                            <a href="https://storyset.com/worker">
                                <img 
                                    src={visionBoard}
                                    className="clickable-image"
                                    alt="Vision board"
                                />
                            </a> 
                            <p className="font-calligraphy text-2xl"><span className="tracking-[0.5em]">At</span>tenta</p>
                            <p className="text-sm leading-relaxed">ogni evento è importante, unico ed irripetibile ed un’organizzazione impeccabile è l’elemento chiave per un'ottima riuscita.</p>
                        </div>
                    </div>
                </div>
                    
            </div>
          </div>
        </section>        
    </>
  );
}

export default SeDovessiDescrivermi;