import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Copy, Check } from 'lucide-react';

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);
  const upiId = "8940XXXXXX@ybl"; //

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="registry" className="py-24 bg-white text-center">
      <div className="max-w-2xl mx-auto px-6" data-aos="fade-up">
        <Gift className="mx-auto text-luxury-gold mb-6" size={48} />
        <h2 className="font-serif text-4xl italic mb-6">Wedding Registry</h2>
        <p className="text-gray-500 text-sm mb-10 leading-relaxed font-light">
          Your presence is our greatest gift. If you wish to honor us with a token of love, you may use our digital registry.
        </p>
        
        <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-luxury-gold/20 shadow-inner relative overflow-hidden group">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">UPI ID for Ranjith</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl font-serif text-luxury-dark tracking-wider">{upiId}</span>
            <button onClick={copyToClipboard} className="text-luxury-gold hover:scale-110 transition-transform">
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
          {copied && <p className="text-[10px] text-green-500 mt-2 font-bold uppercase tracking-widest">Copied!</p>}
        </div>
      </div>
    </section>
  );
}