export default function AppPreview() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Modern ve Kullanıcı Dostu Arayüz
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              TuRuPay ile kripto varlıklarınızı yönetmek hiç bu kadar kolay olmamıştı.
              Telegram içinde, basit ve güvenli bir deneyim.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Anlık Bakiye Görüntüleme</h3>
                  <p className="text-gray-600">Tüm varlıklarınızı tek ekranda görün</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Çoklu Kripto Desteği</h3>
                  <p className="text-gray-600">USDT, TON ve daha fazlası</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">QR Kod ile Hızlı Ödeme</h3>
                  <p className="text-gray-600">Tarama yapın ve ödeyin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 max-w-sm mx-auto">
              <img
                src="/image.png"
                alt="TuRuPay App"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
