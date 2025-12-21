import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
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

            <a href="https://t.me/TuRuPayBot/TuRuPay" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed inline-block opacity-60">
              Başla
            </a>
          </div>
        </div>
      </nav>

      <div className="relative px-6 py-24 lg:py-32 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-600 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
            TuruPay çok yakında sizlerle
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-400">
            Kripto Ödemeler
            <br />
            Telegram'da
          </h1>

          <p className="text-xl lg:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Uygulama göz atmak ve bekleme listesine katılmak için tıklayın
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://t.me/TuRuPayBot/TuRuPay" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gray-300 text-gray-500 rounded-xl font-semibold text-lg flex items-center gap-2 no-underline cursor-not-allowed opacity-60">
              Telegram'da Aç
              <ArrowRight className="w-5 h-5" />
            </a>
            <button disabled className="px-8 py-4 bg-gray-200 text-gray-400 rounded-xl font-semibold text-lg border-2 border-gray-300 cursor-not-allowed opacity-60">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
