import Hero from "../components/Hero";

import TxtImg from "../components/TxtImg";
import ImgTxt from "../components/ImgTxt";

import QuoteBlock from "../components/QuoteBlock";

import BoxToForm from "../components/BoxToForm";

import board from "../img/board.jpg"
import daniela from "../img/daniela.jpg"

// Ci piacciono? 
import Emozioni from "../components/Emozioni";
import Arches from "../components/Arches";
import OgniEvento from "../components/OgniEvento";
import EditorialBlock from "../components/EditorialBlock";
import WeddingJourney from "../components/Journey";
import SideRevealStory from "../components/Mosaic";
import ServiceExplorer from "../components/ServiceExplorer";
import VerticalRhythm from "../components/VerticalRhythm";
import PinnedStory from "../components/PinnedStory";
import ProcessFlow from "../components/ProcessFlow";

const services = [
  {
    title: "Matrimonio completo",
    subtitle: "full planning",
    image: "/img/wedding1.jpg",
    description: "Gestiamo ogni fase del tuo matrimonio, dall’idea iniziale fino al giorno dell’evento.",
    services: ["Location", "Design", "Coordination", "Vendors"]
  },
  {
    title: "Consulenza",
    subtitle: "wedding consulting",
    image: "/img/wedding2.jpg",
    description: "Ti aiutiamo a costruire il tuo evento passo dopo passo.",
    services: ["Budget", "Style", "Timeline"]
  },
  {
    title: "Destination wedding",
    subtitle: "italy & abroad",
    image: "/img/wedding3.jpg",
    description: "Organizziamo matrimoni in location esclusive in Italia e all’estero.",
    services: ["Travel", "Logistics", "Design"]
  }
];

function Home() {
  return (
    <>
      <main>
        <Hero />
       
        <section id="DoveISogni">
          <TxtImg 
            picture={board} 
            title={<>Dove i <span className="font-calligraphy">sogni</span> prendono forma</>}
            subtitle="Siamo un team di professioniste specializzate in matrimoni ed eventi, pronte a dare forma ai tuoi sogni."
            >
              <p>Con creatività, esperienza e una cura impeccabile per ogni dettaglio, trasformiamo le tue idee in un matrimonio o un evento unico, pensato su misura per te.<br />
                  Crediamo che ogni storia d'amore meriti di essere raccontata con autenticità, eleganza e armonia, attraverso un progetto che parli davvero di voi.<br />
                  Ogni evento che realizziamo nasce dall'<span className="font-serif-italic">ascolto</span>, cresce attraverso la <span className="font-serif-italic">condivisione</span> e prende vita grazie a una visione chiara e personalizzata.</p>
          </TxtImg>
        </section>

        <ImgTxt
          image={board}
          title="Il tuo giorno perfetto"
          subtitle="wedding experience"
        >
          Ogni matrimonio è un racconto unico costruito su emozioni, dettagli e momenti irripetibili.
        </ImgTxt>

        <EditorialBlock
          image={board}
          title="Momenti che restano"
          subtitle="wedding stories"
        >
          Ogni evento è costruito come un racconto visivo, dove luce, emozione e dettagli diventano parte della memoria.
        </EditorialBlock>

        <WeddingJourney
          items={[
            {
              step: "01",
              title: "Conosciamoci",
              text: "Iniziamo ascoltando la tua storia, i tuoi desideri e la tua visione.",
            },
            {
              step: "02",
              title: "Progettazione",
              text: "Costruiamo insieme un concept estetico e organizzativo su misura.",
              image: daniela,
            },
            {
              step: "03",
              title: "Realizzazione",
              text: "Ogni dettaglio prende vita con cura, precisione e armonia.",
              image: daniela,
            },
            {
              step: "04",
              title: "Il tuo giorno",
              text: "Viviamo insieme il momento, trasformando emozione in ricordo.",
            },
          ]}
        />

        <SideRevealStory
          image={board}
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
              image: daniela
            },
            {
              tag: "design",
              title: "Costruiamo l’atmosfera",
              text: "Luce, colori e materiali definiscono il mood dell’evento.",
              image: board
            },
            {
              tag: "execution",
              title: "Realizzazione perfetta",
              text: "Ogni dettaglio viene orchestrato con precisione assoluta.",
              image: daniela
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
