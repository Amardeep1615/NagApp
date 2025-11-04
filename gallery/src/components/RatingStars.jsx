import React from "react";

export default function RatingStars({ ratings = [] }) {
  const avg = ratings.length ? (ratings.reduce((s, r) => s + r.stars, 0) / ratings.length).toFixed(1) : "—";
  return (
    <div className="flex items-center gap-2">
      <div className="text-yellow-500">{avg === "—" ? "—" : "★"} </div>
      <div className="text-sm text-gray-600">{avg}</div>
    </div>
  );
}
