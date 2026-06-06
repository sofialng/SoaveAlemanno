export default function PageIntro({ header, title, text }) {
  return (
    <>
        <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-black/40 font-light">
                {header}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl mt-4 font-light tracking-wide text-[#1a1a1a]">
                {title}
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-black/60 font-light leading-relaxed">
                {text}
            </p>
        </div>
    </>
  );
}