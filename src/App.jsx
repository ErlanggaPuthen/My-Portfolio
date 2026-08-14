import React from "react";
import Navbar from "./components/Navbar";
import { heroData, listTools, listProyek } from "./data";

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans antialiased">
      {/* Navigasi Utama */}
      <Navbar />

      {/* Section Hero */}
      <section id="beranda" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-5 text-center md:text-left">
          <span className="inline-block bg-slate-800 text-teal-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
            {heroData.role}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Hi, Saya <span className="text-teal-400">{heroData.name}</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            {heroData.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href="#proyek"
              className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-all shadow-lg"
            >
              Lihat Proyek
            </a>
            <a
              href={heroData.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-teal-400 text-slate-300 hover:text-white px-6 py-3 rounded-lg transition-all"
            >
              Unduh CV
            </a>
          </div>
        </div>
        <div className="w-48 h-48 md:w-80 md:h-80 relative rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
          <img
            src={heroData.heroImage}
            alt={heroData.name}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section Alat & Teknologi */}
      <section id="tentang" className="py-20 bg-slate-900/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Tools & Keahlian</h2>
            <p className="text-slate-400 mt-2">Teknologi dan perangkat lunak yang biasa saya gunakan</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-slate-900 border border-slate-800 hover:border-teal-500/50 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              >
                <img src={tool.gambar} alt={tool.nama} className="w-12 h-12 object-contain mb-3" />
                <h3 className="font-semibold text-sm">{tool.nama}</h3>
                <span className="text-xs text-slate-500 mt-1">{tool.ket}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Proyek */}
      <section id="proyek" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Proyek Pilihan</h2>
          <p className="text-slate-400 mt-2">Kumpulan hasil kerja dan aplikasi yang telah dikembangkan</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col hover:border-slate-700 transition-all"
            >
              <img src={proyek.gambar} alt={proyek.nama} className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{proyek.nama}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{proyek.desk}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {proyek.tools.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-800 text-teal-300 text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Kontak & Footer */}
      <footer id="kontak" className="border-t border-slate-800 py-12 px-6 bg-slate-900/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Mari Terhubung</h3>
            <p className="text-slate-400 text-sm mt-1">Terbuka untuk peluang kerja, kolaborasi, atau diskusi teknis.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-all"
            >
              GitHub
            </a>
            <a
              href={heroData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-all"
            >
              LinkedIn
            </a>
            <a
              href={heroData.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-all"
            >
              WhatsApp
            </a>
            <a
              href={heroData.socials.email}
              className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all"
            >
              Kirim Email
            </a>
          </div>
        </div>
        <div className="text-center text-slate-600 text-xs mt-12">
          &copy; {new Date().getFullYear()} {heroData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}