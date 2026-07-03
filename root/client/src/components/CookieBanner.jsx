import { useEffect, useState } from "react";

const COOKIE_KEY = "cookie_consent";

function readConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(analytics) {
  localStorage.setItem(
    COOKIE_KEY,
    JSON.stringify({ analytics, ts: Date.now() })
  );
  window.dispatchEvent(new CustomEvent("cookie-consent-changed"));
}

export default function CookieBanner() {
  const [status, setStatus] = useState("hidden"); // hidden | banner | preferences | icon
  const [returnTo, setReturnTo] = useState("icon"); // dove torna il tasto "Indietro"
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (!consent) {
      setStatus("banner");
    } else {
      setAnalyticsEnabled(!!consent.analytics);
      setStatus("icon");
    }
  }, []);

  const acceptAll = () => {
    saveConsent(true);
    setAnalyticsEnabled(true);
    setStatus("icon");
  };

  const rejectAll = () => {
    saveConsent(false);
    setAnalyticsEnabled(false);
    setStatus("icon");
  };

  const savePreferences = () => {
    saveConsent(analyticsEnabled);
    setStatus("icon");
  };

  const openPreferences = () => {
    const consent = readConsent();
    if (consent) setAnalyticsEnabled(!!consent.analytics);
    setReturnTo(status === "banner" ? "banner" : "icon");
    setStatus("preferences");
  };

  const goBack = () => {
    const consent = readConsent();
    if (consent) setAnalyticsEnabled(!!consent.analytics);
    setStatus("banner");
  };

  return (
    <>
      {/* BISCOTTINO PERSISTENTE */}
      {status === "icon" && (
        <button
          onClick={openPreferences}
          aria-label="Gestisci preferenze cookie"
          className="
            fixed
            bottom-5
            left-5
            z-50
            w-11
            h-11
            rounded-full
            bg-secondary-light/50
            backdrop-blur-xl
            border
            border-primary-dark/90
            text-lg
            shadow-xl
            flex
            items-center
            justify-center
            hover:bg-primary-dark/85
            transition
          "
        >
          🍪
        </button>
      )}

      {/* BANNER INIZIALE */}
      {status === "banner" && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl">
          <div
            className="
              backdrop-blur-xl
              bg-black/70
              border
              border-white/10
              text-white
              rounded-2xl
              shadow-2xl
              p-5
              flex
              flex-col
              gap-4
            "
          >
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Questo sito utilizza cookie tecnici necessari al suo corretto
              funzionamento e, se acconsenti, Cloudflare Analytics per
              raccogliere statistiche di visita in forma aggregata. Non
              vengono utilizzati cookie di profilazione o tracciamento
              pubblicitario.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button
                onClick={openPreferences}
                className="
                  px-4 py-2 text-xs rounded-full
                  border border-white/20
                  text-white/80
                  hover:bg-white/10
                  transition
                "
              >
                Preferenze
              </button>
              <button
                onClick={rejectAll}
                className="
                  px-4 py-2 text-xs rounded-full
                  border border-white/20
                  text-white/80
                  hover:bg-white/10
                  transition
                "
              >
                Rifiuta
              </button>
              <button
                onClick={acceptAll}
                className="
                  px-4 py-2 text-xs rounded-full
                  bg-white text-black
                  hover:bg-white/90
                  transition
                "
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PANNELLO PREFERENZE */}
      {status === "preferences" && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl">
          <div
            className="
              backdrop-blur-xl
              bg-black/70
              border
              border-white/10
              text-white
              rounded-2xl
              shadow-2xl
              p-5
              flex
              flex-col
              gap-5
            "
          >
            <div className="flex items-center gap-2">
              <button
                onClick={goBack}
                aria-label="Torna indietro"
                className="
                  w-7 h-7
                  rounded-full
                  border border-white/20
                  text-white/70
                  hover:bg-white/10
                  transition
                  flex items-center justify-center
                  shrink-0
                "
              >
                ←
              </button>
              <div>
                <h4 className="text-sm font-medium">Preferenze cookie</h4>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed -mt-2">
              Puoi scegliere quali cookie consentire. I cookie tecnici sono
              sempre attivi perché indispensabili al funzionamento del sito.
            </p>

            <div className="flex flex-col gap-3">
              {/* TECNICI - sempre attivi */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium">Cookie tecnici</p>
                  <p className="text-[0.7rem] text-white/50">
                    Necessari al funzionamento del sito. Sempre attivi.
                  </p>
                </div>
                <span
                  className="
                    w-10 h-6 rounded-full bg-white/30
                    flex items-center px-1
                    cursor-not-allowed
                  "
                >
                  <span className="w-4 h-4 rounded-full bg-white translate-x-4" />
                </span>
              </div>

              {/* ANALYTICS */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium">Cloudflare Analytics</p>
                  <p className="text-[0.7rem] text-white/50">
                    Statistiche di visita aggregate, senza profilazione
                    individuale.
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled((v) => !v)}
                  className={`
                    w-10 h-6 rounded-full flex items-center px-1
                    transition-colors
                    ${analyticsEnabled ? "bg-white" : "bg-white/20"}
                  `}
                >
                  <span
                    className={`
                      w-4 h-4 rounded-full transition-transform
                      ${
                        analyticsEnabled
                          ? "bg-black translate-x-4"
                          : "bg-white translate-x-0"
                      }
                    `}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button
                onClick={rejectAll}
                className="
                  px-4 py-2 text-xs rounded-full
                  border border-white/20
                  text-white/80
                  hover:bg-white/10
                  transition
                "
              >
                Rifiuta facoltativi
              </button>
              <button
                onClick={savePreferences}
                className="
                  px-4 py-2 text-xs rounded-full
                  bg-white text-black
                  hover:bg-white/90
                  transition
                "
              >
                Salva preferenze
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}