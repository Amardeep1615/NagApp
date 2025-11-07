import React from "react";
import { Link } from "react-router-dom";
import { Brush, Image, Star, Palette } from "lucide-react";
import ArtCard from "../components/ArtCard";
import UploadPage from "./UploadPage";
import ArtDetailPage from "./ArtDetailPage";
import TicketPage from "./TicketPage";
import PaymentPage from "./PaymentPage";
import ArtistDashboard from "./ArtistDash";
import AdminDashboard from "./AdminDashboard";
import GalleryPage from "./GalleryPage";

export default function HomePage() {
  const featuredArts = [
    { id: 1, title: "Mahesh Babu", artist: "Nani", image: "Mahesh.jpg" },
    { id: 2, title: "Ms Dhoni", artist: "Nani", image: "Ms Dhoni.jpg" },
    { id: 3, title: "Thalaiva", artist: "Nani", image: "Thailava.jpg" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-pink-500 via-purple-600 to-yellow-400 text-white py-20 px-4 md:px-0 rounded-b-3xl shadow-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Welcome to Nani’s Art Gallery
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Discover creativity that speaks — every brush stroke tells a story 🎨
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-200"
            >
              Explore Gallery
            </Link>
            <Link
              to="/upload"
              className="px-8 py-3 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-purple-700 transition duration-200"
            >
              Upload Artwork
            </Link>
          </div>
        </div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-400 opacity-20 blur-3xl rounded-full"></div>
      </section>

      {/* Featured Artworks */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 flex items-center justify-center gap-2">
          <Star className="text-yellow-500" /> Featured Artworks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArts.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </div>
      </section>

      {/* Art Categories */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Art Categories
          </h2>
          <p className="text-gray-600 mb-10">
            Explore various art forms and styles curated by talented artists.
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-gray-700">
            <div className="flex flex-col items-center hover:text-indigo-600 transition transform hover:scale-105">
              <Brush size={48} className="mb-3 text-indigo-500" />
              <span className="text-lg font-medium">Paintings</span>
            </div>
            <div className="flex flex-col items-center hover:text-indigo-600 transition transform hover:scale-105">
              <Image size={48} className="mb-3 text-indigo-500" />
              <span className="text-lg font-medium">Photography</span>
            </div>
            <div className="flex flex-col items-center hover:text-indigo-600 transition transform hover:scale-105">
              <Palette size={48} className="mb-3 text-indigo-500" />
              <span className="text-lg font-medium">Digital Art</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Gallery Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <GalleryPage />
        </div>
      </section>
      
      {/* Upload Artwork Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <UploadPage />
        </div>
      </section>
      
      {/* Artwork Details Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <ArtDetailPage />
        </div>
      </section>
      
      {/* Ticketing Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <TicketPage />
        </div>
      </section>
      
      {/* Payment Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <PaymentPage />
        </div>
      </section>
      
      {/* Artist Dashboard */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <ArtistDashboard />
        </div>
      </section>
      
      {/* Admin Dashboard */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <AdminDashboard />
        </div>
      </section>
    </div>
  );
}
