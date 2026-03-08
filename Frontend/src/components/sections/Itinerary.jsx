import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

export default function Itinerary() {
  const events = [
    { title: "The Muhurtham", time: "9:00 AM", date: "Dec 4, 2026", loc: "Main Mandapam", desc: "Traditional South Indian Ceremony" },
    { title: "Grand Feast", time: "12:30 PM", date: "Dec 4, 2026", loc: "Royal Dining Hall", desc: "A celebration of flavors" },
    { title: "Reception", time: "6:30 PM", date: "Dec 4, 2026", loc: "Palace Ballroom", desc: "Music, Dance, and Toast" }
  ];

  return (
    <section id="itinerary" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-5xl italic text-gray-800">The Celebration</h2>
          <p className="text-luxury-gold tracking-[0.3em] uppercase text-[10px] mt-4 font-bold">Mark Your Calendars</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((ev, i) => (
            <div key={i} className="p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 bg-[#FAF9F6] group relative overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <ExternalLink size={20} className="text-luxury-gold" />
              </div>
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-500">
                <Calendar size={24} />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-gray-800">{ev.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{ev.desc}</p>
              
              <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex items-center text-gray-600 text-xs gap-3">
                  <Clock size={14} className="text-luxury-gold" /> {ev.time}
                </div>
                <div className="flex items-center text-gray-600 text-xs gap-3">
                  <MapPin size={14} className="text-luxury-gold" /> {ev.loc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}