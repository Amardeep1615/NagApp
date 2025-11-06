import React from "react";
import UploadForm from "../components/UploadForm";
import { CloudUpload } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto mt-16 px-5 py-10 bg-white rounded-2xl shadow-xl relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>

      <h2 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center gap-2">
        <CloudUpload size={28} /> Upload Your Artwork
      </h2>
      <p className="text-gray-500 mb-8">
        Share your creativity with the world. Upload your paintings, photographs, or digital art here.
      </p>

      <UploadForm />
    </div>
  );
}
