import "./infiniteImageRow.css";

export default function InfiniteImageRow({
  images,
  direction = "left",
  speed = 100,
}) {
  // Duplichiamo il contenuto per ottenere un loop continuo
  const loop = [...images, ...images];

  return (
    <div className="relative overflow-hidden h-full w-full">

      {/* Fade sinistra */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-20 pointer-events-none bg-gradient-to-r from-secondary-light to-transparent" />

      {/* Fade destra */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-20 pointer-events-none bg-gradient-to-l from-secondary-light to-transparent" />

      <div
        className={`marquee-track ${
          direction === "left"
            ? "marquee-left"
            : "marquee-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {loop.map((img, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              h-full
              w-[320px]
              md:w-[420px]
              overflow-hidden
            "
          >
            <img
              src={img}
              alt=""
              draggable={false} onContextMenu={(e) => e.preventDefault()}
              className="
                h-full
                w-full
                object-cover
                select-none
                pointer-events-none
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}