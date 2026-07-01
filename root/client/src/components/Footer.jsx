import { NavLink } from 'react-router-dom';

function Footer({ socials, team }) {
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

          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              `relative text-[0.62rem] font-light tracking-wide cursor-pointer
              text-white/40 hover:text-white transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-0.5
              after:h-px after:w-0 after:bg-white
              hover:after:w-full after:transition-all after:duration-300
              ${isActive ? "text-white after:w-full" : ""}`
            }
          >
            Privacy Policy
          </NavLink>

          {/* Social */}
          <div className="flex gap-5">
            {socials.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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