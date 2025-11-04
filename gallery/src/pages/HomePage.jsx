import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  
  
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="bg-linear-to-r from-purple-400 via-pink-300 to-yellow-300 rounded-lg p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-2">Nani's Art Gallery</h1>
        <p className="mb-4">Where every color tells a story — Presented by TMK</p>
        <div className="flex gap-3">
          <Link to="/gallery" className="px-4 py-2 bg-white text-purple-600 rounded">Explore Gallery</Link>
          <Link to="/upload" className="px-4 py-2 border border-white rounded">Upload Art</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured</h2>
       
      </section>
    </div>
  );
}
