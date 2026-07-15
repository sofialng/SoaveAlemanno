export default function PhotoCredit({ credit, link = "#" }) {
  return (
    <div className="absolute bottom-2 right-8 text-right">
        <a href={link}>
            {/* <div className="text-sm font-serif italic text-secondary-light/90">
            {credit}
            </div> */}

            <div className="subtitle text-secondary-light/30 text-[0.5rem] tracking-[0.2em] uppercase">
            Foto di {credit}
            </div>
        </a>
    </div>
  );
}