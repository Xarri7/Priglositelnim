import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const RSVPForm: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '77072460603';
    const message = encodeURIComponent('Сәлеметсіз бе! Нұрғиса мен Розаның тойына қатысуымды растағым келеді.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50 relative">
      <div className="absolute inset-0 kazakh-pattern-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 max-w-4xl fade-in-up">
        <div className="text-center mb-16">
          <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto ornament-svg mb-8">
            <path d="M20 30 Q60 10 100 30 Q140 10 180 30 Q140 50 100 30 Q60 50 20 30" 
                  fill="none" stroke="#d4af37" strokeWidth="2"/>
            <circle cx="100" cy="30" r="8" fill="#d4af37"/>
            <circle cx="60" cy="25" r="4" fill="#d4af37"/>
            <circle cx="140" cy="25" r="4" fill="#d4af37"/>
          </svg>
          
          <h2 className="elegant-script text-5xl md:text-6xl font-bold text-amber-800 mb-4 text-shadow-gold">
            Қатысуды растау
          </h2>
          <p className="serif-elegant text-xl text-amber-700 italic mb-6">
            Келуіңізді алдын ала хабарлаңыз
          </p>
          <p className="serif-elegant text-lg text-amber-700 mb-2">
            2025 жылдың 25 шілдесіне дейін қатысуыңызды растаңыз
          </p>
          <p className="serif-elegant text-base text-amber-600 opacity-90">
            Алдын ала дайындық жасау үшін маңызды
          </p>
        </div>

        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-10 md:p-12 border border-amber-200 relative">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4">
            <svg width="40" height="40" viewBox="0 0 40 40" className="ornament-svg">
              <path d="M5 20 Q15 5 20 20 Q15 35 5 20 M20 5 Q35 15 20 20 Q5 15 20 5" 
                    fill="none" stroke="#d4af37" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute top-4 right-4">
            <svg width="40" height="40" viewBox="0 0 40 40" className="ornament-svg">
              <path d="M35 20 Q25 5 20 20 Q25 35 35 20 M20 5 Q5 15 20 20 Q35 15 20 5" 
                    fill="none" stroke="#d4af37" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-4 left-4">
            <svg width="40" height="40" viewBox="0 0 40 40" className="ornament-svg">
              <path d="M5 20 Q15 35 20 20 Q15 5 5 20 M20 35 Q35 25 20 20 Q5 25 20 35" 
                    fill="none" stroke="#d4af37" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-4 right-4">
            <svg width="40" height="40" viewBox="0 0 40 40" className="ornament-svg">
              <path d="M35 20 Q25 35 20 20 Q25 5 35 20 M20 35 Q5 25 20 20 Q35 25 20 35" 
                    fill="none" stroke="#d4af37" strokeWidth="1"/>
            </svg>
          </div>
          
          <div className="text-center relative z-10">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
            
            <h3 className="elegant-script text-4xl md:text-5xl font-bold text-amber-800 mb-6 text-shadow-gold">
              WhatsApp арқылы растаңыз
            </h3>
            <h4 className="serif-elegant text-xl text-amber-700 mb-8 italic">
              Жылдам және ыңғайлы тәсіл
            </h4>
            
            <div className="bg-amber-50 p-8 rounded-lg mb-8 border border-amber-200">
              <p className="serif-elegant text-lg text-amber-800 mb-4 font-medium">
                Төмендегі батырманы басып, WhatsApp арқылы қатысуыңызды растаңыз
              </p>
              <p className="serif-elegant text-base text-amber-700 opacity-90">
                Бір шерту арқылы хабарлама жіберіңіз
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white py-6 px-12 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg border-2 border-green-700 flex items-center justify-center mx-auto space-x-4 mb-8"
            >
              <MessageCircle className="w-8 h-8" />
              <span className="serif-elegant">WhatsApp арқылы растау</span>
            </button>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <p className="serif-elegant font-bold text-blue-800 text-lg">+7 707 246 06 03</p>
              </div>
              <p className="serif-elegant text-blue-700 text-sm">
                Сұрақтарыңыз болса, осы нөмірге хабарласыңыз
              </p>
              <p className="serif-elegant text-blue-600 text-xs mt-1 opacity-80">
                Кез келген уақытта қоңырау шалуға болады
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg mt-8 border border-amber-200">
              <p className="elegant-script text-3xl text-amber-800 font-bold mb-3 text-shadow-gold">
                Сіздердің қатысуыңыз - біздің бақытымыз!
              </p>
              <p className="serif-elegant text-lg text-amber-700 italic">
                Қуанышты сәтімізді бірге тойлайық!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;