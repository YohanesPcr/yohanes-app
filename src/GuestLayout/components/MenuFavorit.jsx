'use client';
import { useState, useEffect } from 'react';

import menuFavorit from '../json/menuFavorit.json'; // Ganti ke nama variabel sesuai keinginan

export default function MenuFavorit() {
  const [categoryCards, setCategoryCards] = useState([]);

  useEffect(() => {
    setCategoryCards(menuFavorit);
  }, []);

  return (
    <section id="categories-section" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header & Deskripsi */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]">Pilih Menu Favorit</h2>
          <button className="bg-[#ffffff] text-black px-4 py-1 rounded-md hover:bg-[#6f42c1] transition">
            Lihat Semua
          </button>
        </div>
        <div className="mb-8 text-center md:text-left">
          <p className="text-[#7f8f8b] font-semibold mb-4 max-w-2xl mx-auto md:mx-0">
            Temukan berbagai menu favorit kami, dari yang pedas sampai manis. Jangan sampai ketinggalan menu spesial hari ini!
          </p>
        </div>
        {/* Grid menu favorit */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {categoryCards.map((category, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300">
              <img src={category.image} alt={category.title} className="w-full h-48 object-contain mb-4" />
              <h4 className="text-black font-semibold mb-2 text-center">{category.title}</h4>
              <p className="text-sm text-gray-500 text-center">{category.desc} Menu</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}