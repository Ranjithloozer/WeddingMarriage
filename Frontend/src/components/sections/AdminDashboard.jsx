import React, { useState, useEffect } from 'react';
import { X, Users, Music, CheckCircle } from 'lucide-react';

export default function AdminDashboard({ onClose }) {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/rsvp');
        const data = await res.json();
        setGuests(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch guest list");
        setLoading(false);
      }
    };
    fetchGuests();
  }, []);

  return (
    <div className="fixed inset-0 z-[500] bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#D4AF37] rounded-lg">
            <Users className="text-white" size={20} />
          </div>
          <h1 className="font-serif text-xl font-bold">Wedding Guest List</h1>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X size={24} />
        </button>
      </div>

      {/* Stats Table */}
      <div className="p-8 flex-1 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#D4AF37]">
            <p className="text-gray-500 text-xs uppercase tracking-widest">Total RSVPs</p>
            <p className="text-3xl font-bold mt-1">{guests.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <p className="text-gray-500 text-xs uppercase tracking-widest">Total Headcount</p>
            <p className="text-3xl font-bold mt-1">
              {guests.reduce((acc, g) => acc + (g.guests || 1), 0)}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500">Name</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500">Guests</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500">Attending</th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500">Song Request</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {loading ? (
                <tr><td colSpan="4" className="text-center py-10">Loading guests...</td></tr>
              ) : guests.map((guest) => (
                <tr key={guest._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{guest.name}</td>
                  <td className="px-6 py-4">{guest.guests}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] uppercase font-bold ${
                      guest.attending === 'yes' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {guest.attending}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 italic">"{guest.songRequest || 'None'}"</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}