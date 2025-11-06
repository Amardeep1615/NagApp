import React from "react";
import { Link } from "react-router-dom";
import { Search, User, LogOut, LogIn } from "lucide-react";
import { useAuth } from "../context/authContextUtils";

export default function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-500 to-yellow-400 flex items-center justify-center text-white font-bold">
          NAG
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-800">Nani’s Art Gallery</div>
          <div className="text-xs text-gray-500">Presented by TMK</div>
        </div>
      </Link>

      {/* Search Box */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-1 w-80">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search artworks, artists..."
          className="bg-transparent outline-none ml-2 text-sm w-full"
        />
      </div>

      {/* Navigation + Auth */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/gallery" className="hover:text-indigo-600">Gallery</Link>
        <Link to="/upload" className="hover:text-indigo-600">Upload</Link>
        <Link to="/about" className="hover:text-indigo-600">About</Link>
        <Link to="/contact" className="hover:text-indigo-600">Contact</Link>

        {user ? (
          <div className="flex items-center gap-3">
            <Link
              to=""
              className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-100"
            >
              <User size={18} /> <span>{user.name}</span>
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => login({ id: "demo", name: "Nani" })}
              className="flex items-center gap-1 px-4 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
            >
              <LogIn size={16} /> Sign In
            </button>
            <Link
              to="/signup"
              className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
