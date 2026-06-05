import ContactForm from "../components/ContactForm";


function Prenota() {  
  return (
    <>
      <main>
        <div className="flex flex-col w-full px-4 sm:px-8 lg:px-16 pt-40 text-center bg-secondary-light">

            <p className="text-xs uppercase tracking-[0.35em] text-black/50">
              contatti
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-black mt-3">
              Raccontaci il tuo matrimonio
            </h2>

            <p className="mt-5 text-black/70 leading-relaxed text-sm md:text-base">
              Ogni evento nasce da una storia. Compila il form e ti aiuteremo a trasformare la tua idea
              in un’esperienza elegante, curata e totalmente personalizzata.
            </p>

          </div>
        <ContactForm />
      </main>
    </>
  );
}

export default Prenota;
