import { useState } from "react";
import ulasanPengguna from "../json/ulasanPengguna.json";

export default function Ulasan() {
  const [halaman, setHalaman] = useState(0); // 0 untuk halaman pertama
  const dataPerHalaman = 3;

  const mulaiIndex = halaman * dataPerHalaman;
  const dataTampil = ulasanPengguna.slice(mulaiIndex, mulaiIndex + dataPerHalaman);
  const totalHalaman = Math.ceil(ulasanPengguna.length / dataPerHalaman);

  return (
    <section className="bg-white py-20 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Ulasan Pengguna</h2>
          <p className="text-gray-500 mt-2">
            Pendapat dan pengalaman pengguna tentang makanan favorit mereka
          </p>
        </div>
        <button className="text-purple-600 hover:underline font-medium">
          Lihat Semua →
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {dataTampil.map((ulasan, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white p-5"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={ulasan.avatar}
                alt={ulasan.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{ulasan.author}</h4>
                <p className="text-sm text-gray-500">{ulasan.date}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              “{ulasan.ulasan}”
            </p>
          </div>
        ))}
      </div>

      {/* Titik Navigasi */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalHalaman }).map((_, i) => (
          <button
            key={i}
            onClick={() => setHalaman(i)}
            className={`w-3 h-3 rounded-full ${
              i === halaman ? "bg-purple-600" : "bg-gray-300"
            } transition duration-300`}
          />
        ))}
      </div>
    </section>
  );
}
