import { useRef } from "react";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen"

function Home() {  
  const homeRef = useRef(null);
  return (
    <>
      <Navigator homeRef={homeRef} />
      <HomeScreen homeRef={homeRef} />

      <main>
        <h1 className="font-quetine h-500 text-3xl font-bold underline bg-primary-light">Content</h1>
      </main>

      <Footer />
    </>
  );
}

export default Home;
