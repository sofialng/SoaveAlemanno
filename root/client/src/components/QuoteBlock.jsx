function QuoteBlock({ quote, author, subtitle }) {
  return (
    <section className="relative py-28 bg-secondary-light overflow-hidden">

      {/* subtle background line */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-px h-full bg-black/5" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* decorative quote mark */}
        <div className="text-6xl text-black/10 font-serif mb-6">
          “
        </div>

        {/* quote */}
        <p className="font-serif text-2xl md:text-3xl leading-relaxed text-black">
          {quote}
        </p>

        {/* divider */}
        <div className="w-16 h-px bg-black/20 mx-auto my-8" />

        {/* author */}
        {author && (
          <p className="text-sm uppercase tracking-[0.3em] text-black/60">
            {author}
          </p>
        )}

        {/* optional subtitle */}
        {subtitle && (
          <p className="text-xs text-black/40 mt-2">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}

export default QuoteBlock;