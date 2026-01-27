import { useRef } from "react";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen"
import ChiSono from "../components/ChiSono"
import SeDovessiDescrivermi from "../components/SeDovessiDescrivermi"
import Collaboratrice from "../components/Collaboratrice";
import DoveISogni from "../components/DoveISogni";
import Quote from "../components/Quote";

import soave from "../img/soave.jpg";
import board from "../img/board.jpg"

function Home() {  
  const homeRef = useRef(null);
  return (
    <>
      <Navigator homeRef={homeRef} />
      <main>
        <HomeScreen homeRef={homeRef} />

        {/* Inserire qui i servizi con elenco di chi siamo, DOVE operiamo e cosa facciamo, quali sono i pacchetti disponibili */}

        <ChiSono
          picture={soave} 
          title="Chi sono"
          subtitle="Ciao, sono Soave"
          content="Ho sempre creduto che tutte le esperienze che viviamo nell'arco della nostra vita ci portino verso una strada che era destinata a noi.
                  È così che il mio vissuto, intenso e appassionato mi ha condotta in questo meraviglioso mondo che è poi diventato il mio lavoro."
                  />

        <SeDovessiDescrivermi />

        <Collaboratrice 
          picture={soave} 
          title="La mia collaboratrice"
          subtitle="Ciao, sono Mariella"
          content="Ho sempre creduto che tutte le esperienze che viviamo nell'arco della nostra vita ci portino verso una strada che era destinata a noi.
                  È così che il mio vissuto, intenso e appassionato mi ha condotta in questo meraviglioso mondo che è poi diventato il mio lavoro."
          />
       
        <DoveISogni 
          picture={board} 
          title={<>Dove i   <span className="font-calligraphy">sogni</span> prendono forma</>}
          >
            <p>Siamo un team di professioniste specializzate in matrimoni ed eventi, pronte a dare forma ai tuoi sogni.</p>
            <p>Con creatività, esperienza e una cura impeccabile per ogni dettaglio, trasformiamo le tue idee in un matrimonio o un evento unico, pensato su misura per te.</p>
          </DoveISogni>

        <Quote 
          quote={<>Quando non riesco a dirtelo, cerco chi lo dice per me.<br />E lo trovo in un bouquet di fiori.</>}
          attribution="Fabrizio Caramagna"
          />


        <Quote 
          quote="La verità della storia è nei dettagli."
          attribution="Paul Auster"
          />

      </main>

      <Footer />
    </>
  );
}

export default Home;
