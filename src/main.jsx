import React from "react";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
