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
    {
      id: 1,
      title: "Mahesh Babu",
      artist: "Nani",
      image: "Mahesh.jpg",
    },
    {
      id: 2,
      title: "Ms Dhoni",
      artist: "Nani",
      image: "Ms Dhoni.jpg",
    },
    {
      id: 3,
      title: "Thalaiva",
      artist: "Nani",
      image: "Thailava.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* 🌅 Hero Section */}
      <section className="relative bg-linear-to-br from-pink-500 via-purple-600 to-yellow-400 text-white py-24 px-6 rounded-b-3xl shadow-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
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

        {/* Decorative Blur Circle */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-400 opacity-20 blur-3xl rounded-full"></div>
      </section>

      {/* ⭐ Featured Section */}
      <section className="max-w-6xl mx-auto py-20 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 flex items-center justify-center gap-2">
          <Star className="text-yellow-500" /> Featured Artworks
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
          {featuredArts.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </div>
      </section>

      {/* 🎨 Category Section */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Art Categories
          </h2>
          <p className="text-gray-600 mb-10">
            Explore various art forms and styles curated by talented artists.
          </p>

          <div className="flex justify-center gap-10 flex-wrap text-gray-700">
            <div className="flex flex-col items-center hover:text-indigo-600 transition transform hover:scale-105">
              <Brush size={50} className="mb-3 text-indigo-500" />
              <span className="text-lg font-medium">Paintings</span>
            </div>

            <div className="flex flex-col items-center hover:text-indigo-600 transition transform hover:scale-105">
              <Image size={50} className="mb-3 text-indigo-500" />
              <span className="text-lg font-medium">Photography</span>
            </div>

            <div className="flex flex-col items-center hover:text-indigo-600 transition transform hover:scale-105">
              <Palette size={50} className="mb-3 text-indigo-500" />
              <span className="text-lg font-medium">Digital Art</span>
            </div>
          </div>
        </div>
      </section>
        <section className="bg-white  border-gray-200"><UploadPage/></section>
        <section className="bg-white  border-gray-200"><ArtDetailPage/></section>
        <section className="bg-white  border-gray-200"><TicketPage/></section>
        <section className="bg-white  border-gray-200"><PaymentPage/></section>
        <section className="bg-white  border-gray-200"><ArtistDashboard/></section>
        <section className="bg-white  border-gray-200"><AdminDashboard/></section>
        <section><GalleryPage/></section>


      
      
      

    </div>
  );
}
