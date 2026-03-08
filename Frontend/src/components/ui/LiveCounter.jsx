import React, { useState, useEffect } from 'react';

export default function LiveCounter() {
  const [count, setCount] = useState(0);

  // 1. Fetch the count from MongoDB Atlas
  const fetchCount = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/rsvp');
      if (res.ok) {
        const data = await res.json();
        const total = data.reduce((acc, guest) => acc + (guest.guests || 1), 0);
        setCount(total);
      }
    } catch (err) {
      console.log("Counter fetch failed");
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  // 2. NEW: The actual function to SAVE data
  const submitRSVP = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/rsvp', {
        method: 'POST', // Forces a POST request instead of GET
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ RSVP Confirmed! See you on Dec 4th!");
        fetchCount(); // Refresh the counter instantly
      } else {
        const errorData = await response.json();
        console.error("❌ Submission failed:", errorData.message);
      }
    } catch (err) {
      console.error("❌ Network Error:", err);
    }
  };

  return (
    <div className="py-10 text-center bg-luxury-dark text-white">
      <h4 className="text-[10px] uppercase tracking-[0.5em] opacity-50">Guests Confirmed</h4>
      <p className="text-5xl font-serif text-[#D4AF37] mt-2">{count}</p>
      {/* Ensure your form calls submitRSVP(data) when clicked! */}
    </div>
  );
}