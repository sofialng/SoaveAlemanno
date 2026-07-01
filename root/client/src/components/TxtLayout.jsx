import QuoteBlock from "./QuoteBlock";
import { NavLink } from "react-router-dom";

export default function TxtLayout({ title, subtitle, paragraph, cards, quote_block, title_2, paragraph_2}) {

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <p className="subtitle">
            {subtitle}
          </p>

          <h2 className="title text-3xl">
            {title}
          </h2>

          <div className="w-20 h-px bg-primary mb-8" />

          <p className="paragraph mb-8 text-left">
            {paragraph}
          </p>
        </div>

        <div className="lg:col-span-8 space-y-8">

          {cards.map((card) => (
            <div
              key={card.number}
              className="group bg-white p-10 border border-secondary-dark/20 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="flex items-start gap-8">

                <div className="text-4xl font-calligraphy text-secondary-dark/30 group-hover:text-secondary-dark transition">
                  {card.number}
                </div>

                <div>
                  <h3 className="title text-3xl mb-4 mt-0">
                    {card.title}
                  </h3>

                  <p className="paragraph text-left">
                    {card.text}
                  </p>
                </div>

              </div>
            </div>
          ))}

          <div className="text-center">

            <QuoteBlock 
            quote={quote_block.quote}
            author={quote_block.author}
            subtitle={quote_block.subtitle}
            />

            <h3 className="title text-3xl mb-6">
              {title_2}
            </h3>

            <p className="paragraph mb-16 text-left">
              {paragraph_2}
            </p>

            <NavLink
                to="/prenota"
                className="
                  px-6 sm:px-10
                  py-3.5
                  my-3
                  text-[0.55rem] sm:text-[0.65rem]
                  uppercase
                  tracking-[0.25em] sm:tracking-[0.3em]
                  font-light
                  border
                  transition-all
                  duration-300
                  whitespace-nowrap
                  "
                style={{
                  borderColor: "var(--color-secondary-dark)",
                  color: "var(--color-secondary-dark)",
                  background: "transparent",
                  }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-secondary-dark)";
                  e.currentTarget.style.color = "var(--color-secondary-light)";
                  }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--color-secondary-dark)";
                  }}
            >
                Prenota una consulenza gratuita
            </NavLink>

          </div>

        </div>

      </div>
    </section>
  );
}