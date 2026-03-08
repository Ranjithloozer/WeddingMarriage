import { motion } from 'framer-motion';

const Petal = ({ delay }) => (
  <motion.div
    initial={{ y: -10, x: Math.random() * 100 + 'vw', rotate: 0 }}
    animate={{ 
      y: '105vh', 
      rotate: 360,
      x: `calc(${Math.random() * 100}vw + ${Math.random() * 50}px)` 
    }}
    transition={{ duration: 10, repeat: Infinity, delay, ease: "linear" }}
    className="fixed pointer-events-none text-pink-200 opacity-60 z-50"
  >
    🌸
  </motion.div>
);

export default function FlowerPetals() {
  return [...Array(15)].map((_, i) => <Petal key={i} delay={i * 0.8} />);
}