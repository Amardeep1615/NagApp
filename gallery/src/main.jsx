import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { ArtProvider } from "./context/ArtContext";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <ArtProvider>
        <App/>
    </ArtProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
