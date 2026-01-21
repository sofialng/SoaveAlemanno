import sfondoHome from "../img/sfondo-home.jpg";

function HomeScreen() {
  return (
    <>
        <section className="relative h-screen">
            {/* Background image */}
            <img
            src={sfondoHome}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay opzionale */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Contenuto */}
            <div className="relative z-10 flex items-center h-full px-6">
            <h1 className="text-white text-5xl font-bold">
                Il tuo giorno perfetto
            </h1>
            </div>
        </section>
        
    </>
  );
}

export default HomeScreen;