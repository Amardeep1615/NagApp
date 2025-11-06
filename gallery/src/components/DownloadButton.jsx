import React from "react";
import jsPDF from "jspdf";
import { Download } from "lucide-react";

export default function DownloadButton({ art }) {
  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text(art.title, 10, 10);
    pdf.addImage(art.image, "JPEG", 10, 20, 180, 150);
    pdf.save(`${art.title}.pdf`);
  };

  return (
    <button
      className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
      onClick={handleDownload}
    >
      <Download size={16} /> Download PDF
    </button>
  );
}
