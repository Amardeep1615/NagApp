import React from "react";
import { Star } from "lucide-react";

export default function RatingStars({ ratings = 4 }) {
  return (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < ratings ? "fill-yellow-400" : "fill-gray-300"}`}
        />
      ))}
    </div>
  );
}
