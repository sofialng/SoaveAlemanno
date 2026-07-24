import img from "../../img/img";

// GLOBALS
export const fotografo_enrico = "Enrico Mazzotta";

/* ******************
 *     FOOTER       * 
 *******************/

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Yg3885ukr/?mibextid=wwXIfr",
    path: "M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.6v7A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/soavealemannowedding?igsh=dXN1YzdzcGpiYjhn",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6-1.75a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 18 5.75z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/3896919483",
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
    src: img.mariella,
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
  title: "Disegno i vostri sogni, guido il vostro giorno più bello.",
  paragraph: "Prendo per mano i vostri desideri per trasformarli in un matrimonio \
    impeccabile e senza stress. Dalla location ai minimi dettagli, coordino ogni cosa \
    con eleganza e precisione, lasciando a voi solo la gioia di vivere l'evento."
};

export const dove_i_sogni = {
  picture: img.home.board,
  title: <>Dove i vostri <span className="font-calligraphy">sogni</span> prendono forma</>,
  paragraph: 
    <>
      {/* <p>
        Credo che ogni storia d’amore sia unica e meriti di essere raccontata con autenticità, armonia ed eleganza. Per questo non mi limito a pianificare, ma disegno insieme a voi un evento che vi rispecchi in ogni dettaglio.
      </p>
      <p>
        Con il supporto del mio team, guido ogni fase dei preparativi per assicurarvi una giornata perfetta, dove l'unica vostra preoccupazione sarà godervi la festa.
      </p> */}
      <p>
        Ogni coppia ha una storia diversa, e ogni matrimonio dovrebbe raccontarla.
        Per questo il mio primo obiettivo è conoscervi, ascoltare i vostri desideri e comprendere ciò che conta davvero per voi. Creeremo così un evento in cui ogni scelta, dagli allestimenti ai fornitori, dai dettagli all'atmosfera, sia coerente con la vostra personalità e racconti, con autenticità ed eleganza, la vostra storia alle persone che amate.
      </p>
    </>
}

export const scenografie_d_amore = {
  picture: img.home.danielafull,
  title: "Un matrimonio che racconta chi siete",
  subtitle: "La regia del vostro giorno perfetto",
  paragraph: 
    <>
      <p>
        Vi aiuterò a individuare la location che meglio interpreta i vostri desideri e il rito che avete scelto, che sia civile, religioso o simbolico, selezionando i fornitori più adatti a voi. Coordinerò ogni fase del percorso e la regia dell'intero evento.
      </p>
    </>
}

export const wedding_stories = {
  picture: img.home.albero,
  title: <>Wedding <span className="font-calligraphy ml-4">stories</span></>,
  subtitle: "Frammenti di pura bellezza",
  paragraph: <>
    Esplorate le storie delle nostre coppie: progetti su misura dove l'eleganza incontra l'emozione autentica. Trovate l'ispirazione per il vostro giorno perfetto.
    </>,
  button: "Esplora la galleria"
}

export const wedding_journey = {
  title: "Il mio metodo, passo dopo passo",
  subtitle: "Il viaggio verso il giorno perfetto",
  paragraph: 
    <>
      <p>
        Progettare il vostro matrimonio non deve essere fonte di stress, ma un bellissimo viaggio.
      </p>
    </>,
  items: [
    {
        step: "La scintilla",
        title: "01 - L'ascolto",
        credit: fotografo_enrico,
        text: 
          <>
            Il viaggio inizia con un incontro dedicato a voi e alla vostra storia. Ascolto i vostri desideri per disegnare le fondamenta di un matrimonio autentico, unico e su misura.
          </>,
        image: img.home.fedi,
    },
    {
        step: "Il disegno sartoriale",
        title:  "02 - Il progetto e il budget",
        text: 
          <>
            È il momento di dare forma alle idee. Creiamo un piano organizzativo e creativo su misura per voi. In questa fase pianifichiamo i tempi e ottimizziamo ogni investimento, mostrandovi un'anteprima dettagliata di come sarà la vostra giornata.
          </>,
        image: img.home.tavoli,
    },
    {
        step: "La cura dei dettagli",
        title: "03 - Il coordinamento e la logistica",
        credit: fotografo_enrico,
        text: 
          <>
            È il momento in cui l'immaginazione si trasforma in realtà. Mi occupo della gestione dei contratti, dei contatti con i fornitori e delle scadenze. A voi resta un coinvolgimento sereno e piacevole nelle scelte di stile, liberi di concentrarvi solo su ciò che vi rappresenta davvero, senza il peso della gestione.
          </>,
        image: img.home.confetti,
    },
    {
        step: "Il giorno più bello",
        title: "04 - La regia",
        credit: fotografo_enrico,
        text:
           <>
            Il momento è arrivato. Con il mio team coordiniamo ogni dettaglio sul posto, gestiamo i fornitori e controlliamo i tempi dell'evento dietro le quinte. Ci assicuriamo che tutto sia perfetto, lasciando a voi e ai vostri ospiti solo la gioia della festa.
          </>,
        image: img.home.bacio,
    },
  ]
}

