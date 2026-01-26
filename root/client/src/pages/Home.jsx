import { useRef } from "react";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen"
import ImgandText from "../components/Img+Text"
import SeDovessiDescrivermi from "../components/SeDovessiDescrivermi"

import soave from "../img/soave.jpg";

function Home() {  
  const homeRef = useRef(null);
  return (
    <>
      <Navigator homeRef={homeRef} />
      <main>
        <HomeScreen homeRef={homeRef} />
        <ImgandText 
          picture={soave} 
          title="Chi sono"
          subtitle="Ciao, sono Soave"
          content="Ho sempre creduto che tutte le esperienze che viviamo nell'arco della nostra vita ci portino verso una strada che era destinata a noi.
                  È così che il mio vissuto, intenso e appassionato mi ha condotta in questo meraviglioso mondo che è poi diventato il mio lavoro."
                  />
        <SeDovessiDescrivermi />
        <ImgandText 
          picture={soave} 
          title="La mia collaboratrice"
          subtitle="Ciao, sono Mariella"
          content="Ho sempre creduto che tutte le esperienze che viviamo nell'arco della nostra vita ci portino verso una strada che era destinata a noi.
                  È così che il mio vissuto, intenso e appassionato mi ha condotta in questo meraviglioso mondo che è poi diventato il mio lavoro." 
          templateN={2}
          />
       
      </main>

      <Footer />
    </>
  );
}

export default Home;
