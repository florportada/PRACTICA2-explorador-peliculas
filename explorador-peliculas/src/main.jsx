import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from './context/MovieContext'
import App from "./App";
import "./index.css";

// obtenemos el html de cada archivo, así como la funcionalidades de cada uno
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieProvider>
  </React.StrictMode>
);
