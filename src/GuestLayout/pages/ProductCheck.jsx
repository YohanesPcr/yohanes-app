import React, { useState } from 'react';
import produkData from '../json/produk.json';

const ProductCheck = () => {
  const [kode, setKode] = useState('');
  const [error, setError] = useState('');
  const [hasil, setHasil] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setHasil(null);

    if (!kode.trim()) {
      setError('Kode produk tidak boleh kosong.');
      return;
    }

    const produk = produkData.find(
      (item) => item.kode === kode.trim().toUpperCase()
    );

    if (!produk) {
      setError('Produk dengan kode tersebut tidak ditemukan.');
    } else {
      setHasil(produk);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Cek Ketersediaan Produk
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="kode" className="block text-sm font-medium text-gray-700 mb-1">
              Kode Produk
            </label>
            <input
              type="text"
              id="kode"
              name="kode"
              placeholder="Contoh: P001"
              value={kode}
              onChange={(e) => setKode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Cek Sekarang
          </button>
        </form>

        {hasil && (
          <div className="mt-8 bg-gray-50 border border-gray-200 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Hasil Pengecekan</h3>
            <p className="mb-1">
              <span className="font-medium">Nama Produk:</span> {hasil.nama}
            </p>
            <p className="mb-1">
              <span className="font-medium">Status:</span>{' '}
              {hasil.tersedia ? (
                <span className="text-green-600 font-semibold">Tersedia</span>
              ) : (
                <span className="text-red-600 font-semibold">Habis</span>
              )}
            </p>
            <p>
              <span className="font-medium">Harga:</span> Rp{hasil.harga.toLocaleString('id-ID')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCheck;
