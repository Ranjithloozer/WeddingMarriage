import React from 'react';
import { Palette } from 'lucide-react';

export default function StyleGuide() {
  const colors = [
    { hex: "#D4AF37", name: "Luxury Gold" },
    { hex: "#FFFFFF", name: "Pure White" },
    { hex: "#1A1A1B", name: "Midnight Black" }
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
        <Palette className="mx-auto text-[#D4AF37] mb-6" size={40} />
        <h2 className="font-serif text-4xl italic mb-4">Dress Code</h2>
        <p className="text-gray-500 text-sm mb-12 uppercase tracking-widest">Theme: Royal Elegance</p>
        
        <div className="flex justify-center gap-8">
          {colors.map((color, i) => (
            <div key={i} className="group cursor-help">
              <div 
                className="w-20 h-20 rounded-full shadow-lg mb-4 border-4 border-gray-50 transition-transform group-hover:scale-110" 
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{color.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}