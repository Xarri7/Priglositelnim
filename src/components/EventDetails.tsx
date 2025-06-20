import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
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
            Детали торжества
          </h2>
          <p className="serif-elegant text-xl text-amber-700 italic">
            Той туралы мәліметтер
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Date */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-amber-200 text-center relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <svg width="30" height="30" viewBox="0 0 30 30" className="ornament-svg">
                <circle cx="15" cy="15" r="10" fill="none" stroke="#d4af37" strokeWidth="1"/>
                <circle cx="15" cy="15" r="5" fill="#d4af37"/>
              </svg>
            </div>
            
            <div className="mt-8 mb-6">
              <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            </div>
            <h3 className="serif-elegant text-xl font-bold text-amber-900 mb-3">Дата</h3>
            <p className="serif-elegant text-lg text-amber-800 font-medium">3 августа 2025</p>
            <p className="serif-elegant text-base text-amber-700">воскресенье</p>
          </div>

          {/* Time */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-amber-200 text-center relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <svg width="30" height="30" viewBox="0 0 30 30" className="ornament-svg">
                <path d="M15 5 L18 12 L25 12 L20 17 L22 24 L15 20 L8 24 L10 17 L5 12 L12 12 Z" 
                      fill="#d4af37"/>
              </svg>
            </div>
            
            <div className="mt-8 mb-6">
              <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            </div>
            <h3 className="serif-elegant text-xl font-bold text-amber-900 mb-3">Время</h3>
            <p className="serif-elegant text-lg text-amber-800 font-medium">13:00</p>
            <p className="serif-elegant text-base text-amber-700">начало торжества</p>
          </div>

          {/* Location */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-amber-200 text-center relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <svg width="30" height="30" viewBox="0 0 30 30" className="ornament-svg">
                <circle cx="15" cy="15" r="8" fill="none" stroke="#d4af37" strokeWidth="2"/>
                <circle cx="15" cy="15" r="3" fill="#d4af37"/>
              </svg>
            </div>
            
            <div className="mt-8 mb-6">
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            </div>
            <h3 className="serif-elegant text-xl font-bold text-amber-900 mb-3">Место</h3>
            <p className="serif-elegant text-lg text-amber-800 font-medium">Ресторан "ДОС"</p>
            <p className="serif-elegant text-base text-amber-700">г. Караганда</p>
            <p className="serif-elegant text-sm text-amber-600">ул. Хайрулла Кабжанова</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-10 shadow-lg border border-amber-200 text-center">
            <svg width="100" height="40" viewBox="0 0 100 40" className="mx-auto ornament-svg mb-6">
              <path d="M10 20 Q30 5 50 20 Q70 5 90 20" fill="none" stroke="#d4af37" strokeWidth="2"/>
              <circle cx="50" cy="20" r="6" fill="#d4af37"/>
              <circle cx="25" cy="15" r="3" fill="#d4af37"/>
              <circle cx="75" cy="15" r="3" fill="#d4af37"/>
            </svg>
            
            <h3 className="serif-elegant text-2xl font-bold text-amber-900 mb-6">Важная информация</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h4 className="serif-elegant font-bold text-amber-900 mb-2">Дресс-код</h4>
                <p className="serif-elegant text-amber-800 text-sm">Торжественный стиль</p>
                <p className="serif-elegant text-amber-700 text-xs mt-1">Приветствуются национальные наряды</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h4 className="serif-elegant font-bold text-amber-900 mb-2">Парковка</h4>
                <p className="serif-elegant text-amber-800 text-sm">Бесплатная парковка</p>
                <p className="serif-elegant text-amber-700 text-xs mt-1">возле ресторана</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;