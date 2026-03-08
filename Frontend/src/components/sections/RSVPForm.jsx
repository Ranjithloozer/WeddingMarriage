import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RSVPForm({ onSubmissionSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    attending: 'yes',
    songRequest: '' // Changed from message to songRequest to match your backend model
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 1. Pass the name to the Success Modal
        onSubmissionSuccess(formData.name); 
        
        // 2. Reset the form state
        setFormData({
          name: '',
          guests: 1,
          attending: 'yes',
          songRequest: ''
        });

        // 3. Clear the physical input fields (Resetting value attributes)
        e.target.reset(); 
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Network error. Please check if your backend is running.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto p-10 bg-white shadow-2xl border-t-4 border-[#D4AF37]"
    >
      <h3 className="font-serif text-3xl text-gray-900 text-center mb-8 italic">Kindly Respond</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Your Full Name</label>
          <input 
            type="text" 
            required
            value={formData.name} // Added value to ensure it clears after submit
            placeholder="Enter your name"
            className="w-full border-b border-gray-200 py-2 focus:border-[#D4AF37] outline-none transition-colors text-gray-900 placeholder:text-gray-300 bg-transparent"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Number of Guests</label>
            <select 
              value={formData.guests}
              className="w-full border-b border-gray-200 py-2 bg-white outline-none text-gray-900 appearance-none cursor-pointer"
              onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num} className="text-gray-900 bg-white">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold">Attending?</label>
            <select 
              value={formData.attending}
              className="w-full border-b border-gray-200 py-2 bg-white outline-none text-gray-900 appearance-none cursor-pointer"
              onChange={(e) => setFormData({...formData, attending: e.target.value})}
            >
              <option value="yes" className="text-gray-900 bg-white">Joyfully Accept</option>
              <option value="no" className="text-gray-900 bg-white">Regretfully Decline</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#1A1A1B] text-white py-4 tracking-[0.3em] uppercase text-[10px] font-bold hover:bg-[#D4AF37] transition-all duration-500 mt-4 shadow-lg"
        >
          Submit 
        </button>
      </form>
    </motion.div>
  );
}