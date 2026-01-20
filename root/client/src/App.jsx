import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prova" element={<h1>prova</h1>} />
    </Routes>
  );
}

export default App;
