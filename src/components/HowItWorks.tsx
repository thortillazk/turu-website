import { MousePointer2, UserCheck, Wallet, Zap } from 'lucide-react';

const steps = [
  {
    icon: MousePointer2,
    title: 'Tek tıkla Telegram uygulamasını açın',
    description: 'Herhangi bir yükleme veya kayıt gerektirmez',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: UserCheck,
    title: 'Otomatik profil oluşturun',
    description: 'Telegram hesabınızla anında cüzdan oluşturulur',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Wallet,
    title: 'Size tanımlanan adrese kripto yükleyin',
    description: 'Güvenli ve kişisel cüzdan adresinize para transferi yapın',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Zap,
    title: 'Bakiyeniz anında Rusya\'da her yerde harcamanız için hazır',
    description: 'Anlık ödemeler, kolay kullanım',
    color: 'from-green-500 to-green-600'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dört basit adımda kriptonuzu günlük ödemelere dönüştürün
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
