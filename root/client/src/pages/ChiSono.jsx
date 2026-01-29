import { useRef } from "react";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import ChiSono from "../components/ChiSono"
import SeDovessiDescrivermi from "../components/SeDovessiDescrivermi"
import Collaboratrice from "../components/Collaboratrice";

import soave from "../img/soave.jpg";

function About() {  
  const homeRef = useRef(null);
  return (
    <>
      <Navigator homeRef={homeRef} />
      <main>

        {/* Inserire qui i servizi con elenco di chi siamo, DOVE operiamo e cosa facciamo, quali sono i pacchetti disponibili */}

        <ChiSono
          picture={soave} 
          title="Chi sono"
          subtitle="Ciao, sono Soave"
          content={<>Ho sempre creduto che tutte le esperienze che viviamo nell'arco della nostra vita ci portino verso una strada che era destinata a noi.<br />
                  È così che il mio vissuto, intenso e appassionato mi ha condotta in questo meraviglioso mondo che è poi diventato il mio lavoro.</>}
                  />

        <SeDovessiDescrivermi />

        <Collaboratrice 
          picture={soave} 
          title="La mia collaboratrice"
          subtitle="Ciao, sono Mariella"
          content="Ho sempre creduto che tutte le esperienze che viviamo nell'arco della nostra vita ci portino verso una strada che era destinata a noi.
                  È così che il mio vissuto, intenso e appassionato mi ha condotta in questo meraviglioso mondo che è poi diventato il mio lavoro."
          />        

      </main>

      <Footer />
    </>
  );
}

export default About;
