import React from 'react';
import { CalendarPlus } from 'lucide-react';

export default function CalendarButton() {
  const addToCalendar = () => {
    const event = {
      title: "Prabha & Delulu Wedding", //
      start: "20261204T090000",
      end: "20261204T220000",
      location: "Grand Palace Hall, Tamil Nadu",
      details: "Joining the celebration of Prabha & Delulu!"
    };
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      onClick={addToCalendar}
      className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
    >
      <CalendarPlus size={16} /> Save the Date
    </button>
  );
}