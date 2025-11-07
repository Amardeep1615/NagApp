import React from "react";
import UploadForm from "../components/UploadForm";
import { CloudUpload } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto mt-16 px-8 py-12 bg-linear-to-br from-indigo-50 via-white to-indigo-50 rounded-3xl shadow-2xl relative overflow-hidden border border-indigo-200">
      {/* Softer Decorative Blur Circles */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-300 opacity-15 blur-4xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-yellow-300 opacity-15 blur-4xl rounded-full"></div>

      {/* Header */}
      <h2 className="text-4xl font-extrabold mb-6 text-indigo-700 flex items-center gap-3 select-none">
        <CloudUpload size={32} /> Upload Your Artwork
      </h2>
      <p className="text-gray-600 mb-10 max-w-xl">
        Share your creativity with the world. Upload your paintings, photographs, or digital art here.
      </p>

      {/* Upload Form Container with subtle inner shadow */}
      <div className="bg-white rounded-2xl p-8 shadow-inner border border-indigo-100">
        <UploadForm />
      </div>
    </div>
  );
}
