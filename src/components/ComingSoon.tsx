export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-blue-50 px-6">
      <div className="max-w-2xl w-full text-center">
        <img src="/logo_turu.png" alt="TuRu" className="h-24 w-24 mx-auto mb-12" />

        <p className="text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed">
          TuruPay çok yakında sizlerle. Uygulama göz atmak ve bekleme listesine katılmak için tıklayın
        </p>

        <a
          href="https://t.me/TuRuPayBot/TuRuPay"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-200 hover:scale-105"
        >
          Bekleme Listesine Katıl
        </a>
      </div>
    </div>
  );
}
