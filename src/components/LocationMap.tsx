import React from 'react';
import { MapPin, Navigation, Car, Phone } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50 relative">
      <div className="absolute inset-0 kazakh-pattern-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 max-w-5xl fade-in-up">
        <div className="text-center mb-16">
          <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto ornament-svg mb-8">
            <path d="M20 30 Q60 10 100 30 Q140 10 180 30 Q140 50 100 30 Q60 50 20 30" 
                  fill="none" stroke="#d4af37" strokeWidth="2"/>
            <circle cx="100" cy="30" r="8" fill="#d4af37"/>
            <circle cx="60" cy="25" r="4" fill="#d4af37"/>
            <circle cx="140" cy="25" r="4" fill="#d4af37"/>
          </svg>
          
          <h2 className="elegant-script text-5xl md:text-6xl font-bold text-amber-800 mb-4 text-shadow-gold">
            Адрес проведения
          </h2>
          <p className="serif-elegant text-xl text-amber-700 italic mb-6">
            Мекен-жайы
          </p>
          <p className="serif-elegant text-lg text-amber-700 mb-2">
            Ресторан "ДОС" расположен в центре города Караганды
          </p>
          <p className="serif-elegant text-base text-amber-600 opacity-90">
            Ресторан "ДОС" Қарағанды қаласының орталығында орналасқан
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-10 md:p-12 shadow-lg border border-amber-200 relative">
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
            
            <h3 className="serif-elegant text-2xl md:text-3xl font-bold text-amber-800 mb-8 flex items-center justify-center">
              <Navigation className="w-8 h-8 mr-4" />
              Адрес и контакты
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 rounded-lg p-8 border border-amber-200 text-center">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-amber-600 mr-3" />
                  <svg width="30" height="30" viewBox="0 0 30 30" className="ornament-svg">
                    <circle cx="15" cy="15" r="10" fill="none" stroke="#d4af37" strokeWidth="1"/>
                    <circle cx="15" cy="15" r="5" fill="#d4af37"/>
                  </svg>
                </div>
                <div>
                  <p className="serif-elegant font-bold text-amber-800 text-xl mb-2">Ресторан "ДОС"</p>
                  <p className="serif-elegant text-amber-700 text-lg font-medium">г. Караганда</p>
                  <p className="serif-elegant text-amber-700 text-base">ул. Хайрулла Кабжанова</p>
                </div>
                
                <div className="flex items-center justify-center mt-6 space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <p className="serif-elegant text-amber-800 font-semibold">+7 (7212) 123-45-67</p>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
                <h4 className="serif-elegant font-bold text-amber-800 mb-6 text-xl flex items-center justify-center">
                  <Car className="w-6 h-6 mr-3" />
                  Транспорт
                </h4>
                <div className="space-y-4 text-amber-700">
                  <div className="flex items-start space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="ornament-svg mt-1">
                      <circle cx="10" cy="10" r="6" fill="none" stroke="#d4af37" strokeWidth="1"/>
                      <circle cx="10" cy="10" r="3" fill="#d4af37"/>
                    </svg>
                    <div>
                      <p className="serif-elegant text-base font-medium">На автомобиле:</p>
                      <p className="serif-elegant text-sm">бесплатная парковка</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="ornament-svg mt-1">
                      <path d="M10 3 L12 8 L17 8 L13 11 L15 16 L10 13 L5 16 L7 11 L3 8 L8 8 Z" 
                            fill="#d4af37"/>
                    </svg>
                    <div>
                      <p className="serif-elegant text-base font-medium">Общественный транспорт:</p>
                      <p className="serif-elegant text-sm">автобусы №5, 12, 28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white bg-opacity-90 rounded-xl p-8 max-w-3xl mx-auto border border-amber-200">
              <svg width="100" height="30" viewBox="0 0 100 30" className="mx-auto ornament-svg mb-6">
                <path d="M10 15 Q30 5 50 15 Q70 5 90 15" fill="none" stroke="#d4af37" strokeWidth="2"/>
                <circle cx="50" cy="15" r="5" fill="#d4af37"/>
                <circle cx="30" cy="12" r="2" fill="#d4af37"/>
                <circle cx="70" cy="12" r="2" fill="#d4af37"/>
              </svg>
              
              <p className="serif-elegant text-xl font-bold text-amber-800 mb-3">
                Нужна помощь с дорогой?
              </p>
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-amber-600 mr-3" />
                <p className="serif-elegant font-bold text-amber-800 text-lg">+7 707 246 06 03</p>
              </div>
              <p className="serif-elegant text-amber-700 text-base">
                Звоните, мы поможем добраться
              </p>
              <p className="serif-elegant text-amber-600 text-sm mt-2 opacity-80">
                Қоңырау шалыңыз, біз жолды табуға көмектесеміз
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;