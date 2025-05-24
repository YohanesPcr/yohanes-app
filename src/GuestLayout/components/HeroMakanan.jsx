import heroImg from "../assets/makanan.jpg";
import makananData from "@json/topDishes.json";

export default function HeroMakanan() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Kiri: Konten Teks */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Pilihan Makanan <span className="text-purple-600">Terfavorit</span> Hari Ini 🍽️
          </h1>
          <p className="text-gray-600 text-lg">
            Temukan dan pesan makanan favoritmu lebih cepat. Rasa terbaik dari restoran pilihan, hanya dalam satu klik!
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
              Pesan Sekarang
            </button>
            <button className="text-purple-600 font-medium hover:underline">
              Lihat Menu
            </button>
          </div>
        </div>

        {/* Kanan: Gambar + Card Top Dishes */}
        <div className="relative w-full">
          <img
            src={heroImg}
            alt="Makanan Favorit"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-10 left-5 bg-white rounded-xl shadow-xl p-5 w-[280px]">
            <h3 className="font-semibold text-gray-900 mb-3">Top Dishes</h3>
            <ul className="space-y-4">
              {makananData.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Logo mitra restoran */}
      <div className="mt-28 flex justify-center items-center flex-wrap gap-6 text-gray-400 text-sm">
        <span className="uppercase">Warung Rasa</span>
        <span className="uppercase">Nasi Nikmat</span>
        <span className="uppercase">Sate Master</span>
        <span className="uppercase">KopiKita</span>
        <span className="uppercase">Bakso 88</span>
      </div>
    </section>
  );
}
