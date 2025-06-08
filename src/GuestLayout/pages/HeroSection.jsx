import { Users } from 'lucide-react'; // Optional, bisa hapus jika tidak digunakan
import { CheckCircle } from 'lucide-react';
import heroImage from '../assets/r8kcwm8nljwd1.jpeg'; // Pastikan ganti gambar ke foto restoran-makanan

import DisplayMakanan from '../components/DisplayMakanan';
import MenuFavorit from '../components/MenuFavorit';
import DaftarMakanan from '../components/DaftarMakanan';
import HeroMakanan from '../components/HeroMakanan';

import Ulasan from '../components/Ulasan';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function HeroSection() {
  return (
    <>
      <Navbar />
   <section className="relative bg-[#fff7f1] py-20 mt-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 md:px-12">
          {/* Kiri */}
          <div className="space-y-6">
            <p className="text-[#3e77fa] font-semibold text-sm uppercase">Makan Enak Disini</p>
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
              Rasakan <br />
              Makanan <span className="text-[#3e77fa]">Lezat</span> dan <br />
              Suasana Asri
            </h1>
            <p className="text-gray-600">
              Nikmati hidangan spesial kami setiap hari, cocok untuk keluarga, teman, atau acara spesial. Rasakan cita rasa autentik dan pelayanan terbaik.
            </p>

            {/* Form Pencarian */}
            <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-3 w-full max-w-xl">
              <input
                type="text"
                placeholder="Makanan, Tempat, atau Suasana..."
                className="flex-1 px-4 py-2 border rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Lokasi..."
                className="flex-1 px-4 py-2 border rounded-lg w-full"
              />
              <button className="bg-[#9777fa] hover:bg-[#845df5] text-white font-semibold px-6 py-2 rounded-lg">
                Cari Sekarang
              </button>
            </div>

            {/* Info Populer */}
            <div className="text-sm text-gray-500 mt-2">
              <strong>Cari Favorit:</strong> Nasi Goreng, Sate, Mie Ayam, Seafood, Serba Pedas
            </div>
          </div>

          {/* Kanan */}
          <div className="relative flex justify-center mt-10 md:mt-0">
            <img src={heroImage} alt="Restoran Makanan" className="relative z-10 w-[280px] md:w-[360px]" />

            {/* Badge: Rating */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 z-20">
              <Users className="text-[#9777fa]" />
              <div>
                <p className="text-sm font-bold">4.8</p>
                <p className="text-xs text-gray-400">(2k review)</p>
              </div>
            </div>

            {/* Badge: Promo */}
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-[#3e77fa] z-20">
              Promo Spesial Minggu Ini!
            </div>

            {/* Badge: Pesan Dapar */}
            <div className="absolute top-24 left-[-40px] bg-white rounded-lg px-4 py-2 shadow-md flex items-center gap-2 text-sm z-20">
              <CheckCircle className="text-green-500 w-4 h-4" />
              <span>Pelayanan Cepat & Ramah</span>
            </div>

            {/* Badge: Event */}
            <div className="absolute bottom-28 right-[-30px] bg-white rounded-lg px-4 py-2 shadow-md text-sm z-20">
              <p className="font-semibold">Acara Family Gathering</p>
              <p className="text-xs text-gray-500">Sabtu, 20 Mei 2025 - 18.00</p>
              <button className="mt-1 text-[#3e77fa] text-xs underline">Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tambahan Section */}
      <DisplayMakanan />
      <MenuFavorit />
      <DaftarMakanan />
      <HeroMakanan />
      <Ulasan />
      <Footer/>
    </>
  );
}