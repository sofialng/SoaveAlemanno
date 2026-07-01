import img from "../../img/img";

/* ******************
 *     FOOTER       * 
 *******************/

export const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.6v7A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6-1.75a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 18 5.75z",
  },
  {
    label: "WhatsApp",
    href: "#",
    path: "M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.26-1.38A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.54 0-2.97-.45-4.17-1.22l-.3-.18-3.12.82.83-3.04-.2-.31A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.39-5.98c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.18-1.41-1.32-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.01.4 1.36.51.57.18 1.09.15 1.5.09.46-.07 1.43-.58 1.63-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z",
  },
];

export const team = [
  {
    src: img.soave,
    alt: "Soave Alemanno",
    name: "Soave Alemanno",
    role: "Founder & Wedding Planner",
    email: "info@soavealemanno.it",
  },
  {
    src: img.soave,
    alt: "Mariella Longo",
    name: "Mariella Longo",
    role: "Event Coordinator",
    email: "mariella@soavealemanno.it",
  },
];

/* ****************
 *     HOME       * 
 *****************/

export const intro = {
  title: "Disegnatrice di sogni, regista del vostro giorno più bello",
  paragraph: "Come Wedding & Event Planner, prendo per mano i vostri \
            desideri per trasformarli in una scenografia sartoriale \
            impeccabile. Dalla scelta della location ideale al light \
            design più suggestivo, coordino ogni singolo dettaglio con \
            rigore, eleganza e quel tocco di straordinaria spettacolarità \
            che lascerà i vostri ospiti senza fiato. \
            Nessun imprevisto, nessuna ansia. Solo la certezza di un evento \
            perfetto, cucito addosso alla vostra storia."
};

export const dove_i_sogni = {
  picture: img.home.board,
  title: <>Dove i vostri <span className="font-calligraphy">sogni</span> prendono forma</>,
  paragraph: 
    <>
      <p>
        Dietro ogni matrimonio memorabile c’è una visione chiara,
        un ascolto profondo e una regia impeccabile. Insieme al mio 
        team di professioniste d'élite, guido le coppie più esigenti 
        nella creazione di eventi unici, trasformando l'immaginazione 
        in una scenografia reale, vibrante e senza tempo.
      </p>
      <p>
        Non mi limito a pianificare; do forma alla vostra storia. 
        Credo fermamente che ogni amore meriti di essere raccontato 
        con assoluta autenticità, eleganza e armonia, attraverso un 
        progetto sartoriale che parli davvero di voi.
      </p>
    </>
}

export const scenografie_d_amore = {
  picture: img.home.fiori,
  title: "Scenografie d'amore",
  subtitle: "La regia del vostro giorno perfetto",
  paragraph: "Non esistono due matrimoni uguali, perché non esistono due storie identiche. \
    Il vostro giorno perfetto nasce dal disegno dei vostri desideri, svelato attraverso dettagli \
    mai lasciati al caso e istanti irripetibili. Insieme al mio team, trasformo la complessità \
    dell'organizzazione nell'eleganza fluida di un ricordo indimenticabile."
}

export const wedding_stories = {
  picture: img.home.albero,
  title: <>Wedding <span className="font-calligraphy ml-4">stories</span></>,
  subtitle: "Frammenti di pura bellezza",
  paragraph: "Nella galleria non troverete semplici fotografie, \
            ma la testimonianza di come trasformiamo i desideri \
            in scenografie vibranti. Ogni dettaglio, ogni scorcio \
            di luce e ogni emozione autentica sono stati orchestrati \
            per rimanere impressi, per sempre, nel tempo e nel cuore.",
  button: "Esplora la galleria"
}

