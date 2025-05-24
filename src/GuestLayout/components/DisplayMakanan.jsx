import { useState } from "react";
import dataMakanan from "../json/dataMakanan"; // Pastikan data ini sudah sesuai

export default function DisplayMakanan() {
  const [start, setStart] = useState(0);
  const visible = 5;

  const handleNext = () => {
    if (start + visible < dataMakanan.length) {
      setStart(start + visible); // geser per halaman
    }
  };

  const handlePrev = () => {
    if (start - visible >= 0) {
      setStart(start - visible); // geser ke depan
    } else {
      setStart(0); // tidak ke angka negatif
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="relative flex items-center justify-center max-w-7xl mx-auto">
        {/* Tombol kiri */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          ←
        </button>

        {/* Grid Logo */}
        <div className="flex gap-4 overflow-hidden px-12">
          {dataMakanan.slice(start, start + visible).map((item) => (
            <div
              key={item.title} // pastikan key unik, bisa juga pakai item.id jika ada
              className="bg-white border rounded-xl p-4 shadow-md flex items-center justify-center w-40 h-24"
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-h-10 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Tombol kanan */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          →
        </button>
      </div>
    </section>
  );
}