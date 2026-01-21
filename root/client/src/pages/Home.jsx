/*
import SectionHero from "../components/SectionHero";
import SectionServices from "../components/SectionServices";
import SectionContact from "../components/SectionContact";
*/
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen"
import sfondoHome from "../img/sfondo-home.jpg";


function Home() {  
  return (
    <>
      
      
      
      
      <Navigator />
      <section className="relative h-screen">
        <img
          src={sfondoHome}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
      </section>

      <main>
        <h1 className="font-quetine text-3xl font-bold underline">Content</h1>
      </main>

      <Footer />
    </>
  );
}

export default Home;
