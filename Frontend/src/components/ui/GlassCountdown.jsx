import React, { useState, useEffect } from 'react';

export default function GlassCountdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Mins: Math.floor((difference / 1000 / 60) % 60),
          Secs: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 md:gap-8 px-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl w-20 md:w-28 text-center shadow-xl">
          <span className="block text-2xl md:text-4xl font-serif text-luxury-gold italic">{value}</span>
          <span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/70 mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}