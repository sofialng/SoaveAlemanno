import PageIntro from "../components/PageIntro";
import PrivacyPolicy from "../components/PrivacyPolicy";

export default function Privacy() {  
  return (
    <>
      <main>
        {/* Inserire qui i servizi con elenco di chi siamo, DOVE operiamo e cosa facciamo, quali sono i pacchetti disponibili */}

        <div className="w-full px-6 pt-30 pb-2 md:px-12 bg-secondary-light">
          <PageIntro
            header="Informativa"
            title="Privacy & Cookie Policy"
            text={
              <>
                <p className="mb-4 text-secondary-dark">
                  Ultimo aggiornamento: Giugno 2026
                </p>

                <p className="mb-4">
                  La presente informativa descrive le modalità di raccolta,
                  utilizzo e protezione dei dati personali degli utenti che
                  visitano questo sito web, nel rispetto del Regolamento (UE)
                  2016/679 ("GDPR").
                </p>

                <p>
                  Le informazioni contenute in questa pagina si applicano
                  esclusivamente al presente sito e non riguardano eventuali
                  siti web di terze parti raggiungibili tramite collegamenti
                  esterni presenti al suo interno. Per tali siti, si invita
                  l’utente a consultare le rispettive informative sulla privacy.
                </p>
              </>
            }
          />
        </div>

        <PrivacyPolicy />

      </main>
    </>
  );
}