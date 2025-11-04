import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-center py-6">
      <div className="text-sm text-gray-600">© {new Date().getFullYear()} Nani's Art Gallery — Presented by TMK</div>
    </footer>
  );
}
