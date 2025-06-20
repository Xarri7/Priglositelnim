import React from 'react';

const Invitation: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50 relative">
      <div className="absolute inset-0 kazakh-pattern-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 max-w-4xl fade-in-up">
        {/* Ornamental Header */}
        <div className="text-center mb-16">
          <svg width="250" height="80" viewBox="0 0 250 80" className="mx-auto ornament-svg mb-8">
            <path d="M25 40 Q75 15 125 40 Q175 15 225 40 Q175 65 125 40 Q75 65 25 40" 
                  fill="none" stroke="#d4af37" strokeWidth="2"/>
            <path d="M50 40 Q100 25 125 40 Q150 25 200 40" 
                  fill="none" stroke="#d4af37" strokeWidth="1"/>
            <circle cx="125" cy="40" r="10" fill="#d4af37"/>
            <circle cx="75" cy="35" r="5" fill="#d4af37"/>
            <circle cx="175" cy="35" r="5" fill="#d4af37"/>
          </svg>
          
          <h2 className="elegant-script text-5xl md:text-6xl font-bold text-amber-800 mb-4 text-shadow-gold">
            Құрметті достар!
          </h2>
          <p className="serif-elegant text-xl text-amber-700 italic">
            Қадірлі отбасы мүшелері мен жақындар!
          </p>
        </div>
        
        {/* Main Invitation Content */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-12 md:p-16 border border-amber-200 relative overflow-hidden">
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
              <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto ornament-svg">
                <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" 
                      fill="#d4af37" opacity="0.8"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="#d4af37" strokeWidth="1"/>
              </svg>
            </div>
            
            <div className="space-y-8 text-amber-900">
              <p className="serif-elegant text-xl md:text-2xl leading-relaxed font-medium">
                Жүрегіміздегі зор қуаныш пен дірілмен сіздерді біздің ортақ жолымыздың 
                басталуы болатын салтанатты жиынға шақырамыз.
              </p>
              
              <p className="serif-elegant text-lg md:text-xl leading-relaxed text-amber-800 italic">
                Махабатымыздың мерекесіне қатысып, бізбен бірге қуанышты бөлісіңіздер.
              </p>
              
              <div className="bg-amber-50 p-8 rounded-lg border border-amber-200 my-8">
                <p className="elegant-script text-3xl md:text-4xl text-amber-800 font-bold mb-3">
                  "Екі жүрек бір болғанда, бақыт мәңгілік болады"
                </p>
                <p className="serif-elegant text-base text-amber-700 italic">
                  Ата-бабаларымыздың даналығы
                </p>
              </div>
              
              <p className="serif-elegant text-xl md:text-2xl font-semibold text-amber-900">
                Келіңіздер және біздің махабат тарихымыздың бөлігі болыңыздар!
              </p>
              <p className="serif-elegant text-lg text-amber-800 italic">
                Сіздердің қатысуыңыз - біздің ең үлкен бақытымыз!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;