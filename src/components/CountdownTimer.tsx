import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Дата свадьбы: 3 августа 2025 года, 13:00 (Алматы время UTC+6)
    const weddingDate = new Date('2025-08-03T13:00:00+06:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50 relative">
      <div className="absolute inset-0 kazakh-pattern-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 max-w-5xl text-center fade-in-up">
        <div className="mb-16">
          <svg width="180" height="50" viewBox="0 0 180 50" className="mx-auto ornament-svg mb-8">
            <path d="M15 25 Q50 5 90 25 Q130 5 165 25 Q130 45 90 25 Q50 45 15 25" 
                  fill="none" stroke="#d4af37" strokeWidth="2"/>
            <circle cx="90" cy="25" r="8" fill="#d4af37"/>
            <circle cx="50" cy="20" r="4" fill="#d4af37"/>
            <circle cx="130" cy="20" r="4" fill="#d4af37"/>
          </svg>
          
          <h2 className="elegant-script text-5xl md:text-6xl font-bold text-amber-800 mb-4 text-shadow-gold">
            До свадьбы осталось
          </h2>
          <p className="serif-elegant text-xl text-amber-700 italic">
            Той күніне дейін
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { value: timeLeft.days, label: 'Дней', labelKz: 'Күн' },
            { value: timeLeft.hours, label: 'Часов', labelKz: 'Сағат' },
            { value: timeLeft.minutes, label: 'Минут', labelKz: 'Минут' },
            { value: timeLeft.seconds, label: 'Секунд', labelKz: 'Секунд' }
          ].map((item, index) => (
            <div key={index} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-amber-200 relative">
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20" className="ornament-svg">
                  <circle cx="10" cy="10" r="6" fill="none" stroke="#d4af37" strokeWidth="1"/>
                  <circle cx="10" cy="10" r="3" fill="#d4af37"/>
                </svg>
              </div>
              
              <div className="mt-6">
                <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="serif-elegant text-amber-700 font-semibold text-sm uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="serif-elegant text-amber-600 text-xs opacity-80">
                  {item.labelKz}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-10 shadow-lg border border-amber-200 max-w-3xl mx-auto">
          <svg width="120" height="30" viewBox="0 0 120 30" className="mx-auto ornament-svg mb-6">
            <path d="M10 15 Q35 5 60 15 Q85 5 110 15" fill="none" stroke="#d4af37" strokeWidth="2"/>
            <circle cx="60" cy="15" r="5" fill="#d4af37"/>
            <circle cx="35" cy="12" r="2" fill="#d4af37"/>
            <circle cx="85" cy="12" r="2" fill="#d4af37"/>
          </svg>
          
          <p className="elegant-script text-3xl md:text-4xl text-amber-800 font-bold mb-3">
            Радостный день приближается!
          </p>
          <p className="serif-elegant text-lg text-amber-700 italic">
            Қуанышты күн жақындап келеді!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;