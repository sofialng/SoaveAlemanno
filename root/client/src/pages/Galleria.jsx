import ImgGrid from "../components/ImgGrid";

function Gallery() {  
  return (
    <>
      <main>
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-40">
          <h1 className="text-4xl font-bold text-center mb-8">Galleria</h1>
          <p className="text-center text-lg mb-12">Esplora la nostra galleria per scoprire l'arte e la creatività che mettiamo in ogni allestimento. Ogni immagine racconta una storia unica, un momento speciale e un'emozione indimenticabile. Lasciati ispirare dalle nostre realizzazioni e immagina come possiamo trasformare il tuo evento in un'esperienza straordinaria.</p>
          <ImgGrid />
        </div>
      </main>
    </>
  );
}

export default Gallery;
