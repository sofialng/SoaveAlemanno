import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/ChiSono";

function App() {
  return (
    <Routes basename="/SoaveAlemanno">
      <Route path="/" element={<Home />} />
      <Route path="/chisono" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
