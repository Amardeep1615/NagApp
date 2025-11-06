import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import UploadPage from "./pages/UploadPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 bg-linear-to-b from-pink-50 via-white to-blue-50">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/upload" element={<UploadPage/>} />
          
          
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}
