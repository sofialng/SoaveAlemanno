import soave from '../img/soave.jpg';
import mariella from '../img/vaso.jpg';

const socials = [
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
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM8 7h4.8v2.3h.1c.7-1.3 2.4-2.6 5-2.6 5.3 0 6.3 3.5 6.3 8v9.3h-5v-8.2c0-2-.1-4.5-2.8-4.5s-3.2 2.2-3.2 4.3V24H8V7z",
  },
];

const team = [
  {
    src: soave,
    alt: "Soave Alemanno",
    name: "Soave Alemanno",
    role: "Founder & Wedding Planner",
    email: "info@soavealemanno.it",
  },
  {
    src: mariella,
    alt: "Mariella Longo",
    name: "Mariella Longo",
    role: "Event Coordinator",
    email: "mariella@soavealemanno.it",
  },
];

function Footer() {
  return (
    <footer
      className="pt-20 pb-8 px-6 bg-secondary-dark text-secondary-light"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── TOP GRID ── */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 pb-16">

          {/* LEFT — Brand */}
          <div className="flex flex-col justify-between gap-10 text-secondary-light">
            <div>
              <p
                className="text-[0.62rem] uppercase tracking-[0.35em] font-light mb-4 text-primary-dark"
              >
                Wedding & Event Planner
              </p>
              <h2
                className="font-serif text-2xl md:text-3xl font-light tracking-wide leading-snug "
              >
                Soave Alemanno
              </h2>
              <p className="mt-5 text-sm font-light leading-relaxed max-w-xl">
                Creiamo matrimoni ed eventi su misura, curando ogni dettaglio
                con eleganza e un approccio completamente personalizzato.
              </p>
            </div>

            {/* Contatti */}
            <div className="space-y-2">
              {[
                "P.IVA 05299610757",
                "Based in Italy",
                "info@soavealemanno.it",
                "+39 347 00 00 000",
              ].map((line) => (
                <p key={line} className="text-xs font-light tracking-wide" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT — Team */}
          <div className="flex flex-col justify-center gap-10">
            {team.map((person) => (
              <div key={person.name} className="flex items-center gap-6">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <img src={person.src} alt={person.alt} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="text-secondary-light">
                  <p
                    className="text-sm font-light tracking-wide"
                  >
                    {person.name}
                  </p>
                  <p
                    className="text-[0.68rem] uppercase tracking-[0.2em] font-light mt-0.5 text-primary-dark"
                  >
                    {person.role}
                  </p>
                  <p
                    className="text-xs font-light mt-1"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {person.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-[0.55rem] tracking-[0.4em]" style={{ color: "var(--color-primary-light)", opacity: 0.6 }}>✦</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* ── BOTTOM ── */}
        <div className="flex flex-col items-center gap-4">
          <p
            className="text-[0.62rem] font-light tracking-wide text-center md:text-center leading-relaxed max-w-lg"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            È vietata la copia, la riproduzione e la pubblicazione dei contenuti di questo sito,
            in qualsiasi modo o forma, non autorizzata espressamente dall'autore. © Copyright 2024
          </p>

          {/* Social */}
          <div className="flex gap-5">
            {socials.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-opacity duration-200 hover:opacity-100"
                style={{ opacity: 0.35 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.35)}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" style={{ fill: "rgba(255,255,255,0.9)" }}>
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;