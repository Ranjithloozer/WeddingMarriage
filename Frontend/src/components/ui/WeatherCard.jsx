import React from 'react';
import { CloudSun } from 'lucide-react';

export default function WeatherCard() {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl text-center mt-8" data-aos="fade-up">
      <CloudSun className="mx-auto text-[#D4AF37] mb-2" size={32} />
      <h5 className="text-[10px] uppercase tracking-widest text-gray-400">Expected Weather</h5>
      <p className="text-xl font-serif text-white mt-1">28°C • Pleasant</p>
      <p className="text-[8px] text-gray-500 italic mt-2">Perfect for a winter wedding in Tamil Nadu</p>
    </div>
  );
}