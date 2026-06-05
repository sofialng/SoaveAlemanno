import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/ChiSono";
import Gallery from "./pages/Galleria";
import Prenota from "./pages/Prenota";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="relative z-50">
      <Navbar />
      
      <Routes basename="/SoaveAlemanno">
        <Route path="/" element={<Home />} />
        <Route path="/chisono" element={<About />} />
        <Route path="/galleria" element={<Gallery />} />
        <Route path="/prenota" element={<Prenota />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <ScrollToTopButton />

      <Footer />
    </div>
    </>
  );
}

export default App;
