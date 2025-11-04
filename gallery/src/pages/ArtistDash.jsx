import React from "react";
import { useArts } from "../context/ArtContext";

export default function ArtistDashboard() {
  const { arts, deleteArt } = useArts();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Artist Dashboard (Demo)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {arts.map((a) => (
          <div key={a.id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{a.title}</div>
                <div className="text-xs text-gray-500">{a.artist}</div>
              </div>
              <div>
                <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => deleteArt(a.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
