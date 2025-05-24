'use client';
import { useState, useEffect } from 'react';
import hargaMakanan from '@json/daftarMakanan.json';



const kategoriList = ['Semua', 'Makanan Berat', 'Minuman', 'Cemilan', 'Dessert'];

export default function DaftarMakanan() {
  const [makanan, setMakanan] = useState([]);
  const [kategoriAktif, setKategoriAktif] = useState('Semua');

  useEffect(() => {
    setMakanan(hargaMakanan);
  }, []);

  const filterMakanan =
    kategoriAktif === 'Semua'
      ? makanan
      : makanan.filter((item) => item.category === kategoriAktif);

  return (
    <section id="daftar-makanan-section" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header & Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]">Menu Makanan</h2>
          <p className="text-gray-500">8 menu baru hari ini!</p>
        </div>

        {/* Kategori Filter */}
        <div className="flex gap-4 mb-10 overflow-x-auto">
          {kategoriList.map((kat) => (
            <button
              key={kat}
              onClick={() => setKategoriAktif(kat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                kategoriAktif === kat
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* Grid Makanan */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {filterMakanan.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {item.isUrgent && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Recommended
                  </span>
                )}
              </div>
              <h4 className="text-black font-semibold mb-2 text-center">{item.title}</h4>
              <p className="text-sm text-gray-500 text-center mb-2">{item.desc}</p>
              <div className="text-center text-blue-600 font-bold">{item.price}/Porsi</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