export const wedding_journey = {
  title: "Il viaggio verso il vostro giorno perfetto",
  subtitle: "Il nostro metodo, passo dopo passo",
  paragraph: "Pianificare un matrimonio d'alto livello richiede strategia, \
    sensibilità artistica e un'organizzazione millimetrica. Insieme al mio team, \
    ho tracciato un percorso chiaro in quattro fasi per sollevarvi da ogni ansia e \
    garantirvi un’esperienza fluida, piacevole e straordinariamente esclusiva.",
  items: [
    {
        step: "01 - L'ascolto",
        title: "La scintilla",
        text: 
          <>
            <span className="">Il punto di partenza siete voi: la vostra storia, la vostra personalità, i vostri desideri.</span> <br/>
            Il percorso inizia con un primo incontro privato. Il mio obiettivo in questa fase è comprendere ciò
            che sognate (anche quello che non riuscite ancora a esprimere a parole) per gettare le basi di un evento autentico.
          </>,
        image: img.home.mazzo,
    },
    {
        step: "02 - Il progetto",
        title: "Il disegno sartoriale",
        text: 
          <>
            <span className="">Dall’idea alla carta: plasmiamo un concept estetico e organizzativo su misura. </span> <br/>
            In questa fase strategica,  diamo forma al vostro matrimonio. Ogni budget viene ottimizzato e ogni tempistica pianificata, 
            presentandovi un progetto sartoriale dettagliato che approveremo insieme.
          </>,
        image: img.home.allestimento,
    },
    {
        step: "03 - La regia",
        title: "La cura dei dettagli",
        text: 
          <>
            <span className="">Il dietro le quinte dove l’immaginazione si trasforma in una splendida realtà.</span> <br/>
            Mentre voi vi godete l'attesa, noi entriamo in azione. Coordino personalmente ogni aspetto burocratico, 
            logistico e creativo. 
          </>,
        image: img.home.confetti,
    },
    {
        step: "04 - la magia",
        title: "Il vostro giardino",
        text:
           <>
            <span className="">Il sipario si apre: voi siete gli ospiti d’onore, noi i custodi del vostro sogno.</span> <br/>
            Il grande giorno è arrivato. Io e la mia squadra saremo sul posto per coordinare i fornitori, gestire la timeline 
            ed assicurarci che tutto scorra con impeccabile eleganza. 
          </>,
        image: img.home.cerimonia,
    },
  ]
}

export const wedding_experience = {
  picture: img.home.brindisi_enrico_valentina,
  title: "La firma del vostro giorno perfetto",
  subtitle: "Wedding experience",
  paragraph: 
    <>
      Non ci limitiamo ad allestire una location: diamo vita a un percorso emozionale unico. 
      Trasformiamo il vostro giorno più bello in un capolavoro di eleganza che rimarrà impresso per sempre.
    </>,
}

export const quote_caramagna = {
  quote: "Quando non riesco a dirtelo, cerco chi lo dice per me. E lo trovo in un bouquet di fiori.",
  author: "Fabrizio Caramagna",
  subtitle: "Mbo chi è questo?"
}

export const quote_auster = {
  quote: "La verità della storia è nei dettagli.",
  author: "Paul Auster",
  subtitle: "Mbo chi è questo?"
}

