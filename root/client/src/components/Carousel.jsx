import { useRef, useState, useEffect } from "react";

import masseria from "../img/daniela.jpg";
import mare from "../img/daniela.jpg";
import centrostorico from "../img/daniela.jpg";
import tenuta from "../img/daniela.jpg";

const tipi = [
  {
    numero: "01",
    titolo: "Masseria",
    sottotitolo: "Tra ulivi e pietra leccese",
    descrizione:
      "Le masserie salentine offrono un'atmosfera autentica e senza tempo. Cortili in pietra, giardini profumati di lavanda e ulivi secolari fanno da cornice a matrimoni intimi e raffinati.",
    dettagli: ["Fino a 200 ospiti", "Catering interno", "Alloggi in loco"],
    img: masseria,
  },
  {
    numero: "02",
    titolo: "Sul mare",
    sottotitolo: "Acque cristalline come scenario",
    descrizione:
      "Dal tramonto di Gallipoli alle calette di Otranto, sposarsi con il mare come orizzonte è il sogno di molte coppie. Ville private e lidi esclusivi per una cerimonia indimenticabile.",
    dettagli: ["Vista mare garantita", "Cerimonia in spiaggia", "Aperitivo al tramonto"],
    img: mare,
  },
  {
    numero: "03",
    titolo: "Centro storico",
    sottotitolo: "Lecce barocca e le sue piazze",
    descrizione:
      "I palazzi nobiliari, le chiese barocche e i chiostri di Lecce e Galatina creano uno scenario unico. Ogni angolo è un dettaglio architettonico che racconta secoli di storia.",
    dettagli: ["Palazzo nobiliare", "Chiostro privato", "Illuminazione notturna"],
    img: centrostorico,
  },
  {
    numero: "04",
    titolo: "Tenuta vinicola",
    sottotitolo: "Tra vigneti e Primitivo",
    descrizione:
      "Le tenute vitivinicole del Salento combinano eleganza rurale e hospitalità raffinata. Un matrimonio tra i filari con degustazione dei vini locali conquista ogni ospite.",
    dettagli: ["Degustazione inclusa", "Scenografia naturale", "Cantine visitabili"],
    img: tenuta,
  },
];

// Duplica per loop infinito: [...tipi, ...tipi, ...tipi]
const LOOP = [...tipi, ...tipi, ...tipi];
const COUNT = tipi.length;
// Partiamo dal secondo gruppo (indice COUNT) così si può scorrere in entrambe le direzioni
const INITIAL = COUNT;

