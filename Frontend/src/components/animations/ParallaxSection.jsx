import React from 'react';

export default function ParallaxSection() {
  return (
    <div 
      className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519225495810-75123122154b?auto=format&fit=crop&w=1500&q=80')` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4" data-aos="zoom-in">
        <h2 className="font-serif text-4xl md:text-6xl italic">"Love is not just looking at each other, it's looking in the same direction."</h2>
        <p className="mt-6 tracking-[0.5em] uppercase text-xs text-luxury-gold">— Antoine de Saint-Exupéry</p>
      </div>
    </div>
  );
}