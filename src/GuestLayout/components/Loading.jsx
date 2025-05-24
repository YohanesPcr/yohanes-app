export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-300 text-purple-800 transition-all duration-500 ease-in-out">
            <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin shadow-lg"></div>
            </div>
            <p className="text-lg font-semibold animate-pulse">Memuat data, harap tunggu...</p>
        </div>
    );
}