export default function TipiMatrimonio() {
  const [current, setCurrent] = useState(INITIAL);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef(null);
  const startX = useRef(null);
  const autoRef = useRef(null);

  // Indice "reale" nel gruppo originale (0-3)
  const realIdx = current % COUNT;

  // Quando arriviamo agli estremi del loop, saltiamo silenziosamente al centro
  useEffect(() => {
    if (!transitioning) return;
    if (current <= 1) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrent(current + COUNT);
      }, 500);
    } else if (current >= LOOP.length - 2) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrent(current - COUNT);
      }, 500);
    }
  }, [current, transitioning]);

  // Re-abilita la transizione dopo il salto silenzioso
  useEffect(() => {
    if (!transitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitioning(true));
      });
    }
  }, [transitioning]);

  const go = (dir) => {
    setCurrent((p) => p + dir);
    setTransitioning(true);
    };

    const goTo = (idx) => {
    let diff = idx - realIdx;

    if (diff > COUNT / 2) diff -= COUNT;
    if (diff < -COUNT / 2) diff += COUNT;

    setCurrent((p) => p + diff);
    setTransitioning(true);
    };

  // Swipe
  const onPointerDown = (e) => { startX.current = e.clientX; };
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (dx < -40) go(1);
    if (dx >  40) go(-1);
    startX.current = null;
  };

  // Larghezza box: 38vw desktop, 80vw mobile, max 460px
  const GAP = 20;

  return (
    <section
      className="relative overflow-hidden py-24 bg-secondary-light"
    >
      {/* ── HEADER ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-secondary-dark"/>
          <span
            className="text-[0.58rem] uppercase tracking-[0.4em] font-light text-secondary-dark"
          >
            Le nostre proposte
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="title text-5xl"
          >
            Un matrimonio per ogni
            {/* <br /> */}
            <span className="font-calligraphy">  sogno</span>
          </h2>

          {/* Frecce */}
          <div className="hidden md:flex items-center gap-3">
            {[[-1, "‹"], [1, "›"]].map(([dir, label]) => (
              <button
                key={dir}
                onClick={() => go(dir)}
                className="w-10 h-10 border flex items-center justify-center text-lg transition-all duration-300"
                style={{
                  borderColor: "var(--color-secondary-dark)",
                  color: "var(--color-secondary-dark)",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-secondary-dark)"; e.currentTarget.style.color = "var(--color-secondary-light)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-secondary-dark)"; }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRACK ── */}
      <div
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        style={{ cursor: "grab", userSelect: "none" }}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: `${GAP}px`,
            paddingLeft: "clamp(24px, 8vw, 160px)",
            transform: `translateX(calc(-${current} * (clamp(280px, 38vw, 460px) + ${GAP}px)))`,
            transition: transitioning ? "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
          }}
        >
          {LOOP.map((tipo, idx) => {
            const isActive = idx % COUNT === realIdx;
            return (
              <div
                key={idx}
                onClick={() => goTo(idx % COUNT)}
                className="flex-shrink-0 flex flex-col"
                style={{
                  width: "clamp(280px, 38vw, 460px)",
                  maxHeight: "720px",
                  cursor: "pointer",
                  transition: "transform 0.5s, opacity 0.5s",
                  transform: isActive ? "translateY(0)" : "translateY(10px)",
                  opacity: isActive ? 1 : 0.45,
                }}
              >
                {/* Immagine */}
                <div
                  className="overflow-hidden w-full mb-0"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={tipo.img}
                    alt={tipo.titolo}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isActive ? "scale(1.03)" : "scale(1)",
                      filter: isActive ? "none" : "brightness(0.6) saturate(0.7)",
                    }}
                  />
                </div>

                {/* Testo */}
                <div
                  className="p-7"
                  style={{
                    border: isActive
                      ? "1px solid color-mix(in srgb, var(--color-secondary-dark) 50%, transparent)"
                      : "1px solid color-mix(in srgb, var(--color-secondary-dark) 15%, transparent)",
                    borderTop: "none",
                    background: isActive ? "color-mix(in srgb, var(--color-secondary-dark) 5%, transparent)" : "transparent",
                    transition: "border-color 0.4s, background 0.4s",
                  }}
                >
                  <p
                    className="subtitle text-primary-dark"
                  >
                    {tipo.numero}
                  </p>

                  <h3
                    className="title text-3xl mb-1"
                  >
                    {tipo.titolo}
                  </h3>

                  <p
                    className="subtitle text-black/40"
                  >
                    {tipo.sottotitolo}
                  </p>

                  <p
                    className="paragraph mb-4"
                    style={{ color: isActive ? "" : "" }}
                  >
                    {tipo.descrizione}
                  </p>

                  <div className="flex flex-col gap-2">
                    {tipo.dettagli.map((d, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span
                          className="w-1 h-1 flex-shrink-0 bg-secondary-dark"
                        />
                        <span
                          className="subtitle text-black/40"
                        >
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <div style={{ flexShrink: 0, width: "clamp(24px, 8vw, 160px)" }} />
        </div>
      </div>

      {/* ── INDICATORI ── */}
      <div className="flex justify-center gap-2 mt-12">
        {tipi.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              width: realIdx === idx ? "24px" : "6px",
              height: "2px",
              background: realIdx === idx
                ? "var(--color-secondary-dark)"
                : "color-mix(in srgb, var(--color-secondary-dark) 20%, transparent)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s, background 0.3s",
            }}
            aria-label={`Vai a ${tipi[idx].titolo}`}
          />
        ))}
      </div>
    </section>
  );
}