export default function ImgTxt({ picture, title, subtitle, paragraph, reverse = false }) {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* subtle background line */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-px h-full bg-black/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">

        <div
          className={`
            grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
            ${reverse ? "lg:flex-row-reverse" : ""}
          `}
        >

          {/* IMAGE */}
          <div className={`flex justify-center ${reverse ? "lg:justify-start" : "lg:justify-end"}`}>

            <div className="relative group">

              {/* decorative border */}
              <div className="absolute -inset-4 border border-black/10 transition m-4" />

              <img
                src={picture}
                alt={title}
                draggable={false} onContextMenu={(e) => e.preventDefault()}
                className="
                  relative
                  w-full
                  max-w-md
                  lg:max-w-lg
                  p-4
                  object-cover
                  shadow-md
                "
              />
            </div>

          </div>

          {/* TEXT */}
          <div className={`flex flex-col gap-5 text-center lg:text-left ${reverse ? "lg:items-end lg:text-right" : ""}`}>

            <span className="subtitle">
              {subtitle}
            </span>

            <h2 className="title text-3xl sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <div className="w-16 h-px bg-black/20 mx-auto lg:mx-0" />

            <p className="paragraph">
              {paragraph}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}