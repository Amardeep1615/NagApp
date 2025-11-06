import React from "react";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto py-8 px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-white">Nani’s Art Gallery</h1>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()} | Presented by TMK
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
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
        Designed with ❤️ by TMK
      </div>
    </footer>
  );
}
