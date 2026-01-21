/*
import SectionHero from "../components/SectionHero";
import SectionServices from "../components/SectionServices";
import SectionContact from "../components/SectionContact";
*/
import { useRef } from "react";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen"
import sfondoHome from "../img/sfondo-home.jpg";


function Home() {  
  const homeRef = useRef(null);
  return (
    <>
      <Navigator homeRef={homeRef} />
      <section ref={homeRef} className="relative h-screen">
        <img
          src={sfondoHome}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
      </section>

      <main>
        <h1 className="font-quetine h-500 text-3xl font-bold underline bg-primary-light">Content</h1>
      </main>

      <Footer />
    </>
  );
}

export default Home;
