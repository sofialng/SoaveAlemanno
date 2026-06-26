export default function Intro({
  eyebrow = "SOAVE ALEMANNO - WEDDING & EVENT PLANNER",
  title,
  text,
}) {
  return (
    <section className="py-24 px-6 bg-secondary-light">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorazione */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-px bg-secondary-dark/30" />
          <span className="text-secondary-dark text-lg">✦</span>
          <span className="w-12 h-px bg-secondary-dark/30" />
        </div>

        {/* Eyebrow */}
        <p className="uppercase tracking-[0.35em] text-xs text-secondary-dark/60 mb-6">
          {eyebrow}
        </p>

        {/* Titolo */}
        <h2 className="title">
          {title}
        </h2>

        {/* Testo */}
        <p className="paragraph mt-8">
          {text}
        </p>
      </div>
    </section>
  );
}