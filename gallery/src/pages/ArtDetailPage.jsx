import React from "react";
import { useParams } from "react-router-dom";
import DownloadButton from "../components/DownloadButton";
import RatingStars from "../components/RatingStars";
import { useArt } from "../context/artContextUtils";
import { Heart } from "lucide-react";

export default function ArtDetailPage() {
  const { id } = useParams();
  const { artworks } = useArt();
  const art = artworks.find((a) => a.id === Number(id));

  if (!art) return <div className="text-center mt-20 text-gray-500">Artwork not found.</div>;

  return (
    <div className="max-w-5xl mx-auto mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img src={art.image} alt={art.title} className="w-full h-96 object-cover" />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-100 transition">
          <Heart size={24} className="text-red-500" />
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800">{art.title}</h2>
        <p className="text-gray-500 mt-2">By {art.artist}</p>
        <RatingStars ratings={art.ratings} />
        <p className="text-gray-700 mt-4">{art.description || "No description available."}</p>
        <div className="mt-6">
          <DownloadButton art={art} />
        </div>
      </div>
    </div>
  );
}
