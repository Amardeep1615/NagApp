import React from "react";
import { useArt } from "../context/artContextUtils";
import { Star } from "lucide-react";

export default function ArtistDashboard() {
  const { artworks } = useArt();
  const artistArts = artworks.filter((a) => a.artist === "Nani");

  return (
    <div className="max-w-6xl mx-auto mt-16 px-5">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">🎨 Nani’s Dashboard</h1>

      {artistArts.length === 0 ? (
        <p className="text-gray-500 text-center">No artworks uploaded yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artistArts.map((art) => (
            <div key={art.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transform transition">
              <img src={art.image} alt={art.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg text-indigo-600">{art.title}</h2>
                <p className="text-gray-500">💰 ₹{art.price}</p>
                <p className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} /> {art.ratings}/5
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
