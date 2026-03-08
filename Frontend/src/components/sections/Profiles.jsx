import React from 'react';
import { motion } from 'framer-motion';

export default function Profiles() {
  return (
    <div className="grid md:grid-cols-2 gap-0 min-h-[600px] bg-white">
      {/* Groom */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center p-12 border-r border-luxury-gold/10"
      >
        <div className="w-64 h-80 bg-gray-200 mb-8 overflow-hidden rounded-t-full border-4 border-luxury-gold/20">
          <img src="assets/images/groom.png" alt="Groom" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
        </div>
        <h3 className="font-serif text-4xl text-luxury-dark italic">Prabha</h3>
        <p className="text-luxury-accent uppercase tracking-[0.3em] text-[10px] mt-2 font-bold">The Groom</p>
        <p className="mt-6 text-center text-gray-500 max-w-xs text-sm leading-relaxed font-light">
          A software architect with a heart for adventure and a soul bound to Delulu.
        </p>
      </motion.div>

      {/* Bride */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center p-12"
      >
        <div className="w-64 h-80 bg-gray-200 mb-8 overflow-hidden rounded-t-full border-4 border-luxury-gold/20">
          <img src="assets/images/image.png" alt="Bride" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
        </div>
        <h3 className="font-serif text-4xl text-luxury-dark italic">Delulu</h3>
        <p className="text-luxury-accent uppercase tracking-[0.3em] text-[10px] mt-2 font-bold">The Bride</p>
        <p className="mt-6 text-center text-gray-500 max-w-xs text-sm leading-relaxed font-light">
          An artist whose canvas became complete the moment she met Prabha.
        </p>
      </motion.div>
    </div>
  );
}