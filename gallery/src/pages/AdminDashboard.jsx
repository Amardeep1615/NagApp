import React from "react";
import { useArt } from "../context/artContextUtils";
import { Users, Star, Download, Image } from "lucide-react";

export default function AdminDashboard() {
  const { artworks = [] } = useArt();

  return (
    <div className="max-w-6xl mx-auto mt-20 p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center gap-2"><Image /> Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 text-blue-800 p-6 rounded-2xl flex flex-col items-center gap-2 shadow">
          <Image size={30} />
          <p className="font-semibold text-lg">Total Artworks</p>
          <p className="text-2xl font-bold">{artworks.length}</p>
        </div>

        <div className="bg-green-100 text-green-800 p-6 rounded-2xl flex flex-col items-center gap-2 shadow">
          <Users size={30} />
          <p className="font-semibold text-lg">Active Artists</p>
          <p className="text-2xl font-bold">{new Set(artworks.map(a => a.artist)).size}</p>
        </div>

        <div className="bg-yellow-100 text-yellow-800 p-6 rounded-2xl flex flex-col items-center gap-2 shadow">
          <Download size={30} />
          <p className="font-semibold text-lg">Total Downloads</p>
          <p className="text-2xl font-bold">{artworks.reduce((acc, a) => acc + (a.downloads || 0), 0)}</p>
        </div>

        <div className="bg-pink-100 text-pink-800 p-6 rounded-2xl flex flex-col items-center gap-2 shadow">
          <Star size={30} />
          <p className="font-semibold text-lg">Average Rating</p>
          <p className="text-2xl font-bold">
            {artworks.length > 0 ? (artworks.reduce((acc, a) => acc + (a.ratings || 0), 0) / artworks.length).toFixed(1) : "0.0"}
          </p>
        </div>
      </div>

      {/* All Artworks */}
      <h2 className="text-xl font-semibold mb-4 text-gray-700">All Uploaded Artworks</h2>
      {artworks.length === 0 ? (
        <p className="text-gray-500">No artworks uploaded yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworks.map((art) => (
            <div key={art.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition">
              <img src={art.image} alt={art.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{art.title}</h3>
                <p className="text-gray-500 text-sm">Artist: {art.artist}</p>
                <p className="text-gray-700 font-medium">💰 ₹{art.price}</p>
                <p className="text-yellow-500 text-sm">⭐ {art.ratings}/5</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
