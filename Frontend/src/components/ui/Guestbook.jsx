import React from 'react';
import { motion } from 'framer-motion';

const wishes = [
  { name: "Suresh", message: "Congratulations Prabha! So happy for you both!" },
  { name: "Anitha", message: "Wishing you a lifetime of happiness and love." },
  { name: "Vijay", message: "Can't wait for the grand feast at the Palace!" }
];

export default function Guestbook() {
  return (
    <section className="py-24 bg-luxury-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-5xl italic mb-12">Wishes from Loved Ones</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {wishes.map((wish, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 shadow-sm border-l-4 border-luxury-gold min-w-[250px] text-left"
            >
              <p className="text-gray-600 italic text-sm">"{wish.message}"</p>
              <p className="mt-4 font-serif text-luxury-dark">— {wish.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}