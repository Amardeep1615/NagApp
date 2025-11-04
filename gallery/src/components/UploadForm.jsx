import React, { useState } from "react";
import { fileToBase64 } from "../services/fileUtils";
import { useArts } from "../context/ArtContext";
import { useAuth } from "../context/AuthContext";

export default function UploadForm() {
  const { addArt } = useArts();
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFile = async (e) => {
    const f = e.target.files[0];
    const b = await fileToBase64(f);
    setPreview(b);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!title || !preview) return alert("Title and image required");
    setLoading(true);
    // watermark could be added server-side; for now store base64
    addArt({
      title,
      description: desc,
      artist: user ? user.name : "Guest Artist",
      price: Number(price),
      image: preview,
    });
    setTitle("");
    setDesc("");
    setPrice(0);
    setPreview(null);
  };
  return (
    <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-3">
      <label className="block text-sm">Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
      <label className="block text-sm">Description</label>
      <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full p-2 border rounded" />
      <label className="block text-sm">Price (₹)</label>
      <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" className="w-full p-2 border rounded" />
      <label className="block text-sm">Upload Image</label>
      <input type="file" accept="image/*,application/pdf" onChange={onFile} />
      {preview && <div className="mt-2"><img src={preview} alt="preview" className="max-h-48" /></div>}
      <button disabled={loading} className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded">{loading ? "Uploading..." : "Upload"}</button>
    </form>
  );
}
