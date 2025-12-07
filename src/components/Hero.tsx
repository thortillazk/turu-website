import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('/gemini_generated_image_f7gajmf7gajmf7ga.png')] bg-center bg-no-repeat bg-contain opacity-5"></div>

      <nav className="relative pt-6 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo_turu.png" alt="TuRu" className="h-12 w-12" />
            </div>

            <div className="hidden md:flex items-center gap-10">
              <a href="#features" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Özellikler
              </a>
              <a href="#security" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Güvenlik
              </a>
              <a href="#faq" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                SSS
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Bize Ulaşın
              </a>
            </div>

            <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
              Başla
            </button>
          </div>
        </div>
      </nav>

      <div className="relative px-6 py-24 lg:py-32 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Şu an sadece Rusya'da hizmet vermektedir
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Kripto Ödemeler
            </span>
            <br />
            Telegram'da
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Telegram üzerinden tek tıkla kripto cüzdanınızı oluşturun ve Rusya'da her yerde anında ödeme yapın
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
              Telegram'da Aç
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
