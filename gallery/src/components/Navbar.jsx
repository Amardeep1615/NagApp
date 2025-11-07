import React from "react";
import { Link } from "react-router-dom";
import { Search, Image, Palette } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md px-6 md:px-12 py-3 flex items-center justify-between sticky top-0 z-50 transition-all duration-300">
      {/* ✅ Logo Section */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-500 to-yellow-400 flex items-center justify-center text-white font-bold group-hover:scale-110 transition">
          NAG
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
            Nani’s Art Gallery
          </div>
          <div className="text-xs text-gray-500">Presented by TMK</div>
        </div>
      </Link>

      {/* ✅ Center Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link to="/gallery" className="hover:text-indigo-600 transition">Gallery</Link>
        <Link to="/upload" className="hover:text-indigo-600 transition">Upload</Link>
        <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
        <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
      </div>

      {/* ✅ Right Side - Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-40 md:w-64 focus-within:ring-2 ring-indigo-400 transition">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 text-sm w-full"
        />
      </div>
    </nav>
  );
}
