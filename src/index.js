import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MediumProvider } from "./context/MediumContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediumProvider>
      <App />
    </MediumProvider>
  </React.StrictMode>
);
