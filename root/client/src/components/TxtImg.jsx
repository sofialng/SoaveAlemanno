export default function TxtImg({ picture, title, subtitle, paragraph }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 w-full  mb-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="flex flex-col gap-6 text-center lg:text-left">

            <div className="w-16 h-px bg-black/20 mx-auto lg:mx-0" />

            <h1 className="title max-text-3xl">
              {title}
            </h1>

            {subtitle &&  (
              <h3 className="subtitle">
                {subtitle}
              </h3>
            )}

            <p className="paragraph text-justify">
              {paragraph}
            </p>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* decorative frame */}
              <div className="absolute -inset-4 border border-black/10 rounded-2xl" />

              <img
                src={picture}
                alt="Foto"
                className="
                  relative
                  w-full
                  max-w-md
                  lg:max-w-lg
                  rounded-2xl
                  object-cover
                  shadow-lg
                "
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}