import { useRef } from "react";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen"
import DoveISogni from "../components/DoveISogni";
import Quote from "../components/Quote";
import Emozioni from "../components/Emozioni";
import Arches from "../components/Arches";
import OgniEvento from "../components/OgniEvento";
import Box from "../components/Box";

import board from "../img/board.jpg"

function Home() {
  return (
    <>
      <Navigator />
      <main>
        <HomeScreen />
       
        <section id="DoveISogni">
          <DoveISogni 
            picture={board} 
            title={<>Dove i <span className="font-calligraphy">sogni</span><br/>prendono forma</>}
            subtitle="Siamo un team di professioniste specializzate in matrimoni ed eventi, pronte a dare forma ai tuoi sogni."
            >
              <p>Con creatività, esperienza e una cura impeccabile per ogni dettaglio, trasformiamo le tue idee in un matrimonio o un evento unico, pensato su misura per te.<br />
                  Crediamo che ogni storia d'amore meriti di essere raccontata con autenticità, eleganza e armonia, attraverso un progetto che parli davvero di voi.<br />
                  Ogni evento che realizziamo nasce dall'<span className="font-serif-italic">ascolto</span>, cresce attraverso la <span className="font-serif-italic">condivisione</span> e prende vita grazie a una visione chiara e personalizzata.</p>
            </DoveISogni>
        </section>

        <Emozioni
          title={<>Emozioni che restano, istanti che diventano <span className="font-calligraphy">ricordi</span><br/></>}>
            <p>Ogni allestimento, ogni scelta stilistica, ogni dettaglio è pensato per creare un'atmosfera che emozioni, coinvolga e lasci il segno.<br />
            Le immagini raccontano ciò che le parole non possono spiegare: sorrisi autentici, sguardi complici, scenari senza tempo e momenti che restano impressi nel cuore.</p>
        </Emozioni>

        <Quote 
          quote={<>Quando non riesco a dirtelo, cerco chi lo dice per me.<br />E lo trovo in un bouquet di fiori.</>}
          attribution="Fabrizio Caramagna"
          />

        <OgniEvento quote={<>Ogni evento deve essere un vero e proprio <span className="font-bold">percorso esperienziale</span> in grado di <span className="font-bold">raccontare</span> ed <span className="font-bold">esprimere</span> sé stessi, un <span className="font-bold">viaggio</span> unico ed inimitabile che sappia valorizzare pienamente ciò che si vuole <span className="font-bold">trasmettere</span>.</>}/>

        {/*<Arches quote="Non esistono due matrimoni uguali, perché non esistono due storie uguali."/>*/}

        <Quote 
          quote="La verità della storia è nei dettagli."
          attribution="Paul Auster"
          />

        <Box />

      </main>

      <Footer />
    </>
  );
}

export default Home;
