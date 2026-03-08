import React from 'react';
import { motion } from 'framer-motion';

const schedule = [
  { time: '09:00 AM', event: 'Traditional Muhurtham', loc: 'Main Mandapam' },
  { time: '06:30 PM', event: 'Grand Reception', loc: 'Palace Ballroom' },
  { time: '08:30 PM', event: 'Dinner & Music', loc: 'Royal Gardens' },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center font-serif text-5xl italic mb-16" data-aos="fade-up">Wedding Events</h2>
        <div className="space-y-8">
          {schedule.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="flex items-center justify-between border-b border-luxury-gold/20 py-8"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div>
                <span className="text-luxury-gold font-bold tracking-widest text-xs uppercase">{item.time}</span>
                <h4 className="font-serif text-2xl mt-1">{item.event}</h4>
              </div>
              <p className="text-gray-400 italic text-sm">{item.loc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}