import jsPDF from "jspdf";

export default function downloadArtAsPDF(art) {
  // art: {title, artist, image (base64)}
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [800, 600],
  });

  doc.setFontSize(20);
  doc.text(art.title || "Untitled", 20, 30);
  doc.setFontSize(12);
  doc.text(`by ${art.artist || "Unknown"}`, 20, 50);

  // add image (scaled)
  if (art.image) {
    const maxW = 760;
    const maxH = 460;
    // add image at (20,60)
    doc.addImage(art.image, "JPEG", 20, 60, maxW, maxH);
  }
  doc.save(`${(art.title || "art").replace(/\s+/g, "_")}.pdf`);
}
