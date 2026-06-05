import sfondoHome from "../img/sfondo-home2.jpg";
import logo from "../img/logo.png";

function HomeScreen() {
  return (
    <>
        <section className="relative h-screen">
          {/* Background image */}
          <img
            src={sfondoHome}
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />

          {/* Overlay opzionale */}
          <div className="absolute inset-0 bg-white/20" />

          {/* Contenuto */}
          <div className="relative w-full h-3/4">
            {/* Logo */}
            <div className="absolute left-1/8 top-1/2 -translate-y-1/2 w-3/4 max-w-xl px-8 flex flex-col items-center gap-4">  
              <img 
                src={logo}
                className="w-full max-w-md h-auto"
                alt="Soave Alemanno Wedding & Event Planner"
              />  
              <p className="text-xl font-serif text-center">
                Il vostro amore merita un giorno <span className="font-serif-italic">indimenticabile</span>.
              </p>

              {/* Bottone */}
              <button 
                className="button-highlight"
                onClick={() => {
                  const element = document.getElementById("DoveISogni");
                  const navbar = document.getElementById("navbar");

                  if (!element) return;

                  const navbarHeight = navbar?.offsetHeight || 0;

                  const top =
                    element.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight + 1;

                  window.scrollTo({
                    top,
                    behavior: "smooth",
                  });
                }}
                >
                Esplora
              </button>
            </div>
            <div className="flex-1"> </div>
          </div>
        </section>        
    </>
  );
}

export default HomeScreen;