export const wedding_experience = {
  picture: img.home.brindisi_enrico_valentina,
  title: "La firma del vostro giorno perfetto",
  subtitle: "Wedding experience",
  paragraph: 
    <>
      Vi accompagnerò in un percorso costruito su misura, partendo dall’ascolto della vostra storia fino alla definizione di ogni scelta, con l’obiettivo di creare un evento che vi rappresenti davvero.
    </>,
}

export const quote_caramagna = {
  quote: "Quando non riesco a dirtelo, cerco chi lo dice per me. E lo trovo in un bouquet di fiori.",
  author: "Fabrizio Caramagna",
  subtitle: "Scrittore"
}

export const quote_antoine = {
  quote: "Amare non è guardarsi l'un l'altro, ma guardare insieme nella stessa direzione",
  author: "Antoine de Saint-Exupéry",
  subtitle: "Scrittore"
}

export const quote_auster = {
  quote: "La verità della storia è nei dettagli.",
  author: "Paul Auster",
  subtitle: "Scrittore"
}

export const services = {
  title: "I servizi proposti",
  subtitle: "La soluzione più adatta a voi",
  paragraph: 
    <>
    Ogni coppia ha esigenze diverse. Che desideriate un supporto completo, una consulenza mirata, un destination wedding o l'organizzazione di un altro evento speciale, mettiamo a vostra disposizione servizi flessibili, pensati per adattarsi alle vostre esigenze e ai vostri desideri.
    </>,
  list: 
    [
      {
        title: "Matrimonio Completo",
        subtitle: "Dall'ideazione al grande giorno: la gestione totale del vostro sogno",
        image: img.home.ombre,
        credit: fotografo_enrico,
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
        image: img.home.profumo,
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
        image: img.home.simone_daniela_17,
        description: "Specializzate nel trasformare il fascino autentico della Puglia in \
          un palcoscenico luxury per coppie straniere o fuori regione. Guidiamo voi e i vostri \
          ospiti alla scoperta del Salento, coordinando non solo il giorno del matrimonio in \
          masserie o corti secolari, ma progettando un'intera esperienza di viaggio: dai welcome \
          party ai brunch d'addio.",
        services: ["Travel", "Logistics", "Design"]
      },
      {
        title: "Eventi Privati e Aziendali",
        subtitle: "Ogni occasione merita un progetto capace di lasciare il segno",
        image: img.home.allestimento,
        credit: "",
        description: "Non solo matrimoni. Progettiamo e coordiniamo eventi privati e aziendali curando ogni dettaglio con la stessa attenzione, eleganza e professionalità. Dalle cresime ai compleanni, dalle feste di laurea agli eventi corporate, realizziamo esperienze su misura che rispecchiano la vostra personalità, i vostri obiettivi e lo stile che desiderate trasmettere.",
        services: [
          "Compleanni",
          "Lauree",
          "Cresime",
          "Eventi Aziendali"
        ]
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
        className="paragraph text-left"
      >
        Il Salento è una terra di luce, di pietra leccese e di orizzonti infiniti.
        Tra masserie storiche, ville sul mare e giardini mediterranei, ogni venue
        racconta una storia unica: la vostra.
      </p>
      <p
        className="paragraph text-left"
      >
        Organizziamo matrimoni ed eventi in tutta la penisola salentina: da Lecce
        a Otranto, da Gallipoli alle campagne di Nardò, portando eleganza e cura
        in ogni angolo di questa terra straordinaria.
      </p>
    </>
}

export const wedding_types = {
    subtitle: 
      <>
        Un matrimonio per ogni
        <span className="">{" "}sogno</span>
      </>,
    title: "Le nostre proposte",
    paragraph: "Queste sono alcune delle proposte che possiamo realizzare per voi, pensate per darvi un’idea del nostro stile. Ogni progetto, però, nasce su misura: se avete in mente qualcosa di diverso, lo costruiremo insieme, adattando ogni dettaglio e creando soluzioni alternative in linea con la vostra visione.",
    types: [
      {
        numero: "01",
        titolo: "Matrimonio al Mare",
        sottotitolo: "Il profumo del Mediterraneo, i piedi nella sabbia e l'infinito come testimone.",
        descrizione:
          "Sposarsi dove il cielo incontra il mare del Salento. Immagina il rumore della risacca come colonna sonora, i colori caldi del tramonto che dipingono l'orizzonte e una festa a piedi nudi sulla spiaggia, avvolti dalla brezza e da un senso di assoluta libertà. Un \"Sì\" leggero, fresco e indimenticabile.",
        dettagli: ["Vista mare garantita", "Cerimonia in spiaggia", "Aperitivo al tramonto"],
        image: img.matrimoniomare,
        direction: "right",
      },
      {
        numero: "02",
        titolo: "Matrimonio in Masseria",
        sottotitolo: "Tra ulivi secolari e mura bianche, dove il tempo si ferma e si accende la magia.",
        descrizione:
          "Il fascino autentico della pietra antica, cortili segreti illuminati da una cascata di lucine e l'abbraccio di uliveti senza tempo. La masseria è l'essenza più vera del Salento: un’eleganza rustica e sofisticata al tempo stesso, che profuma di terra, di tradizione e di una grande festa in famiglia sotto le stelle.",
        dettagli: ["Fino a 200 ospiti", "Catering interno", "Alloggi in loco"],
        image: img.matrimoniomasseria,
        direction: "left",
      },
      {
        numero: "03",
        titolo: "Matrimonio nel Borgo Antico",
        sottotitolo: "Il calore della pietra leccese, la poesia dei vicoli e il battito autentico del Salento.",
        descrizione:
          "Sposarsi nel cuore di un borgo salentino significa immergersi in una favola di pietra dorata che si scalda al sole. Camminare tra le stradine storiche, mentre l'eco di una pizzica sembra risuonare in lontananza, trasformerà il vostro matrimonio in un pezzo di storia di questa terra meravigliosa. Un \"Sì\" pieno di quella magia del Sud che ti resta dentro per sempre.",
        dettagli: ["Palazzo nobiliare", "Chiostro privato", "Illuminazione notturna"],
        image: img.matrimonioborgo,
        direction: "left",
      },
    ]
};

export const box_to_form = {
  picture: img.home.fiori2,
  title: 
    <>
      Iniziamo a progettare il vostro giorno insieme!
    </>,
  paragraph: 
    <>
      Raccontatemi le vostre idee. Io ed il mio team le trasformeremo
      in un evento curato in ogni dettaglio, con eleganza e armonia.
    </>,
};

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
    Ciao, sono <span className="font-calligraphy">Soave</span>
  </>,
  paragraph: 
    <>
      Aiuto le coppie a trasformare il giorno del
      loro <span className="font-serif-italic">Sì</span> in un’esperienza autentica, fluida e priva di stress.
      Non credo nei matrimoni fotocopia. Credo nell’ascolto, nell’eleganza
      sartoriale e nella cura di quei piccoli dettagli che parlano davvero di voi.
      Che abbiate bisogno di una guida passo dopo passo per l'intera organizzazione,
      o semplicemente di una bussola professionale per non perdere la rotta, il mio
      obiettivo è uno solo: farvi vivere i preparativi con il sorriso e farvi godere ogni
      singolo istante della vostra festa.
    </>
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
      src: img.chisono.chiesa,
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
  picture: img.chisono.mariella,
  title: 
  <>
    Ciao, sono <span className="font-calligraphy">Mariella</span>
  </>,
  subtitle: "La mia collaboratrice",
  paragraph: 
  <>
    La creatività ha sempre fatto parte del mio modo di vedere il mondo. Mi è sempre piaciuto immaginare nuovi progetti e trasformare le idee in qualcosa di concreto, con cura e attenzione ai dettagli.
    In Soave Alemanno porto questo approccio, insieme al desiderio di rendere ogni matrimonio unico e autentico. Il mio obiettivo è dare forma alle vostre idee, creando un evento che vi rappresenti davvero e permettendovi di vivere ogni momento con serenità.
  </>
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
      // author: "Bo",
      // subtitle: "Bo"
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
    subtitle: 
      <>
        Ogni matrimonio ha la sua storia: noi la raccontiamo attraverso dettagli, emozioni e momenti indimenticabili.
      </>,
    images: [
      { src: img.gallery.matrimoni.carmen_stefano_1, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_2, alt: "Matrimonio di Carmen e Stefano", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_3, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_4, alt: "Matrimonio di Carmen e Stefano", caption: "La cerimonia", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_5, alt: "Matrimonio di Carmen e Stefano", caption: "La cerimonia", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_6, alt: "Matrimonio di Carmen e Stefano", caption: "NON CARMEN E STEFANO", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_7, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_8, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_9, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_10, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_11, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_12, alt: "Matrimonio di Carmen e Stefano", caption: "La cerimonia", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_13, alt: "Matrimonio di Carmen e Stefano", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_14, alt: "Matrimonio di Carmen e Stefano", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_15, alt: "Matrimonio di Carmen e Stefano", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_16, alt: "Matrimonio di Carmen e Stefano", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_17, alt: "Matrimonio di Carmen e Stefano", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_18, alt: "Matrimonio di Carmen e Stefano", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_19, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_20, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      { src: img.gallery.matrimoni.carmen_stefano_21, alt: "Matrimonio di Carmen e Stefano", caption: "La preparazione", credit: "" },
      
      { src: img.gallery.matrimoni.caterina_luigi_1, alt: "Matrimonio di Caterina e Luigi", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.caterina_luigi_2, alt: "Matrimonio di Caterina e Luigi", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.caterina_luigi_3, alt: "Matrimonio di Caterina e Luigi", caption: "L'uscita della sposa", credit: "" },
      { src: img.gallery.matrimoni.caterina_luigi_4, alt: "Matrimonio di Caterina e Luigi", caption: "L'uscita della sposa", credit: "" },
      
      { src: img.gallery.matrimoni.chiesa, alt: "Matrimonio di Carmen e Stefano", caption: "La chiesa", credit: "" },
      
      { src: img.gallery.matrimoni.errico_valentina_1, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_2, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico},
      { src: img.gallery.matrimoni.errico_valentina_3, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.errico_valentina_4, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico},
      { src: img.gallery.matrimoni.errico_valentina_5, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_6, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_7, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_8, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_9, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_10, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_11, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_12, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_13, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_14, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      { src: img.gallery.matrimoni.errico_valentina_15, alt: "Matrimonio di Errico e Valentina", caption: "Il giorno del matrimonio", credit: fotografo_enrico },
      
      // { src: img.gallery.matrimoni.matrimonio, alt: "Matrimonio di ????????", caption: "Il giorno del matrimonio", credit: "" },
      
      { src: img.gallery.matrimoni.simone_daniela_1, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_2, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_3, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_4, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_5, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_6, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_7, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_8, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_9, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_10, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_11, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_12, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_13, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_14, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_15, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_16, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_17, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_18, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_19, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_20, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_21, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_22, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_23, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_24, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_25, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_26, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_27, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_28, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_29, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_30, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_31, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_32, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_33, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_34, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
      { src: img.gallery.matrimoni.simone_daniela_35, alt: "Matrimonio di Simone e Daniela", caption: "Il giorno del matrimonio", credit: "" },
    ],
  },
  {
    title: "Altri eventi",
    subtitle: 
      <>
        Dalle feste private agli eventi speciali, ogni occasione merita un’atmosfera unica e curata in ogni dettaglio.
      </>,
    images: [
      { src: img.gallery.eventi.compleanno_angelo_1, alt: "Compleanno di Angelo", caption: "La torta", credit: "" },
      { src: img.gallery.eventi.compleanno_daniela_1, alt: "Compleanno di Daniela", caption: "La torta", credit: "" },
      { src: img.gallery.eventi.compleanno_gregorio_1, alt: "Compleanno di Gregorio", caption: "L'allestimento", credit: "" },
      { src: img.gallery.eventi.compleanno_gregorio_2, alt: "Compleanno di Gregorio", caption: "L'allestimento", credit: "" },
      { src: img.gallery.eventi.compleanno_mariaelena_1, alt: "Compleanno di Maria Elena", caption: "La torta", credit: "" },
      { src: img.gallery.eventi.compleanno_zia_1, alt: "Compleanno di Mariella", caption: "Il menu", credit: "" },
      { src: img.gallery.eventi.cresima_francesco_1, alt: "Cresima di Francesco", caption: "L'allestimento", credit: "" },
      { src: img.gallery.eventi.cresima_francesco_2, alt: "Cresima di Francesco", caption: "L'allestimento", credit: "" },
      { src: img.gallery.eventi.cresima_francesco_3, alt: "Cresima di Francesco", caption: "L'allestimento", credit: "" },
      { src: img.gallery.eventi.cresima_francesco_4, alt: "Cresima di Francesco", caption: "L'allestimento", credit: "" },
      { src: img.gallery.eventi.cresima_francesco_5, alt: "Cresima di Francesco", caption: "L'allestimento", credit: "" },
    ],
  },
  {
    title: "Dettagli",
    subtitle: 
      <>
        Questa sezione raccoglie tutti quei piccoli dettagli che completano il vostro evento, rendendolo unico e inimitabile.
      </>,
    images: [
      { src: img.gallery.dettagli.angelo_1, alt: "Battesimo di Angelo", caption: "Biscottini", credit: "" },
      { src: img.gallery.dettagli.errico_valentina_1, alt: "Matrimonio di Errico e Valentina", caption: "Tag valigie", credit: "" },
      { src: img.gallery.dettagli.errico_valentina_2, alt: "Matrimonio di Errico e Valentina", caption: "Tamburelli", credit: "" },
      { src: img.gallery.dettagli.errico_valentina_3, alt: "Matrimonio di Errico e Valentina", caption: "Stelline", credit: "" },
      { src: img.gallery.dettagli.francesco_1, alt: "Cresima di Francesco", caption: "Biscottini", credit: "" },
      { src: img.gallery.dettagli.gregorio_1, alt: "Compleanno di Gregorio", caption: "Biscottini", credit: "" },
      { src: img.gallery.dettagli.halloween_1, alt: "Halloween", caption: "Decorazioni", credit: "" },
      { src: img.gallery.dettagli.halloween_2, alt: "Halloween", caption: "Decorazioni", credit: "" },
      { src: img.gallery.dettagli.mariella_1, alt: "Compleanno di Mariella", caption: "Tavolo dei pensierini", credit: "" },
      { src: img.gallery.dettagli.matteo_1, alt: "Nascita di Matteo", caption: "Card", credit: "" },
      { src: img.gallery.dettagli.matteo_2, alt: "Nascita di Matteo", caption: "Fiocco nascita", credit: "" },
      { src: img.gallery.dettagli.matteo_3, alt: "Nascita di Matteo", caption: "Card", credit: "" },
      { src: img.gallery.dettagli.natale_1, alt: "Natale", caption: "Decorazioni", credit: "" },
      { src: img.gallery.dettagli.sofia_1, alt: "Compleanno di Sofia", caption: "Allestimento", credit: "" },
      { src: img.gallery.dettagli.stefano_carmen_1, alt: "Matrimonio di Stefano e Carmen", caption: "Bomboniere", credit: "" },
      { src: img.gallery.dettagli.stefano_carmen_2, alt: "Matrimonio di Stefano e Carmen", caption: "Fazzolettini", credit: "" },
    ],
  },
];

/* **********************************
 *     PRENOTA UNA CONSULENZA       * 
 ************************************/

export const intro_prenota= {
  wedding: {
    title: "Raccontatemi il vostro giorno",
    subtitle: "Iniziamo insieme",
    paragraph: "Il vostro viaggio inizia da qui. E il primo passo è offerto da me. \
      Avete domande, sogni da realizzare o semplicemente non sapete da dove iniziare? \
      Compilate il form qui sotto: faremo una prima consulenza gratuita per conoscerci, \
      analizzare le vostre idee e capire insieme come trasformarle in realtà. Nessun impegno, \
      solo una chiacchierata dedicata a voi. Raccontatemi la vostra storia e cliccate invia!"
  },
  other: {
    title: "Raccontami l'evento che hai in mente",
    subtitle: "Iniziamo insieme",
    paragraph: "Il vostro viaggio inizia da qui. E il primo passo è offerto da me. \
      Avete domande, sogni da realizzare o semplicemente non sapete da dove iniziare? \
      Compilate il form qui sotto: faremo una prima consulenza gratuita per conoscerci, \
      analizzare le vostre idee e capire insieme come trasformarle in realtà. Nessun impegno, \
      solo una chiacchierata dedicata a voi. Raccontatemi la vostra storia e cliccate invia!"
  }
};