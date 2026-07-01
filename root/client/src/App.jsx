import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/ChiSono";
import Gallery from "./pages/Galleria";
import Prenota from "./pages/Prenota";
import Privacy from "./pages/Privacy";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      
      <Routes basename="/SoaveAlemanno">
        <Route path="/" element={<Home />} />
        <Route path="/chisono" element={<About />} />
        <Route path="/galleria" element={<Gallery />} />
        <Route path="/prenota" element={<Prenota />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ScrollToTopButton />

      <CookieBanner />

      <Footer />
    </div>
    </>
  );
}

export default App;
