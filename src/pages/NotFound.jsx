// NotFound.jsx  
export default function NotFound() {  
    return (  
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">  
        <div className="bg-white p-10 rounded-lg shadow-lg text-center transform -translate-y-24">  
          <img  
            src="https://i.pinimg.com/originals/dc/48/d3/dc48d3c91b86707de710969434e7f36b.gif" // Replace with your image URL  
            alt="Not Found"  
            className="w-1/2 mx-auto mb-6"  
          />  
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>  
          <p className="text-xl text-gray-700">Halaman tidak ditemukan!</p>  
          <p className="text-gray-500">  
            Mungkin tautan yang Anda masukkan salah atau halaman telah dihapus.  
          </p>  
          <button  
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"  
            onClick={() => window.history.back()}  
          >  
            Kembali ke Halaman Sebelumnya  
          </button>  
        </div>  
      </div>  
    );  
  }  