import InfiniteImageRow from "./InfiniteImageRow";

export default function Carousel({ tipi }) {

  return (
    <section className="
      relative
      py-32
      bg-secondary-light
      overflow-hidden
    ">

      {/* HEADER */}
      <div className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-20
        mb-20
      ">
        <div className="
          flex
          items-center
          gap-3
          mb-6
        ">
          <span className="
            subtitle
          ">
            Le nostre proposte
          </span>
        </div>

        <h2 className="
          title
        ">
          Un matrimonio per ogni
          <span className="
            font-calligraphy
          ">
            {" "} sogno
          </span>
        </h2>
      </div>

      {/* LISTA */}
      <div className="space-y-16">
        {tipi.map((tipo,index)=>{
          const textRight = index % 2 !== 0;
          return (
            <article
              key={index}
              className="
                relative
                h-[26rem]
                md:h-[30rem]
                overflow-hidden
              "
            >
              {/* IMMAGINI */}
              <InfiniteImageRow
                images={tipo.images}
                direction={tipo.direction}
                speed={tipo.speed}
              />

              {/* TESTO */}
              <div
                className={`
                  absolute
                  inset-0
                  flex
                  items-center
                  px-6
                  md:px-20
                  ${
                    textRight
                    ? "justify-end"
                    : "justify-start"
                  }
                `}
              >
                <div
                    className="
                        max-w-md
                        w-[90%]
                        p-8
                        md:p-10
                        max-h-[90%]
                        overflow-auto
                        bg-secondary-light
                        backdrop-blur-xl
                        shadow-xl
                    "
                    >

                  {/* NUMERO */}
                  <span className="
                    block
                    text-[0.65rem]
                    tracking-[0.5em]
                    uppercase
                    text-secondary-dark
                    mb-4
                  ">
                    0{index + 1}
                  </span>

                  {/* TITOLO */}
                  <h3 className="
                    title
                    text-4xl
                    mb-5
                  ">
                    {tipo.titolo}
                  </h3>

                  {/* DESCRIZIONE */}
                  <p className="
                    paragraph
                    text-left
                    mb-6
                  ">
                    {tipo.descrizione}
                  </p>

                  {/* DETTAGLI */}
                  <div className="
                    flex
                    flex-wrap
                    gap-x-5
                    gap-y-2
                  ">

                    {tipo.dettagli.map((d,i)=>(
                      <div
                        key={i}
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span className="
                          w-1
                          h-1
                          rounded-full
                          bg-secondary-dark
                        "/>
                        <span className="
                          subtitle
                        ">
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}