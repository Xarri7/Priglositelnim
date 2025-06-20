import React from 'react';

const PhotoGallery: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50 relative">
      <div className="absolute inset-0 kazakh-pattern-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 max-w-4xl text-center fade-in-up">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-12 md:p-16 shadow-xl border border-amber-200 relative">
          {/* Decorative corners */}
          <div className="absolute top-6 left-6">
            <svg width="50" height="50" viewBox="0 0 50 50" className="ornament-svg">
              <path d="M10 25 Q20 10 25 25 Q20 40 10 25 M25 10 Q40 20 25 25 Q10 20 25 10" 
                    fill="none" stroke="#d4af37" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute top-6 right-6">
            <svg width="50" height="50" viewBox="0 0 50 50" className="ornament-svg">
              <path d="M40 25 Q30 10 25 25 Q30 40 40 25 M25 10 Q10 20 25 25 Q40 20 25 10" 
                    fill="none" stroke="#d4af37" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-6 left-6">
            <svg width="50" height="50" viewBox="0 0 50 50" className="ornament-svg">
              <path d="M10 25 Q20 40 25 25 Q20 10 10 25 M25 40 Q40 30 25 25 Q10 30 25 40" 
                    fill="none" stroke="#d4af37" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-6 right-6">
            <svg width="50" height="50" viewBox="0 0 50 50" className="ornament-svg">
              <path d="M40 25 Q30 40 25 25 Q30 10 40 25 M25 40 Q10 30 25 25 Q40 30 25 40" 
                    fill="none" stroke="#d4af37" strokeWidth="1"/>
            </svg>
          </div>
          
          <div className="mb-8">
            <svg width="150" height="60" viewBox="0 0 150 60" className="mx-auto ornament-svg">
              <path d="M15 30 Q45 10 75 30 Q105 10 135 30 Q105 50 75 30 Q45 50 15 30" 
                    fill="none" stroke="#d4af37" strokeWidth="2"/>
              <circle cx="75" cy="30" r="10" fill="#d4af37"/>
              <circle cx="45" cy="25" r="5" fill="#d4af37"/>
              <circle cx="105" cy="25" r="5" fill="#d4af37"/>
            </svg>
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="elegant-script text-4xl md:text-5xl text-amber-800 font-bold mb-4 text-shadow-gold">
                "Махабат - жүректердің тілі"
              </p>
              <p className="serif-elegant text-xl md:text-2xl text-amber-700 italic">
                Сүйіспеншілік - жандардың серіктестігі
              </p>
            </div>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
            
            <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
              <p className="elegant-script text-2xl md:text-3xl text-amber-800 font-semibold mb-3">
                "Бір-бірімізді тауып алдық, енді мәңгілікке бірге боламыз"
              </p>
              <p className="serif-elegant text-lg md:text-xl text-amber-700 italic">
                Тағдырымыз біздерді қосты, енді жолымыз бір
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg border border-amber-300">
              <p className="serif-elegant text-lg text-amber-800 font-medium">
                "Отбасы - адамның ең қасиетті байлығы"
              </p>
              <p className="serif-elegant text-sm text-amber-700 mt-2 opacity-90">
                Ата-бабаларымыздың даналығы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;