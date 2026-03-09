import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component Imports
import Hero from './components/sections/Hero';
import FlowerPetals from './components/animations/FlowerPetals';
import Timeline from './components/sections/Timeline';
import Gallery from './components/sections/Gallery';
import RSVPForm from './components/sections/RSVPForm';
import InvitationQR from './components/ui/InvitationQR';
import MusicPlayer from './components/ui/MusicPlayer';
import Navbar from './components/ui/Navbar';
import ThreeRings from './components/animations/ThreeRings';
import Profiles from './components/sections/Profiles';
import VenueMap from './components/ui/VenueMap';
import Events from './components/sections/Events';
import GiftRegistry from './components/sections/GiftRegistry';
import Guestbook from './components/ui/Guestbook';
import ParallaxSection from './components/animations/ParallaxSection';
import GlassCountdown from './components/ui/GlassCountdown';
import FloatingActions from './components/ui/FloatingActions';
import StyleGuide from './components/sections/StyleGuide';
import LiveCounter from './components/ui/LiveCounter';
import SuccessModal from './components/ui/SuccessModal';
import Itinerary from './components/sections/Itinerary';
import Squad from './components/sections/Squad';
import WeatherCard from './components/ui/WeatherCard';
import AdminDashboard from './components/sections/AdminDashboard';

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [clickCount, setClickCount] = useState(0); // For secret admin access

  // Handle successful RSVP submission to Backend (MongoDB Atlas)
  const handleRSVPSuccess = async (formData) => {
    try {
     const response = await fetch('https://wedding-backend.onrender.com/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmittedData(data); 
        setIsModalOpen(true);
      } else {
        alert("Server error. Please try again later.");
      }
    } catch (error) {
      console.error("Connection failed:", error);
      setSubmittedData(formData);
      setIsModalOpen(true);
    }
  };

  // Secret Admin Trigger: Click Footer 5 times
  const handleSecretAdminTrigger = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        setIsAdminView(true);
        return 0;
      }
      return newCount;
    });
  };

  useEffect(() => {
    try {
      AOS.init({ 
        duration: 1000, 
        once: true,
        offset: 50,
        disable: window.innerWidth < 768 
      });
      AOS.refresh();
    } catch (e) {
      console.error("AOS init error:", e);
    }

    // Keyboard Shortcut (Keep as backup)
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsAdminView((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 1. Admin View Logic (Overrides everything else)
  if (isAdminView) {
    return <AdminDashboard onClose={() => setIsAdminView(false)} />;
  }

  // 2. Main Wedding Website
  return (
    <div className="bg-[#FAF9F6] min-h-screen relative selection:bg-[#D4AF37] selection:text-white">
      
      <Navbar />
      <div className="relative z-[200]">
        <MusicPlayer />
        <FloatingActions />
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <FlowerPetals />
      </div>

      <SuccessModal 
        isOpen={isModalOpen} 
        guestName={submittedData?.name} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* 1. Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeRings />
        </div>
        <div className="text-center z-10 space-y-8 px-6">
          <h1 className="text-6xl md:text-9xl font-serif text-[#D4AF37] italic drop-shadow-sm" data-aos="zoom-in">
            Prabha & Empty
          </h1>
          <div data-aos="fade-up" data-aos-delay="400">
            <GlassCountdown targetDate="2026-12-04" />
          </div>
          
          <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="600">
            <p className="text-gray-800 tracking-[0.6em] uppercase text-[10px] md:text-xs opacity-70">
              Inviting You To Celebrate Our Union
            </p>
            <div className="max-w-[200px]">
               <WeatherCard />
            </div>
          </div>
        </div>
      </section>

      <Profiles />
      <ParallaxSection />
      <div className="relative z-10"><Itinerary /></div>

      <section id="story" className="py-24 max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-5xl italic text-gray-800">Our Journey</h2>
          <div className="h-px w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        <Timeline />
      </section>

      <Squad />
      <Events />

      <section id="gallery" className="py-12 bg-white relative z-10">
        <Gallery />
      </section>
      <StyleGuide />

      <LiveCounter />
      <Guestbook />
      <VenueMap />
      <GiftRegistry />

      {/* 7. RSVP Section */}
      <section id="rsvp" className="py-24 bg-[#1A1A1B] text-white overflow-hidden relative z-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-serif text-4xl italic text-[#D4AF37]">Will You Attend?</h2>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-2">
              Please respond by November 2026
            </p>
          </div>
          
          <div className="relative z-30">
            <RSVPForm onSubmissionSuccess={handleRSVPSuccess} />
          </div>

          {submittedData && (
            <div className="flex flex-col items-center mt-12" data-aos="zoom-in">
               <h3 className="font-serif text-2xl mb-4 italic text-[#D4AF37]">
                 See You Soon, {submittedData.name}!
               </h3>
               <div className="bg-white p-4 rounded-xl shadow-xl">
                 <InvitationQR guestName={submittedData.name} />
               </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. Footer with Secret Admin Trigger */}
      <footer 
        onClick={handleSecretAdminTrigger}
        className="py-16 text-center bg-[#FAF9F6] border-t border-gray-100 relative z-10 cursor-pointer"
      >
        <div className="font-serif italic text-3xl text-gray-800 mb-4">P & E</div>
        <p className="text-gray-400 uppercase tracking-[0.4em] text-[9px]">
          Designed for Prabha & Empty — December 4, 2026
        </p>
        <p className="text-gray-300 text-[8px] mt-4 tracking-widest uppercase">
          Crafted with Love — 2026
        </p>
      </footer>
    </div>
  );
}

export default App;