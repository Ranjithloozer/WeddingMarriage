import React from 'react';

const events = [
  { year: '2022', title: 'First Encounter', desc: 'A rainy day in the library where it all began.' },
  { year: '2024', title: 'The Proposal', desc: 'Under the northern lights, a promise was made.' },
  { year: '2026', title: 'The Big Day', desc: 'Two souls become one forever.' },
];

export default function Timeline() {
  return (
    <div className="relative border-l border-luxury-gold/30 ml-4 space-y-20">
      {events.map((event, index) => (
        <div 
          key={index} 
          className="relative pl-10" 
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-luxury-gold ring-4 ring-white" />
          <span className="text-xs font-bold tracking-widest text-luxury-gold">{event.year}</span>
          <h4 className="font-serif text-2xl my-2 italic">{event.title}</h4>
          <p className="text-gray-600 max-w-md leading-relaxed">{event.desc}</p>
        </div>
      ))}
    </div>
  );
}