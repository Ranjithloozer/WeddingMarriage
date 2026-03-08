import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-dark">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/assets/images/hero-bg.jpg" 
          className="w-full h-full object-cover scale-105"
          alt="Wedding Background" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="z-10 text-center text-white"
      >
        <span className="uppercase tracking-[0.5em] text-sm mb-4 block text-luxury-gold">Save The Date</span>
        <h1 className="font-serif text-7xl md:text-9xl mb-6 italic">Prabha & Delulu</h1>
        <div className="flex items-center justify-center gap-4 text-2xl font-light italic">
          <span className="h-[1px] w-12 bg-luxury-gold"></span>
          04 . 12 . 2026
          <span className="h-[1px] w-12 bg-luxury-gold"></span>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-luxury-gold italic"
      >
        Scroll to explore our story
      </motion.div>
    </section>
  );
}