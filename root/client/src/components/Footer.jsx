import soave from '../img/soave.jpg';
import mariella from '../img/vaso.jpg';

function Footer() {
  return (
    <footer className="bg-secondary-dark text-white/80 pt-10 pb-6 px-6 gap-8 flex flex-col">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">

  {/* LEFT */}
  <div className="md:w-1/2 pr-8 flex flex-col justify-center">
    <h2 className="text-xl font-semibold text-white">
      Soave Alemanno Wedding & Event Planner
    </h2>

    <p className="mt-4 text-sm text-white/70 leading-relaxed">
      Creiamo matrimoni ed eventi su misura, curando ogni dettaglio con eleganza
      e un approccio completamente personalizzato.
    </p>

    <div className="mt-6 space-y-1 text-sm text-white/70">
      <p>P.IVA 05299610757</p>
      <p>Based in Italy</p>
      <p>info@soavealemanno.it</p>
      <p>+39 347 00 00 000</p>
    </div>
  </div>

  {/* VERTICAL LINE */}
  <div className="hidden md:block w-px bg-white/10 mx-6"></div>

  {/* RIGHT */}
  <div className="md:w-1/2 pl-8 flex flex-col justify-center gap-12">

    {/* SOAVE */}
    <div className="flex items-center gap-6">
      <img
        src={soave}
        alt="Soave Alemanno"
        className="w-16 h-16 object-cover rounded-full"
      />
      <div>
        <p className="text-white font-semibold">Soave Alemanno</p>
        <p className="text-sm text-white/70">Founder & Wedding Planner</p>
        <p className="text-sm text-white/70">info@soavealemanno.it</p>
      </div>
    </div>

    {/* MARIELLA */}
    <div className="flex items-center gap-6">
      <img
        src={mariella}
        alt="Mariella Longo"
        className="w-16 h-16 object-cover rounded-full"
      />
      <div>
        <p className="text-white font-semibold">Mariella Longo</p>
        <p className="text-sm text-white/70">Event Coordinator</p>
        <p className="text-sm text-white/70">mariella@soavealemanno.it</p>
      </div>
    </div>

  </div>
</div>

      {/* DIVIDER */}
      <div className="border-t border-white/20 "></div>

      {/* BOTTOM SECTION */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        
        <p className="text-xs text-center text-white/70">
          È vietata la copia, la riproduzione e la pubblicazione dei contenuti di questo sito,
          in qualsiasi modo o forma, non autorizzata espressamente dall'autore. © Copyright 2024
        </p>

        {/* SOCIAL */}
        <div className="flex gap-4">
          
          {/* Facebook */}
          <a href="#" className="hover:opacity-70">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.6v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="hover:opacity-70">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM8 7h4.8v2.3h.1c.7-1.3 2.4-2.6 5-2.6 5.3 0 6.3 3.5 6.3 8v9.3h-5v-8.2c0-2-.1-4.5-2.8-4.5s-3.2 2.2-3.2 4.3V24H8V7z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="hover:opacity-70">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6-1.75a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 18 5.75z"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;