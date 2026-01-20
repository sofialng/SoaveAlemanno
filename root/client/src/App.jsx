import { useEffect, useState } from "react";
import { getHealth } from "./api/api";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    getHealth().then(d => setStatus(d.status));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Backend status</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;
