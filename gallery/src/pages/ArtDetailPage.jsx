import React from "react";
import { useParams } from "react-router-dom";
import DownloadButton from "../components/DownloadButton";
import RatingStars from "../components/RatingStars";
import { Heart } from "lucide-react";

export default function ArtDetailPage() {
  const { id } = useParams();

  // ✅ Artworks data
  const artworks = [
    { id: 1, title: "Mahesh Babu", image: "Mahesh.jpg", url: "/art/1", artist: "Praveen Kumar", price: 500, description: "A realistic portrait of Mahesh Babu.", downloads: 120, ratings: 4.5 },
    { id: 2, title: "Nani", image: "Nani.jpg", url: "/art/2", artist: "Praveen Kumar", price: 450, description: "Charcoal sketch of Nani.", downloads: 90, ratings: 4.2 },
    { id: 3, title: "Ms Dhoni", image: "Ms Dhoni.jpg", url: "/art/3", artist: "Praveen Kumar", price: 600, description: "Capturing the legend MS Dhoni in art.", downloads: 200, ratings: 4.8 },
    { id: 4, title: "Sunset Painting", image: "https://example.com/images/sunset.jpg", url: "/art/4" },
    { id: 5, title: "Ocean View", image: "https://example.com/images/ocean.jpg", url: "/art/5" },
    { id: 6, title: "Modern Abstract", image: "https://example.com/images/abstract.jpg", url: "/art/6" },
    { id: 7, title: "Mountain Landscape", image: "https://example.com/images/mountain.jpg", url: "/art/7" },
    { id: 8, title: "City Skylines", image: "https://example.com/images/city.jpg", url: "/art/8" },
    { id: 9, title: "Floral Design", image: "https://example.com/images/floral.jpg", url: "/art/9" },
    { id: 10, title: "Vintage Portrait", image: "https://example.com/images/vintage.jpg", url: "/art/10" },
  ];

  const art = artworks.find((a) => a.id === Number(id)) || artworks[0];

  return (
    <div className="max-w-6xl mx-auto mt-20">
      {/* ✅ Main Art Detail (Side-by-Side Layout) */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-20 flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="md:w-1/2 relative">
          <img
            src={art.image}
            alt={art.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-100 transition">
            <Heart size={24} className="text-red-500" />
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 p-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{art.title}</h2>
          <p>
            <strong>Artist:</strong>{" "}
            <span className="text-gray-500">{art.artist || "Unknown"}</span>
          </p>
          <RatingStars ratings={art.ratings || 4.5} />
          <p>
            <strong>Price:</strong> ₹{art.price || "N/A"}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            <span className="text-gray-700">
              {art.description ||
                "A beautiful piece of artwork showcasing detailed creativity."}
            </span>
          </p>
          <p>
            <strong>Downloads:</strong>{" "}
            <span className="text-gray-600">{art.downloads || 0}</span>
          </p>
          <div>
            <DownloadButton art={art} />
          </div>
        </div>
      </div>

      {/* ✅ Gallery Section */}
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Explore Other Artworks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {artworks.map((a, index) => {
          const alignment =
            index % 3 === 0
              ? "items-start text-left"
              : index % 3 === 1
              ? "items-center text-center"
              : "items-end text-right";

          return (
            <div
              key={a.id}
              className={`flex flex-col ${alignment} space-y-4 cursor-pointer`}
              onClick={() => (window.location.href = a.url)}
            >
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <p>
                {a.description ||
                  "An exquisite artwork showcasing unique creativity and style."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
