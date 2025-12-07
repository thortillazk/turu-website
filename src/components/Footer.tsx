export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <img src="/logo_turu.png" alt="TuRu" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-gray-500 leading-relaxed max-w-md">
              Telegram üzerinden kripto ödemelerinizi güvenli ve hızlı bir şekilde yapın.
              Rusya genelinde kabul edilir.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ürün</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Güvenlik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Destek</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SSS</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 TuRuPay. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
