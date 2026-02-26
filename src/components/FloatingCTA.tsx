'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
        {/* Phone Button (Mobile optimize) */}
      <a
        href="tel:9452685755"
        className="group flex items-center justify-center w-14 h-14 bg-white text-[#1B365D] rounded-full shadow-lg border-2 border-[#1B365D] hover:bg-[#F0F9FF] transition-all hover:scale-110"
        aria-label="Call Us"
      >
        <Phone size={24} className="group-hover:rotate-12 transition-transform" />
      </a>

      {/* Book Tour Button - Main CTA */}
      <a
        href="#contact"
        className="group flex items-center gap-3 bg-[#1B365D] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#0284C7] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      >
        <Calendar size={20} className="text-[#7DD3FC]" />
        <span className="font-sans font-bold tracking-wide text-sm hidden sm:block">
          BOOK A TOUR
        </span>
        {/* Mobile only icon fallback if text is hidden, but here we hide text on very small screens if needed, 
            though 'hidden sm:block' handles it cleanly. */}
      </a>
    </div>
  );
}
