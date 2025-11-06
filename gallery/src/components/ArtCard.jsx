import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export default function ArtCard({ art }) {
  if (!art) return null; // ✅ Prevent crash if art is undefined

  return (
    <div className="bg-white rounded-lg shadow p-3 hover:shadow-lg transition-all">
      <Link to={`/art/${art.id}`}>
        <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded">
          {art.image ? (
            <img
              src={art.image}
              alt={art.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-gray-400">No image</div>
          )}
        </div>
      </Link>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <div className="font-semibold">{art.title}</div>
          <div className="text-xs text-gray-500">{art.artist}</div>
        </div>
        <div className="text-sm font-medium">₹{art.price}</div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <RatingStars ratings={art.ratings} />
        <div className="text-xs text-gray-500">{art.downloads} downloads</div>
      </div>
    </div>
  );
}
