import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 z-50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#beranda" className="text-xl font-bold text-white tracking-wide">
          Portfolio<span className="text-teal-400">.</span>
        </a>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <a href="#beranda" className="hover:text-teal-400 transition-colors">
            Beranda
          </a>
          <a href="#tentang" className="hover:text-teal-400 transition-colors">
            Keahlian
          </a>
          <a href="#proyek" className="hover:text-teal-400 transition-colors">
            Proyek
          </a>
          <a href="#kontak" className="hover:text-teal-400 transition-colors">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}