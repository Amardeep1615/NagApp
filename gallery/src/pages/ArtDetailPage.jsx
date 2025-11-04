import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useArts } from "../context/ArtContext";
import downloadArtAsPDF from "../components/PDFDownloader";
import { saveAs } from "file-saver";

export default function ArtDetailPage() {
  const { id } = useParams();
  const { arts, updateArt, addRating } = useArts();
  const art = arts.find((a) => a.id === id);
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState("");

  if (!art) {
    return <div className="p-6">Artwork not found. <Link to="/gallery" className="text-indigo-600">Back to gallery</Link></div>;
  }

  const downloadJPG = () => {
    if (!art.image) return alert("No image");
    // convert base64 to blob
    const arr = art.image.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    const blob = new Blob([u8arr], { type: mime });
    saveAs(blob, `${art.title || "art"}.jpg`);
    updateArt(art.id, { downloads: (art.downloads || 0) + 1 });
  };

  const doDownloadPDF = () => {
    downloadArtAsPDF(art);
    updateArt(art.id, { downloads: (art.downloads || 0) + 1 });
  };

  const submitRating = (e) => {
    e.preventDefault();
    addRating(art.id, { id: Date.now(), stars: Number(stars), comment });
    setComment("");
    alert("Thanks for rating!");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white p-4 rounded shadow">
            {art.image ? <img src={art.image} alt={art.title} className="w-full object-contain" /> : <div className="h-96 flex items-center justify-center">No image</div>}
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold">{art.title}</h1>
            <p className="text-sm text-gray-600">by {art.artist}</p>
            <p className="mt-2">{art.description}</p>
          </div>
        </div>

        <div>
          <div className="bg-white p-4 rounded shadow space-y-3">
            <div className="text-lg font-semibold">Buy / Download</div>
            <div className="text-2xl font-bold">₹{art.price}</div>
            <div className="flex gap-2 mt-2">
              <button onClick={() => alert("Payment flow not implemented in demo")} className="px-3 py-2 bg-green-600 text-white rounded">Buy</button>
              <button onClick={downloadJPG} className="px-3 py-2 border rounded">Download JPG</button>
              <button onClick={doDownloadPDF} className="px-3 py-2 border rounded">Download PDF</button>
            </div>

            <form onSubmit={submitRating} className="mt-4 space-y-2">
              <div className="text-sm">Rate this artwork</div>
              <select value={stars} onChange={(e) => setStars(e.target.value)} className="w-full p-2 border rounded">
                {[5,4,3,2,1].map((s) => <option key={s} value={s}>{s} stars</option>)}
              </select>
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment" className="w-full p-2 border rounded" />
              <button type="submit" className="w-full px-3 py-2 bg-indigo-600 text-white rounded">Submit Rating</button>
            </form>
          </div>

          <div className="mt-4 bg-white p-4 rounded shadow">
            <div className="font-semibold">Details</div>
            <div className="text-sm text-gray-600">Downloads: {art.downloads}</div>
            <div className="mt-2">
              <div className="font-medium">Ratings</div>
              {art.ratings.length ? art.ratings.map((r) => (
                <div key={r.id} className="text-sm border-t py-2">
                  <div>⭐ {r.stars}</div>
                  <div className="text-xs text-gray-600">{r.comment}</div>
                </div>
              )) : <div className="text-sm text-gray-500">No ratings yet</div>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
