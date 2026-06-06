import ChiSono from "../components/ChiSono"
import SeDovessiDescrivermi from "../components/SeDovessiDescrivermi"
import Collaboratrice from "../components/Collaboratrice";
import DoveISogni from "../components/DoveISogni";

import soave from "../img/soave.jpg";
import certificazione from "../img/certificazione.jpeg";
import daniela from "../img/daniela.jpg";
import PageIntro from "../components/PageIntro";

function About() {  
  return (
    <>
      <main>
        {/* Inserire qui i servizi con elenco di chi siamo, DOVE operiamo e cosa facciamo, quali sono i pacchetti disponibili */}

        <div className="w-full px-6 pt-30 pb-2 md:px-12 bg-secondary-light">
          <PageIntro
            header="Chi sono"
            title="Ciao, sono Soave"
            text="Una selezione di momenti, dettagli e atmosfere che raccontano
              il nostro modo di progettare matrimoni ed eventi."
            />
        </div>

        <ChiSono
          picture={soave} 
          title="Chi sono"
          subtitle="Ciao, sono Soave"
          content={<>Ho sempre creduto che tutte le esperienze che viviamo nell'arco della nostra vita ci portino verso una strada che era destinata a noi.<br />
                  È così che il mio vissuto, intenso e appassionato mi ha condotta in questo meraviglioso mondo che è poi diventato il mio lavoro.</>}
          />

        <SeDovessiDescrivermi />

        <Collaboratrice 
          picture={soave} s
          title="La mia collaboratrice"
          subtitle="Ciao, sono Mariella"
          content="Ho sempre creduto che tutte le esperienze che viviamo nell'arco della nostra vita ci portino verso una strada che era destinata a noi.
                  È così che il mio vissuto, intenso e appassionato mi ha condotta in questo meraviglioso mondo che è poi diventato il mio lavoro."
          />    

          <DoveISogni 
          picture={daniela} 
          title={<>Il ruolo della <span className="font-calligraphy">wedding planner</span></>}
          subtitle="Molto più della sola organizzazione."
          >
            <p>
              Ci occupiamo di:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>progettare l’intero evento partendo dalla vostra storia </li>
              <li>definire concept, stile e mood </li>
              <li>pianificare tempi, budget e priorità </li>
              <li>coordinare fornitori e logistica </li>
              <li>gestire imprevisti e dettagli </li>
              <li>accompagnarvi fino al giorno del matrimonio, senza stress </li>
            </ul>
            <p>
              Il nostro obiettivo è uno solo: <span className="font-serif-italic">farvi godere ogni momento</span>, sapendo che tutto è sotto controllo.
            </p>
          </DoveISogni>

          <ChiSono
          picture={certificazione} 
          title="Enzo Miccio Academy certified"
          subtitle="La mia formazione"
          content={
            <>
              Penso che la formazione e i corsi di aggiornamento siano importantissimi per rafforzare le competenze e implementare nuovi strumenti di lavoro.
              Bisogna cogliere ogni opportunità per ampliare le proprie conoscenze, favorendo lo sviluppo professionale e personale che si riflette poi sulla soddisfazione dei clienti.
            </>}
          />

      </main>
    </>
  );
}

export default About;
