import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import InvitationQR from './InvitationQR';

export default function SuccessModal({ isOpen, guestName, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="relative bg-white max-w-sm w-full p-8 text-center rounded-2xl shadow-2xl border-t-8 border-[#D4AF37]"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-green-600" size={32} />
            </div>
            
            <h2 className="font-serif text-3xl text-gray-900 mb-2 italic">Thank You, {guestName}!</h2>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-8">We can't wait to see you</p>
            
            <div className="bg-gray-50 p-4 rounded-xl mb-6">
              <InvitationQR guestName={guestName} />
              <p className="text-[9px] text-gray-400 mt-4 uppercase tracking-[0.2em]">Save this QR for entry</p>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-3 bg-[#1A1A1B] text-white text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] transition-colors rounded-lg"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}