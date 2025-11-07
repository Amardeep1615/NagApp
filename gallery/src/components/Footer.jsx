import React from "react";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto py-8 px-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Branding */}
        <div className="flex-1 min-w-[180px] text-center md:text-left">
          <h1 className="text-xl font-bold text-white">Nani’s Art Gallery</h1>
          <p className="text-gray-400 text-sm mt-1">where creativity meets the paper</p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} | Presented by TMK
          </p>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 min-w-[180px] flex flex-col items-center md:items-start gap-2">
          <a href="/about" className="hover:underline text-sm">About</a>
          <a href="/exhibits" className="hover:underline text-sm">Exhibits</a>
          <a href="/contact" className="hover:underline text-sm">Contact</a>
          <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
        </nav>

        {/* Social Icons */}
        <div className="flex-1 min-w-[180px] flex gap-4 justify-center md:justify-end">
          <a
            href="#"
            className="p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Instagram"
          >
            <Instagram size={20} className="text-pink-500" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Twitter"
          >
            <Twitter size={20} className="text-blue-400" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Facebook"
          >
            <Facebook size={20} className="text-blue-600" />
          </a>
          <a
            href="mailto:contact@naniartgallery.com"
            className="p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Email"
          >
            <Mail size={20} className="text-yellow-400" />
          </a>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4 mt-6 text-center text-gray-500 text-xs">
        <span>
          &copy; {new Date().getFullYear()} Nani’s Art Gallery. All rights reserved.
        </span>
        <span className="mx-2">|</span>
        <a href="/terms" className="hover:underline">Terms of Service</a>
        <span className="mx-2">|</span>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}
