import React from 'react';

export default function Squad() {
  const squad = [
    { name: "Nafees", role: "The Hype Man", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Ranjith", role: "Chief Bridesmaid", img: "assets/images/ranjith.jpeg" },
    { name: "Ram", role: "Problem Solver", img: "https://i.pravatar.cc/150?u=3" }
  ];

  return (
    <section className="py-24 bg-[#1A1A1B] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-5xl text-center italic mb-16" data-aos="fade-down">The Wedding Squad</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {squad.map((member, i) => (
            <div key={i} className="text-center group" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-luxury-gold/30 group-hover:border-luxury-gold p-1 transition-all duration-500 mb-4">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h4 className="font-serif text-xl">{member.name}</h4>
              <p className="text-[9px] uppercase tracking-widest text-luxury-gold mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}