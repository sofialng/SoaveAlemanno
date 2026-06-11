import Hero from "../components/Hero";

import TxtImg from "../components/TxtImg";
import ImgTxt from "../components/ImgTxt";

import QuoteBlock from "../components/QuoteBlock";

import BoxToForm from "../components/BoxToForm";

import img from "../img/img";
import { items, services } from "../assets/content/content";

// Ci piacciono? 
import Emozioni from "../components/Emozioni";
import OgniEvento from "../components/OgniEvento";
import EditorialBlock from "../components/EditorialBlock";
import WeddingJourney from "../components/Journey";
import SideRevealStory from "../components/Mosaic";
import ServiceExplorer from "../components/ServiceExplorer";
import VerticalRhythm from "../components/VerticalRhythm";
import PinnedStory from "../components/PinnedStory";
import ProcessFlow from "../components/ProcessFlow";
import SalentoSection from "../components/Map";
import WeddingTypes from "../components/Carousel";

function Home() {
  return (
    <>
      <main>
        <Hero />
       
        <section id="DoveISogni">
          <TxtImg 
            picture={img.board} 
            title={<>Dove i <span className="font-calligraphy">sogni</span> prendono forma</>}
            subtitle="Siamo un team di professioniste specializzate in matrimoni ed eventi, pronte a dare forma ai tuoi sogni."
            >
              <p>Con creatività, esperienza e una cura impeccabile per ogni dettaglio, trasformiamo le tue idee in un matrimonio o un evento unico, pensato su misura per te.<br />
                  Crediamo che ogni storia d'amore meriti di essere raccontata con autenticità, eleganza e armonia, attraverso un progetto che parli davvero di voi.<br />
                  Ogni evento che realizziamo nasce dall'<span className="font-serif-italic">ascolto</span>, cresce attraverso la <span className="font-serif-italic">condivisione</span> e prende vita grazie a una visione chiara e personalizzata.</p>
          </TxtImg>
        </section>

        <ImgTxt
          image={img.board}
          title="Il tuo giorno perfetto"
          subtitle="wedding experience"
        >
          Ogni matrimonio è un racconto unico costruito su emozioni, dettagli e momenti irripetibili.
        </ImgTxt>

        <EditorialBlock
          image={img.board}
          title="Momenti che restano"
          subtitle="wedding stories"
        >
          Ogni evento è costruito come un racconto visivo, dove luce, emozione e dettagli diventano parte della memoria.
        </EditorialBlock>

        <WeddingJourney
          items={items}
        />

        <SideRevealStory
          image={img.board}
          title="Un giorno irripetibile"
          subtitle="wedding experience"
                >
          Creiamo eventi che non sono solo estetica, ma emozione costruita con luce, spazio e armonia.
        </SideRevealStory>

        <Emozioni
          title={<>Emozioni che restano, istanti che diventano <span className="font-calligraphy">ricordi</span><br/></>}>
            <p>Ogni allestimento, ogni scelta stilistica, ogni dettaglio è pensato per creare un'atmosfera che emozioni, coinvolga e lasci il segno.<br />
            Le immagini raccontano ciò che le parole non possono spiegare: sorrisi autentici, sguardi complici, scenari senza tempo e momenti che restano impressi nel cuore.</p>
        </Emozioni>

        <QuoteBlock
          quote="Quando non riesco a dirtelo, cerco chi lo dice per me. E lo trovo in un bouquet di fiori."
          author="Fabrizio Caramagna"
          subtitle="Mbo chi è questo?"
        />

        <QuoteBlock
          quote="La verità della storia è nei dettagli."
          author="Paul Auster"
          subtitle="Mbo chi è questo?"
        />

        <SalentoSection />

        <WeddingTypes />

        <OgniEvento quote={<>Ogni evento deve essere un vero e proprio <span className="font-bold">percorso esperienziale</span> in grado di <span className="font-bold">raccontare</span> ed <span className="font-bold">esprimere</span> sé stessi, un <span className="font-bold">viaggio</span> unico ed inimitabile che sappia valorizzare pienamente ciò che si vuole <span className="font-bold">trasmettere</span>.</>}/>

        <ServiceExplorer data={services} />

        <VerticalRhythm
          items={[
            {
              type: "text",
              tag: "philosophy",
              title: "Ogni evento è unico",
              text: "Costruiamo esperienze che riflettono la personalità degli sposi."
            },
            {
              type: "divider"
            },
            {
              type: "image",
              image: "/img/wedding1.jpg"
            },
            {
              type: "text",
              tag: "design",
              title: "Eleganza senza tempo",
              text: "Niente eccessi, solo equilibrio e armonia visiva."
            },
            {
              type: "image",
              image: "/img/wedding2.jpg"
            }
          ]}
        />

        <PinnedStory
          steps={[
            {
              tag: "concept",
              title: "La tua storia",
              text: "Ogni matrimonio nasce da un’identità unica e irripetibile.",
              image: img.daniela
            },
            {
              tag: "design",
              title: "Costruiamo l’atmosfera",
              text: "Luce, colori e materiali definiscono il mood dell’evento.",
              image: img.board
            },
            {
              tag: "execution",
              title: "Realizzazione perfetta",
              text: "Ogni dettaglio viene orchestrato con precisione assoluta.",
              image: img.daniela
            }
          ]}
        />

        <ProcessFlow
          steps={[
            { title: "Ascolto", text: "Capire la tua storia e i tuoi desideri." },
            { title: "Progetto", text: "Creiamo il concept del tuo evento." },
            { title: "Design", text: "Definiamo estetica e atmosfera." },
            { title: "Realizzazione", text: "Gestiamo tutto il giorno dell’evento." }
          ]}
        />

        <BoxToForm />

      </main>
    </>
  );
}

export default Home;
