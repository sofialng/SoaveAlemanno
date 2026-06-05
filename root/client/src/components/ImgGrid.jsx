import vaso from "../img/vaso.jpg"
import daniela from "../img/daniela-full.jpg"

const images = [
    {
        src: daniela,
        alt: "Daniela"
    },
    {
        src: vaso,
        alt: "Vaso"
    },
    {
        src: daniela,
        alt: "Daniela"
    },
    {
        src: vaso,
        alt: "Vaso"
    },
]

function ImgGrid() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 px-4 sm:px-8 lg:px-16">
      {images.map((image, index) => (
        <div className="mb-4 break-inside-avoid">
            <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-lg"
            />
        </div>
      ))}
    </div>
  );
}

export default ImgGrid;
