import ImgGrid from "../components/ImgGrid";

import {
  galleries,
} from "../assets/content/content";

function Gallery() {  
  return (
    <>
      <main className="w-full overflow-x-hidden">
        <ImgGrid 
          galleries={galleries}/>
      </main>
    </>
  );
}

export default Gallery;