export const services = {
  title: "Cosa possiamo creare per voi",
  subtitle: "I nostri servizi",
  paragraph: "Ogni desiderio merita una progettazione dedicata. \
    Che si tratti del giorno del sì o di una ricorrenza privata, \
    mettiamo la nostra firma sartoriale, la nostra esperienza e la \
    nostra regia per dare vita a eventi unici e indimenticabili.",
  list: 
    [
      {
        title: "Matrimonio Completo",
        subtitle: "Dall'ideazione al grande giorno: la gestione totale del vostro sogno",
        image: "/img/wedding1.jpg",
        description: "Un servizio esclusivo chiavi in mano pensato per le coppie che \
          desiderano un percorso sereno e impeccabile. Insieme al mio team, mi occuperò \
          di ogni singolo aspetto: ricerca dei fornitori d'élite, budget management, design \
          floreale e illuminotecnico, fino alla regia completa del grande giorno. \
          Voi dovrete solo vivere la magia dell'attesa.",
        services: ["Location", "Design", "Coordination", "Vendors"]
      },
      {
        title: "Consulenza Wedding su Misura",
        subtitle: "Hai già in mente come organizzare il tuo matrimonio, ma ti manca quella sicurezza in più per fare le scelte giuste?",
        image: "/img/wedding2.jpg",
        description: 
          <>
            <p>
              Il servizio di Sola Consulenza è pensato proprio per questo: un incontro
              strategico (di persona o online) interamente dedicato a voi, senza
              l'impegno di un servizio di pianificazione completo.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span>✦</span>
                <span>
                  <strong>Analisi del Budget:</strong> ottimizziamo le vostre spese per
                  capire dove investire e dove risparmiare, evitando sorprese
                  dell'ultimo minuto.
                </span>
              </li>

              <li className="flex gap-3">
                <span>✦</span>
                <span>
                  <strong>Timeline e Logistica:</strong> creiamo o revisioniamo la
                  scaletta del grande giorno per assicurarci che tutto scorra senza
                  intoppi.
                </span>
              </li>

              <li className="flex gap-3">
                <span>✦</span>
                <span>
                  <strong>Idee e Stile:</strong> definiamo il filo conduttore
                  dell'evento per renderlo unico e coerente con la vostra personalità.
                </span>
              </li>
            </ul>
          </>,
        services: ["Budget", "Style", "Timeline"]
      },
      {
        title: "Destination Wedding in Salento",
        subtitle: "Il vostro Sì nella terra del sole, del mare e delle corti storiche",
        image: "/img/wedding3.jpg",
        description: "Specializzate nel trasformare il fascino autentico della Puglia in \
          un palcoscenico luxury per coppie straniere o fuori regione. Guidiamo voi e i vostri \
          ospiti alla scoperta del Salento, coordinando non solo il giorno del matrimonio in \
          masserie o corti secolari, ma progettando un'intera esperienza di viaggio: dai welcome \
          party ai brunch d'addio.",
        services: ["Travel", "Logistics", "Design"]
      }
    ]
}

export const salento = {
  image: img.home.mappasalento,
  title:
    <>
      Salento: dove il mare incontra
      <br />
      <span className="font-calligraphy">l'amore</span>
    </>,
  subtitle: "Il nostro territorio",
  paragraph:
    <>
      <p
        className="paragraph"
      >
        Il Salento è una terra di luce, di pietra leccese e di orizzonti infiniti.
        Tra masserie storiche, ville sul mare e giardini mediterranei, ogni venue
        racconta una storia unica: la vostra.
      </p>
      <p
        className="paragraph"
      >
        Organizziamo matrimoni ed eventi in tutta la penisola salentina: da Lecce
        a Otranto, da Gallipoli alle campagne di Nardò, portando eleganza e cura
        in ogni angolo di questa terra straordinaria.
      </p>
    </>
}

export const wedding_types = [
  {
    numero: "01",
    titolo: "Matrimonio al Mare",
    sottotitolo: "Il profumo del Mediterraneo, i piedi nella sabbia e l'infinito come testimone.",
    descrizione:
      "Sposarsi dove il cielo incontra il mare del Salento. Immagina il rumore della risacca come colonna sonora, i colori caldi del tramonto che dipingono l'orizzonte e una festa a piedi nudi sulla spiaggia, avvolti dalla brezza e da un senso di assoluta libertà. Un \"Sì\" leggero, fresco e indimenticabile.",
    dettagli: ["Vista mare garantita", "Cerimonia in spiaggia", "Aperitivo al tramonto"],
    img: img.cerimonia,
  },
  {
    numero: "02",
    titolo: "Matrimonio in Masseria",
    sottotitolo: "Tra ulivi secolari e mura bianche, dove il tempo si ferma e si accende la magia.",
    descrizione:
      "Il fascino autentico della pietra antica, cortili segreti illuminati da una cascata di lucine e l'abbraccio di uliveti senza tempo. La masseria è l'essenza più vera del Salento: un’eleganza rustica e sofisticata al tempo stesso, che profuma di terra, di tradizione e di una grande festa in famiglia sotto le stelle.",
    dettagli: ["Fino a 200 ospiti", "Catering interno", "Alloggi in loco"],
    img: img.cerimonia,
  },
  {
    numero: "03",
    titolo: "Matrimonio nel Borgo Antico",
    sottotitolo: "Il calore della pietra leccese, la poesia dei vicoli e il battito autentico del Salento.",
    descrizione:
      "Sposarsi nel cuore di un borgo salentino significa immergersi in una favola di pietra dorata che si scalda al sole. Camminare tra le stradine storiche, mentre l'eco di una pizzica sembra risuonare in lontananza e i residenti vi accolgono con un sorriso, trasformerà il vostro matrimonio in un pezzo di storia di questa terra meravigliosa. Un \"Sì\" avvolgente, generoso e pieno di quella magia del Sud che ti resta dentro per sempre.",
    dettagli: ["Palazzo nobiliare", "Chiostro privato", "Illuminazione notturna"],
    img: img.cerimonia,
  },
];

