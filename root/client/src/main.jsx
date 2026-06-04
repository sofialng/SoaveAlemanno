import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import ScrollToTop from "./components/ScrollToTop";

console.log("loaded");

//TODO: substiture HashRouter with BrowserRouter when deploying on a server that supports it, to get rid of the # in the URL

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
