import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/ChiSono";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chisono" element={<About />} />
    </Routes>
  );
}

export default App;
