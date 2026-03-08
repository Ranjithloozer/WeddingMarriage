import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] px-10 py-6 flex justify-between items-center bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm">
      <div className="font-serif text-2xl tracking-tighter text-luxury-dark">Prabha & Delulu</div>
      
      <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-luxury-dark">
        <a href="#story" className="hover:text-luxury-gold transition-colors">Our Story</a>
        <a href="#gallery" className="hover:text-luxury-gold transition-colors">Gallery</a>
        <a href="#rsvp" className="hover:text-luxury-gold transition-colors">RSVP</a>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-luxury-dark">
        MENU
      </button>
    </nav>
  );
}