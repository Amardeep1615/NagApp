import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const { user, login, logout } = useState();

  return (
    <nav className="bg-white shadow px-6 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-500 to-yellow-400 flex items-center justify-center text-white font-bold">
          NAG
        </div>
        <div>
          <div className="text-lg font-semibold">Nani's Art Gallery</div>
          <div className="text-xs text-gray-500">Presented by TMK</div>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/gallery" className="text-sm hover:text-indigo-600">
          Gallery
        </Link>
        <Link to="/upload" className="text-sm hover:text-indigo-600">
          Upload
        </Link>
        <Link to="/about" className="text-sm hover:text-indigo-600">
          About
        </Link>
        <Link to="/contact" className="text-sm hover:text-indigo-600">
          Contact
        </Link>

        {user ? (
          <div className="flex items-center gap-2">
            <div className="text-sm">{user.name}</div>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="px-3 py-1 bg-indigo-600 text-white rounded"
            onClick={() =>
              login({ id: "demo-artist", name: "Nani", role: "artist" })
            }
          >
            Demo Login
          </button>
        )}
      </div>
    </nav>
  );
}
