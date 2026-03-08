import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { 
      icon: <MessageSquare size={20} />, 
      label: "WhatsApp", 
      color: "bg-[#25D366]", 
      link: "https://wa.me/919361211458?text=Hi! I am coming to your wedding!" 
    },
    { 
      icon: <MapPin size={20} />, 
      label: "Location", 
      color: "bg-[#EA4335]", 
      link: "https://maps.google.com/?q=Grand+Palace+Hall+Tamil+Nadu" 
    },
    { 
      icon: <Phone size={20} />, 
      label: "Call Groom", 
      color: "bg-[#4285F4]", 
      link: "tel:+919361211458" 
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col-reverse gap-4 mb-4">
            {actions.map((action, i) => (
              <motion.a
                key={i}
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className={`${action.color} text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center`}
              >
                {action.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#D4AF37] text-white p-5 rounded-full shadow-2xl border-2 border-white/20"
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </button>
    </div>
  );
}