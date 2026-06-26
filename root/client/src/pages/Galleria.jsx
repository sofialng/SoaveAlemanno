import ImgGrid from "../components/ImgGrid";

import {
  galleries,
} from "../assets/content/content";

function Gallery() {  
  return (
    <>
      <main>
        <ImgGrid 
          galleries={galleries}/>
      </main>
    </>
  );
}

export default Gallery;
