export default function PrivacyPolicy() {
  return (
    <main
      className="min-h-screen px-6 bg-secondary-light text-secondary-dark pb-30"
    >
      <div className="max-w-2xl mx-auto">

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
          <SubHeading>Hosting e infrastruttura (Cloudflare)</SubHeading>
          <p>
            Questo sito è ospitato tramite <strong>Cloudflare Pages</strong>, servizio fornito da
            Cloudflare, Inc. Per erogare il sito ed proteggerlo da traffico dannoso, Cloudflare
            elabora automaticamente alcuni dati tecnici di ogni richiesta (indirizzo IP, tipo di
            browser, pagine richieste, orario di accesso). Questi dati sono trattati da Cloudflare in
            qualità di fornitore di infrastruttura e non vengono utilizzati da questo sito per
            identificare gli utenti. Per maggiori informazioni si rimanda alla{" "}
            
            <a  href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
              style={{ color: "var(--color-primary-dark)" }}
            >
              privacy policy di Cloudflare
            </a>
            .
          </p>
        </Section>

        <Section number="3" title="Cookie">
          <SubHeading>Cookie tecnici</SubHeading>
          <p>
            Questo sito non installa cookie propri di sessione o di funzionalità. Cloudflare, in
            qualità di fornitore dell'infrastruttura, può impostare alcuni cookie tecnici (ad
            esempio per la protezione da traffico automatizzato dannoso), strettamente necessari al
            funzionamento e alla sicurezza del sito. Questi cookie non richiedono consenso in quanto
            esenti ai sensi della normativa sulla cookie law.
          </p>
          <SubHeading>Cloudflare Analytics</SubHeading>
          <p>
            Con il tuo consenso, il sito può utilizzare <strong>Cloudflare Web Analytics</strong> per
            raccogliere statistiche di visita aggregate (pagine visitate, provenienza del traffico,
            tempi di caricamento). Questo strumento non utilizza cookie né tecnologie di
            memorizzazione lato browser per raccogliere i dati, e non effettua alcuna profilazione
            individuale degli utenti. Lo script viene caricato solo se scegli "Accetta" o attivi
            l'opzione corrispondente dal pannello preferenze, ed è disattivato di default.
          </p>
          <p>
            Puoi rivedere o modificare la tua scelta in qualsiasi momento tramite l'icona 🍪 sempre
            presente in basso sul sito, che riapre il pannello delle preferenze cookie.
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
        className="paragraph text-left"
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