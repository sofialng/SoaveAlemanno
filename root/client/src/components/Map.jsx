import { useEffect, useRef } from "react";

function LeafletMap() {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (instanceRef.current) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => {
      const L = window.L;

      // Bounds che racchiudono il Salento
      const salentoSW = L.latLng(39.78, 17.80);
      const salentoNE = L.latLng(40.65, 18.60);
      const salentoBounds = L.latLngBounds(salentoSW, salentoNE);

      const map = L.map(mapRef.current, {
        center:            [40.18, 18.17],
        zoom:              9,
        minZoom:           9,          // non può rimpicciolire oltre il livello iniziale
        maxZoom:           16,         // può ingrandire fino al livello strada
        maxBounds:         salentoBounds,
        maxBoundsViscosity: 1.0,       // blocco rigido — non rimbalza oltre i bounds
        zoomControl:       false,
        scrollWheelZoom:   true,
        attributionControl: false,
      });

      // Tile CartoDB Positron — quasi bianca, coerente col sito
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        { maxZoom: 19 }
      ).addTo(map);

      // Zoom control riposizionato in alto a destra
      L.control.zoom({ position: "topright" }).addTo(map);

      instanceRef.current = map;
    };
    document.head.appendChild(script);

    return () => {
      instanceRef.current?.remove();
      instanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", aspectRatio: "4/5" }}
    />
  );
}

function SalentoSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-secondary-light"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">

          {/* Mappa */}
          <div className="flex justify-center order-1">
            <div className="relative w-full max-w-md overflow-hidden">
              <LeafletMap className="w-full"/>
            </div>
          </div>

          {/* Testo */}
          <div className="flex flex-col gap-6 text-center lg:text-left order-2">

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-8 h-px bg-secondary-dark"/>
              <span
                className="text-[0.58rem] uppercase tracking-[0.4em] font-light text-secondary-dark"
              >
                Il nostro territorio
              </span>
            </div>

            <h2
              className="title"
            >
              Salento: dove il mare incontra
              <br />
              <span className="font-calligraphy">l'amore</span>
            </h2>

            <div
              className="w-10 h-px mx-auto lg:mx-0 bg-secondary-dark"
            />

            <p
              className="paragraph"
            >
              Il Salento è una terra di luce, di pietra leccese e di orizzonti infiniti.
              Tra masserie storiche, ville sul mare e giardini mediterranei, ogni venue
              racconta una storia unica: la vostra.
            </p>

            <p
              className="paragraph"
            >
              Organizziamo matrimoni ed eventi in tutta la penisola salentina: da Lecce
              a Otranto, da Gallipoli alle campagne di Nardò, portando eleganza e cura
              in ogni angolo di questa terra straordinaria.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
              {["Lecce", "Otranto", "Gallipoli", "Nardò", "Galatina", "Maglie"].map((loc) => (
                <span
                  key={loc}
                  className="text-[0.6rem] uppercase tracking-[0.25em] font-light px-3 py-1.5 border"
                  style={{
                    borderColor: "var(--color-secondary-dark)",
                    color: "var(--color-secondary-dark)",
                    opacity: 0.85,
                  }}
                >
                  {loc}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SalentoSection;