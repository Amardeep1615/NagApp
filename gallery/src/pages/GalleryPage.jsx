import React from "react";
import ArtCard from "../components/ArtCard";
import { Link } from "react-router-dom";

const artworks = [
  {
    id: 1,
    title: "Mahesh Babu",
    image: "Mahesh.jpg",
    url: "/art/1",
  },
  {
    id: 2,
    title: "Nani",
    image: "Nani.jpg",
    url: "/art/2",
  },
  {
    id: 3,
    title: "Ms Dhoni",
    image: "Ms Dhoni.jpg",
    url: "/art/3",
  },
  {
    id: 4,
    title: "Sunset Painting",
    image: "https://example.com/images/sunset.jpg",
    url: "/art/4",
  },
  {
    id: 5,
    title: "Ocean View",
    image: "https://example.com/images/ocean.jpg",
    url: "/art/5",
  },
  {
    id: 6,
    title: "Modern Abstract",
    image: "https://example.com/images/abstract.jpg",
    url: "/art/6",
  },
  {
    id: 7,
    title: "Mountain Landscape",
    image: "https://example.com/images/mountain.jpg",
    url: "/art/7",
  },
  {
    id: 8,
    title: "City Skylines",
    image: "https://example.com/images/city.jpg",
    url: "/art/8",
  },
  {
    id: 9,
    title: "Floral Design",
    image: "https://example.com/images/floral.jpg",
    url: "/art/9",
  },
  {
    id: 10,
    title: "Vintage Portrait",
    image: "https://example.com/images/vintage.jpg",
    url: "/art/10",
  },
];

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {artworks.map((art) => (
          <Link key={art.id} to={art.url}>
            <ArtCard art={art} />
          </Link>
        ))}
      </div>
    
    </div>
  );
}
