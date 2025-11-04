import React, { useState } from "react";
import ArtCard from "../components/ArtCard";

export default function GalleryPage() {
 
  const [q, setQ] = useState("");

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title or tag" className="p-2 border rounded" />
      </div>
     
    </div>
  );
}
