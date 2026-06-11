import { useEffect, useState } from "react";

const COOKIE_KEY = "cookie_technical_notice";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(COOKIE_KEY);
    if (!seen) setVisible(true);
  }, []);

  const closeBanner = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl">
      <div className="backdrop-blur-xl bg-black/70 border border-white/10 text-white rounded-2xl shadow-2xl p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

        {/* testo */}
        <p className="text-xs md:text-sm text-white/80 leading-relaxed">
          Questo sito utilizza esclusivamente cookie tecnici necessari al suo corretto funzionamento.
          Non vengono utilizzati cookie di profilazione o tracciamento.
        </p>

        {/* bottone */}
        <button
          onClick={closeBanner}
          className="px-4 py-2 text-xs rounded-full bg-white text-black hover:bg-white/90 transition shrink-0"
        >
          Ho capito
        </button>

      </div>
    </div>
  );
}