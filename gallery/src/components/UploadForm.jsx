import React, { useState } from "react";
import { useArt } from "../context/artContextUtils";



export default function UploadForm() {
  const { addArt } = useArt()
  const [formData, setFormData] = useState({ title: "", price: "", file: null });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price || !formData.file) {
      alert("Please fill in all fields before uploading.");
      return;
    }

    const newArt = {
      id: Date.now(),
      title: formData.title,
      price: formData.price,
      image: URL.createObjectURL(formData.file),
      artist: "Nani",
      ratings: 4,
      downloads: 0,
    };
    addArt(newArt);
    alert("✅ Artwork uploaded successfully!");

    setFormData({ title: "", price: "", file: null });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-2xl mt-10 border border-gray-100"
    >
      <h2 className="text-2xl font-bold mb-5 text-indigo-600 text-center">
        Upload Artwork 🎨
      </h2>

      {/* Artwork Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold mb-1 text-gray-700">
          Artwork Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter artwork title"
          className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      {/* Artwork Price */}
      <div className="mb-4">
        <label htmlFor="price" className="block font-semibold mb-1 text-gray-700">
          Price (₹)
        </label>
        <input
          id="price"
          type="number"
          placeholder="Enter price"
          className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
      </div>

      {/* Artwork Image Upload */}
      <div className="mb-4">
        <label htmlFor="file" className="block font-semibold mb-1 text-gray-700">
          Upload Artwork Image
        </label>
        <input
          id="file"
          type="file"
          accept="image/*"
          className="border border-gray-300 rounded-lg w-full p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full hover:bg-indigo-700 transition-all duration-200 font-semibold"
      >
        Upload
      </button>
    </form>
  );
}
