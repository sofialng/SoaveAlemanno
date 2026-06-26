import { useState, useEffect, useRef } from "react";
import PageIntro from "./PageIntro";

function ImgGrid({ galleries }) {
  const allImages = galleries.flatMap((s) => s.images);
  const [activeSection, setActiveSection] = useState(0);
  const [selected, setSelected] = useState(null);
  const sectionRefs = useRef([]);

  // Indice globale
  function globalIndexFor(sIdx, iIdx) {
    let offset = 0;
    for (let i = 0; i < sIdx; i++) offset += galleries[i].images.length;
    return offset + iIdx;
  }

  // Label sezione per lightbox
  function sectionLabelFor(gIdx) {
    let offset = 0;
    for (const s of galleries) {
      if (gIdx < offset + s.images.length) return s.title;
      offset += s.images.length;
    }
    return "";
  }

  // Scroll spy: aggiorna il tab attivo mentre si scrolla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Navigazione lightbox da tastiera
  useEffect(() => {
    const handleKey = (e) => {
      if (selected === null) return;
      if (e.key === "ArrowRight") setSelected((p) => (p + 1) % allImages.length);
      if (e.key === "ArrowLeft") setSelected((p) => (p === 0 ? allImages.length - 1 : p - 1));
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  const scrollToSection = (idx) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="bg-secondary-light py-30">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-12 overflow-hidden">

          <PageIntro
            header="Galleria"
            title="I nostri eventi"
            text="Una selezione di momenti, dettagli e atmosfere che raccontano
              il nostro modo di progettare matrimoni ed eventi."
            />

          {/* ── TAB NAV ── */}
          <div className="flex justify-center mb-20 w-full">
            <div
              className="
                flex
                flex-col
                items-center
                w-full
                md:border-b md:border-[#e0dbd3]
                md:flex-row
                md:w-auto
              "
            >
              {galleries.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(idx)}
                  className="
                    relative
                    w-full
                    md:w-auto
                    px-4
                    md:px-8
                    py-3
                    text-[0.65rem]
                    uppercase
                    tracking-[0.25em]
                    font-light
                    transition-colors
                    duration-300
                    whitespace-nowrap
                  "
                  style={{
                    color: activeSection === idx ? "#1a1a1a" : "#9a9085",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>{s.title}</span>

                  <span
                    className="absolute bottom-0 left-0 w-full h-px"
                    style={{
                      background:
                        activeSection === idx ? "#b89b6e" : "transparent",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── SEZIONI ── */}
          {galleries.map((section, sIdx) => (
            <div
              key={sIdx}
              ref={(el) => (sectionRefs.current[sIdx] = el)}
              className="mb-28 scroll-mt-8"
            >
              {/* Header sezione */}
              <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#b89b6e] font-light">
                    {String(sIdx + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl mt-2 font-light tracking-wide text-[#1a1a1a]">
                    {section.title}
                  </h2>
                </div>
                <p className="text-black/50 max-w-md font-light text-sm leading-relaxed">
                  {section.subtitle}
                </p>
              </div>

              {/* Separatore */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-[#e0dbd3]" />
                <span className="text-[#b89b6e] text-xs tracking-[0.4em]">✦</span>
                <div className="flex-1 h-px bg-[#e0dbd3]" />
              </div>

              {/* Grid immagini */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
                {section.images.map((image, iIdx) => {
                  const gIdx = globalIndexFor(sIdx, iIdx);
                  return (
                    <div
                      key={iIdx}
                      className="mb-5 break-inside-avoid cursor-pointer group"
                      onClick={() => setSelected(gIdx)}
                    >
                      {/* Immagine */}
                      <div className="overflow-hidden rounded-xl relative">
                        <div className="absolute inset-0 bg-[#1a1409]/0 group-hover:bg-[#1a1409]/10 transition-colors duration-500 z-10 rounded-xl" />
                        <img
                          src={image.src}
                          alt={image.alt}
                          onContextMenu={(e) => e.preventDefault()}
                          draggable={false}
                          className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>

                      {/* Caption sotto la foto */}
                      <div className="mt-3 flex items-center justify-between px-1">
                        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#9a9085] font-light">
                          {image.caption}
                        </p>
                        <span className="text-[#c8b898] text-xs">→</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-6"
          style={{ background: "rgba(10,9,8,0.96)" }}
          onClick={() => setSelected(null)}
        >
          {/* Chiudi */}
          <button
            className="absolute top-6 right-8 text-white/50 hover:text-white/90 text-5xl leading-none transition-opacity duration-200"
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setSelected(null)}
            aria-label="Chiudi"
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 text-6xl transition-all duration-200 hover:scale-110"
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={(e) => { e.stopPropagation(); setSelected((p) => (p === 0 ? allImages.length - 1 : p - 1)); }}
            aria-label="Precedente"
          >
            ‹
          </button>

          {/* Immagine */}
          <div
            className="flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[selected].src}
              alt={allImages[selected].alt}
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              className="max-w-[88vw] max-h-[78vh] object-contain rounded-xl"
            />
            {/* Caption nel lightbox */}
            <div className="text-center">
              <p
                className="text-xs uppercase tracking-[0.3em] font-light"
                style={{ color: "#b89b6e" }}
              >
                {sectionLabelFor(selected)}
              </p>
              <p className="text-white/60 text-sm tracking-wider mt-1 font-light">
                {allImages[selected].alt}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 text-6xl transition-all duration-200 hover:scale-110"
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={(e) => { e.stopPropagation(); setSelected((p) => (p + 1) % allImages.length); }}
            aria-label="Successiva"
          >
            ›
          </button>

          {/* Contatore */}
          <div
            className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[0.62rem] tracking-[0.4em] uppercase font-light"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {selected + 1} &nbsp;/&nbsp; {allImages.length}
          </div>
        </div>
      )}
    </>
  );
}

export default ImgGrid;