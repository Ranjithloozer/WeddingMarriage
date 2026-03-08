import React from 'react';

export default function VenueMap() {
  return (
    <section id="venue" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl italic">The Venue</h2>
          <p className="text-luxury-accent uppercase tracking-widest text-xs mt-4">Grand Palace, Chennai</p>
        </div>
        
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.5!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTInMDAnMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2)' }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}