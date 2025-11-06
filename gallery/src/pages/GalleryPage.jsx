import React from "react";
import ArtCard from "../components/ArtCard";
import { useArt } from "../context/artContextUtils";
import DownloadButton from "../components/DownloadButton";
import UploadForm from "../components/UploadForm";

export default function GalleryPage() {
  const { artworks } = useArt();
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {artworks.length ? (
        artworks.map((a) => <ArtCard key={a.id} art={a} />)
      ) : (
        <div className="text-center text-gray-500 col-span-3">
          No artworks yet. Try uploading one!
        </div>
      )}
      <UploadForm/>
       <ArtCard/>
       <DownloadButton/>

    </div>
  );
}
