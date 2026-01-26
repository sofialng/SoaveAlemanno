import whiteWaves from "../img/white-waves.svg";

function ImgandText({ picture, title, subtitle, content, templateN}) {
  return (
    <>
        <section className="relative h-screen">
          {/* Container virtuale */}
          <div className={`relative flex items-center h-full justify-center 
              ${templateN == 2 ? "bg-secondary-light" : "bg-secondary-light"}`}>
            <div className={`relative flex flex-row justify-center h-4/5 
                ${templateN == 2 ? "w-full p-16" : "w-3/4 p-8"}`}>
                    {/* Logo */}
                    <div className={`w-1/2 h-full flex justify-center
                      ${templateN == 2 ? "w-1/3" : "w-1/2"}`}>  
                        <img 
                            src={picture}
                            className="w-auto h-full object-cover rounded-2xl"
                            alt="Foto"
                        />  
                    </div>
                    <div className={`h-full flex flex-col gap-8 justify-center
                      ${templateN == 2 ? "w-2/3" : "w-1/2"}`}>
                        <h1 className="font-serif text-4xl tracking-widest">{title}</h1>
                        <p className="font-calligraphy text-4xl">{subtitle}</p>
                        <p className="font-sans text-sm leading-relaxed">
                            {content}
                        </p>
                </div>
            </div>
          </div>
        </section>        
    </>
  );
}

export default ImgandText;