/* ********************
 *     CHI SONO       * 
 **********************/

export const intro_chisono = {
  title: 
    <>
      Benvenuti nel mondo di
      <br />
      <span className="font-calligraphy md:leading-30">Soave Alemanno Wedding</span>
    </>,
  subtitle: "Chi sono",
  paragraph: "Dietro ogni grande amore c’è una storia unica, e dietro ogni matrimonio indimenticabile c’è una regia invisibile ma solida."
};

export const chi_sono = {
  picture: img.chisono.soave,
  title: 
  <>
    <span className="font-calligraphy">Ciao, sono Soave</span>
  </>,
  subtitle: "Chi sono",
  paragraph: "Sono Soave Alemanno e aiuto le coppie a trasformare il giorno del \
    loro \"Sì\" in un’esperienza autentica, fluida e priva di stress. \
    Non credo nei matrimoni fotocopia. Credo nell’ascolto, nell’eleganza \
    sartoriale e nella cura di quei piccoli dettagli che parlano davvero di voi. \
    Che abbiate bisogno di una guida passo dopo passo per l'intera organizzazione, \
    o semplicemente di una bussola professionale per non perdere la rotta, il mio \
    obiettivo è uno solo: farvi vivere i preparativi con il sorriso e farvi godere ogni \
    singolo istante della vostra festa."
}

export const se_dovessi_descrivermi = {
  title: "Se dovessi descrivermi...",
  subtitle: "... potrei dire di me che sono:",
  cards: [
    {
      src: img.finishline,
      alt: "Finish line",
      titolo: "Inarrestabile",
      testo:
        "Trascinatrice piena di energie con la mente sempre in fermento e mille idee da sviluppare.",
    },
    {
      src: img.powerful,
      alt: "Powerful",
      titolo: "Forte",
      testo:
        "Quando c'è un obiettivo da raggiungere non c'è ostacolo che possa farmi desistere.",
    },
    {
      src: img.creative,
      alt: "Creative",
      titolo: "Appassionata",
      testo: "Amo ciò che faccio e ci metto tutta me stessa.",
    },
    {
      src: img.visionboard,
      alt: "Vision board",
      titolo: "Attenta",
      testo:
        "Ogni evento è unico e irripetibile: un’organizzazione impeccabile è la chiave per una riuscita perfetta.",
    },
  ]
};

export const mariella = {
  picture: img.chisono.soave,
  title: 
  <>
    <span className="font-calligraphy">Ciao, sono Mariella</span>
  </>,
  subtitle: "La mia collaboratrice",
  paragraph: "Sono Soave Alemanno e aiuto le coppie a trasformare il giorno del \
    loro \"Sì\" in un’esperienza autentica, fluida e priva di stress. \
    Non credo nei matrimoni fotocopia. Credo nell’ascolto, nell’eleganza \
    sartoriale e nella cura di quei piccoli dettagli che parlano davvero di voi. \
    Che abbiate bisogno di una guida passo dopo passo per l'intera organizzazione, \
    o semplicemente di una bussola professionale per non perdere la rotta, il mio \
    obiettivo è uno solo: farvi vivere i preparativi con il sorriso e farvi godere ogni \
    singolo istante della vostra festa."
}

