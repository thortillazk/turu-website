import { Shield, Zap, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Güvenli',
    description: 'Blockchain teknolojisi ile korunan varlıklarınız',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Hızlı',
    description: 'Anında işlem onayı ve transfer',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Globe,
    title: 'Rusya Geneli',
    description: 'Rusya\'nın her yerinde kabul edilir',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lock,
    title: 'Şifreli',
    description: 'End-to-end şifreleme ile tam gizlilik',
    gradient: 'from-green-500 to-emerald-500'
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Neden TuRuPay?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kripto ödemeleriniz için en güvenilir ve kolay çözüm
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Hemen Başlayın
          </h3>
          <p className="text-xl mb-8 text-red-50 max-w-2xl mx-auto">
            TuRuPay ile kripto ödemelerinizi Telegram üzerinden kolayca yapın
          </p>
          <button className="px-8 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 border-2 border-white">
            Telegram'da Aç
          </button>
        </div>
      </div>
    </section>
  );
}
