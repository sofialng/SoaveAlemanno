export default function PrivacyPolicy() {
  return (
    <main
      className="min-h-screen px-6 bg-secondary-light text-secondary-dark pb-30"
    >
      <div className="max-w-2xl mx-auto">

        {/* Soprattitolo */}
        {/* <p
          className="subtitle"
        >
          Informativa
        </p> */}

        {/* Titolo */}
        {/* <h1
          className="title mb-10"
        >
          Privacy &amp; Cookie Policy
        </h1> */}

        {/* Data aggiornamento */}
        {/* <p
          className="subtitle mb-2"
        >
          Ultimo aggiornamento: giugno 2026
        </p> */}

        {/* Divisore ornamentale */}
        <Divider />

        {/* Sezioni */}
        <Section number="1" className="tet-primary-dark" title="Titolare e responsabile del trattamento">
          <p>
            Titolare e Responsabile del trattamento dei dati personali raccolti tramite questo sito 
            è: Soave Alemanno - Partita IVA 05299610757 - indirizzo e-mail: info@soavealemanno.it.
          </p>
        </Section>

        <Section number="2" title="Dati raccolti e finalità">
          <SubHeading>Modulo di contatto</SubHeading>
          <p>
            Compilando il modulo di contatto presente sul sito, l'utente fornisce volontariamente i
            propri dati (nome, indirizzo e-mail, messaggio). Tali dati vengono trasmessi tramite il
            servizio <strong>Resend</strong> (resend.com) al solo scopo di recapitare tramite una normale email 
            la richiesta al titolare. Non vengono conservati su server propri né ceduti a terzi per finalità di
            marketing.
          </p>
          <SubHeading>Navigazione e dati tecnici</SubHeading>
          <p>
            Come tutti i siti web, questo sito riceve automaticamente dal browser dell'utente alcune
            informazioni tecniche (indirizzo IP, tipo di browser, pagine visitate, orario di accesso).
            Questi dati sono utilizzati esclusivamente per garantire il corretto funzionamento del sito
            e non vengono associati a nessuna identità personale.
          </p>
        </Section>

        <Section number="3" title="Cookie">
          <p>
            Questo sito <strong>non utilizza cookie di profilazione</strong> né cookie di tracciamento
            o marketing di alcun tipo. Non sono presenti sistemi di analisi del traffico (es. Google
            Analytics) né pixel di terze parti.
          </p>
          <SubHeading>Cookie tecnici</SubHeading>
          <p>Il sito non installa cookie di sessione né cookie di funzionalità propri.</p>
          <SubHeading>Mappe interattive (OpenStreetMap)</SubHeading>
          <p>
            La sezione mappa del sito utilizza <strong>Leaflet.js</strong> con tile cartografici
            forniti da <strong>OpenStreetMap</strong> (openstreetmap.org). La visualizzazione della
            mappa comporta richieste ai server di OpenStreetMap, che potrebbero raccogliere dati
            tecnici di navigazione secondo la propria{" "}
            <a
              href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
              style={{ color: "var(--color-primary-dark)" }}
            >
              privacy policy
            </a>
            . Questo sito non ha accesso né controllo su tali dati.
          </p>
        </Section>

        <Section number="4" title="Base giuridica del trattamento">
          <p>
            Il trattamento dei dati inviati tramite il modulo di contatto si basa sul{" "}
            <strong>consenso dell'interessato</strong> (art. 6, par. 1, lett. a del GDPR), espresso
            mediante l'invio volontario del modulo.
          </p>
        </Section>

        <Section number="5" title="Finalità del trattamento dei dati">
          <p>
            I dati inviati verranno utilizzati al solo scopo di potervi eventualmente ricontattare 
            tramite i riferimenti indicati nel form contatti per portar organizzare la consulenza
            richiesta tramite lo strumento del form.
          </p>
        </Section>

        <Section number="6" title="Conservazione dei dati">
          <p>
            I dati trasmessi tramite il modulo di contatto vengono conservati per il tempo
            strettamente necessario a gestire la richiesta e non oltre. Non viene effettuata alcuna
            profilazione.
          </p>
        </Section>

        <Section number="7" title="Diritti dell'interessato">
          <p className="mb-4">In qualità di interessato, hai diritto a:</p>
          <ul className="space-y-2 mb-4">
            {[
              "accedere ai tuoi dati personali",
              "richiederne la rettifica o la cancellazione",
              "opporti al trattamento",
              "proporre reclamo al Garante per la protezione dei dati personali",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: "var(--color-secondary-dark)" }}>✦</span>
                {i === 3 ? (
                  <span>
                    proporre reclamo al Garante per la protezione dei dati personali (
                    <a
                      href="https://www.garanteprivacy.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                      style={{ color: "var(--color-primary-dark)" }}
                    >
                      www.garanteprivacy.it
                    </a>
                    )
                  </span>
                ) : (
                  <span>{item}</span>
                )}
              </li>
            ))}
          </ul>
          <p>
            Per esercitare questi diritti, scrivi a <strong>Soave Alemanno</strong> tramite l'indirizzo e-mail 
            indicato nel sito.
          </p>
        </Section>

        <Section number="7" title="Modifiche alla presente policy" last>
          <p>
            Il titolare si riserva il diritto di aggiornare questa policy in qualsiasi momento. La
            data di ultimo aggiornamento è indicata in cima alla pagina.
          </p>
        </Section>

      </div>
    </main>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="flex-1 h-px bg-primary-dark"/>
      <span className="text-primary-dark">✦</span>
      <div className="flex-1 h-px bg-primary-dark"/>
    </div>
  );
}

function Section({ number, title, children, last = false }) {
  return (
    <section className={last ? "mb-0" : "mb-12"}>
      {/* Intestazione sezione */}
      <div className="flex items-baseline gap-4 mb-5">
        <span
          className="subtitle text-primary-dark"
        >
          {String(number).padStart(2, "0")}
        </span>
        <h2
          className="title text-2xl"
        >
          {title}
        </h2>
      </div>

      {/* Linea separatrice */}
      <div
        className="h-px mb-6 bg-primary-dark/20"
      />

      {/* Contenuto */}
      <div
        className="paragraph"
      >
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }) {
  return (
    <p
      className="subtitle mt-6 mb-2 text-secondary-dark"
    >
      {children}
    </p>
  );
}