export const perche_noi = {
  title: "Perché siamo esattamente le persone che stavate cercando?",
  subtitle: "Perchè scegliere una wedding planner",
  paragraph: "Non organizziamo semplicemente matrimoni. Creiamo un percorso sereno \
    che vi permetta di vivere ogni fase con entusiasmo, senza rinunciare alle emozioni.",
  cards: [
      {
        number: "01",
        title: "Pianificazione Senza Stress",
        text: "Voi immaginate il vostro giorno perfetto. Io mi occupo della logistica, delle tempistiche e del coordinamento dei fornitori, così potrete vivere ogni preparativo con serenità.",
      },
      {
        number: "02",
        title: "Consulenza Su Misura",
        text: "Nessun pacchetto preconfezionato. Ogni coppia è diversa e ogni percorso viene costruito intorno ai vostri desideri, alle vostre priorità e al vostro budget.",
      },
      {
        number: "03",
        title: "Presenza Discreta e Risolutiva",
        text: "Il giorno del matrimonio voi penserete solo ad emozionarvi. Io sarò dietro le quinte affinché tutto scorra in modo naturale.",
      },
    ],
    quote_block: {
      quote: "Il matrimonio perfetto non è quello da copertina, \
              ma quello in cui vi riconoscete in ogni istante.",
      author: "Bo",
      subtitle: "Bo"
    },
    title_2: "Iniziamo a progettare insieme",
    paragraph_2: "Non lasciate che l'ansia dei preparativi tolga la magia \
      a questo momento. Raccontatemi la vostra idea e\
      scopriamo insieme come trasformarla in una giornata\
      autenticamente vostra."
}

export const certificazione = {
  picture: img.chisono.certificazione,
  title: 
  <>
    <span className="font-calligraphy">Enzo Miccio </span>
    Academy certified
  </>,
  subtitle: "La mia formazione",
  paragraph: "Penso che la formazione e i corsi di aggiornamento siano importantissimi per rafforzare \
    le competenze e implementare nuovi strumenti di lavoro. Bisogna cogliere ogni opportunità per \
    ampliare le proprie conoscenze, favorendo lo sviluppo professionale e personale che si riflette \
    poi sulla soddisfazione dei clienti."
}

/* ********************
 *     GALLERIA       * 
 *********************/

export const galleries = [
  {
    title: "Matrimoni",
    subtitle: "Atmosfere romantiche e dettagli senza tempo",
    images: [
      { src: img.daniela, alt: "Daniela", caption: "La sposa" },
      { src: img.vaso, alt: "Vaso", caption: "Centrotavola" },
      { src: img.daniela, alt: "Daniela", caption: "Ritratto" },
    ],
  },
  {
    title: "Allestimenti",
    subtitle: "Fiori, luci e scenografie personalizzate",
    images: [
      { src: img.vaso, alt: "Vaso", caption: "Composizione floreale" },
      { src: img.daniela, alt: "Daniela", caption: "Dettaglio" },
      { src: img.vaso, alt: "Vaso", caption: "Tavola degli sposi" },
    ],
  },
  {
    title: "Momenti",
    subtitle: "Emozioni autentiche da ricordare",
    images: [
      { src: img.daniela, alt: "Daniela", caption: "Primo ballo" },
      { src: img.vaso, alt: "Vaso", caption: "Bouquet" },
      { src: img.daniela, alt: "Daniela", caption: "L'abbraccio" },
    ],
  },
];

/* **********************************
 *     PRENOTA UNA CONSULENZA       * 
 ************************************/

export const intro_prenota= {
  title: "Raccontami il vostro giorno",
  subtitle: "Iniziamo insieme",
  paragraph: "Il vostro viaggio inizia da qui. E il primo passo è offerto da me. \
    Avete domande, sogni da realizzare o semplicemente non sapete da dove iniziare? \
    Compilate il form qui sotto: faremo una prima consulenza gratuita per conoscerci, \
    analizzare le vostre idee e capire insieme come trasformarle in realtà. Nessun impegno, \
    solo una chiacchierata dedicata a voi. Raccontatemi la vostra storia e cliccate invia!"
};