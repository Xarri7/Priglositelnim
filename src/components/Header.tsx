import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kazakh-pattern-bg opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 floating-element opacity-60">
        <svg width="80" height="80" viewBox="0 0 100 100" className="ornament-svg">
          <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" 
                fill="#d4af37" stroke="#b8860b" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="absolute top-32 right-24 floating-element opacity-50" style={{ animationDelay: '2s' }}>
        <svg width="60" height="60" viewBox="0 0 100 100" className="ornament-svg">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" strokeWidth="2"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="#d4af37" strokeWidth="1"/>
          <circle cx="50" cy="50" r="10" fill="#d4af37"/>
        </svg>
      </div>
      
      <div className="absolute bottom-24 left-32 floating-element opacity-40" style={{ animationDelay: '4s' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" className="ornament-svg">
          <path d="M50 5 L55 35 L85 35 L63 53 L68 83 L50 65 L32 83 L37 53 L15 35 L45 35 Z" 
                fill="none" stroke="#d4af37" strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-4xl fade-in-up visible">
        {/* Ornamental Header */}
        <div className="mb-8">
          <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto ornament-svg">
            <path d="M20 30 Q50 10 100 30 Q150 10 180 30 Q150 50 100 30 Q50 50 20 30" 
                  fill="none" stroke="#d4af37" strokeWidth="2"/>
            <circle cx="100" cy="30" r="8" fill="#d4af37"/>
            <circle cx="60" cy="25" r="4" fill="#d4af37"/>
            <circle cx="140" cy="25" r="4" fill="#d4af37"/>
          </svg>
        </div>
        
        {/* Names */}
        <div className="mb-12">
          <h1 className="elegant-script text-6xl md:text-8xl lg:text-9xl font-bold text-amber-800 mb-4 text-shadow-gold">
            Нұрғиса
          </h1>
          <div className="flex items-center justify-center my-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <span className="mx-6 text-4xl text-amber-700">&</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          <h1 className="elegant-script text-6xl md:text-8xl lg:text-9xl font-bold text-amber-800 text-shadow-gold">
            Роза
          </h1>
        </div>
        
        {/* Wedding Details */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-amber-200 max-w-2xl mx-auto mb-8">
          <div className="text-center">
            <p className="serif-elegant text-2xl text-amber-900 mb-2 font-medium">
              2025 жылдың 3 тамызы
            </p>
            <p className="serif-elegant text-xl text-amber-800 mb-4">
              жексенбі, сағат 13:00
            </p>
            <div className="w-16 h-px bg-amber-600 mx-auto mb-4"></div>
            <p className="serif-elegant text-lg text-amber-900 font-medium">
              "ДОС" мейрамханасы
            </p>
            <p className="serif-elegant text-base text-amber-800">
              Қарағанды қаласы, Хайрулла Қабжанов көшесі
            </p>
          </div>
        </div>
        
        {/* Invitation Text */}
        <div className="max-w-3xl mx-auto">
          <p className="serif-elegant text-xl md:text-2xl text-amber-900 leading-relaxed mb-4">
            Біздің ерекше күнімізбен бірге қуанышты бөлісуге
          </p>
          <p className="serif-elegant text-lg md:text-xl text-amber-800 leading-relaxed">
            сіздерді шақырамыз
          </p>
        </div>
        
        {/* Bottom Ornament */}
        <div className="mt-12">
          <svg width="150" height="40" viewBox="0 0 150 40" className="mx-auto ornament-svg">
            <path d="M10 20 Q40 5 75 20 Q110 5 140 20" 
                  fill="none" stroke="#d4af37" strokeWidth="2"/>
            <circle cx="75" cy="20" r="6" fill="#d4af37"/>
            <circle cx="45" cy="15" r="3" fill="#d4af37"/>
            <circle cx="105" cy="15" r="3" fill="#d4af37"/>
          </svg>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;