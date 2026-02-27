'use client';

import { Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative overflow-hidden font-sans">
      {/* Top Section - Light Blue */}
      <div className="bg-[#F0F9FF] pt-20 pb-32 text-[#1B365D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          
          <h2 className="font-serif text-6xl md:text-7xl mb-6 text-[#1B365D]">Contact Us</h2>
          <p className="text-[#1B365D]/70 text-lg italic mb-20 max-w-2xl mx-auto">
            "Redefining the standard of clinical excellence and residential grace in the heart of Plano."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            
            {/* Hours */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#1B365D] text-lg uppercase tracking-wide">Hours</h3>
              <div className="text-[#1B365D]/80 space-y-1">
                <p>Monday - Friday</p>
                <p>9 AM - 6 PM</p>
                <p className="mt-2 text-[#1B365D]/80">Saturday - Sunday</p>
                <p>10 AM - 4 PM</p>
                <p className="text-sm italic mt-2 text-[#0284C7] font-medium">* 24/7 Professional Clinical Care</p>
              </div>
            </div>

            {/* Mailing Address */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#1B365D] text-lg uppercase tracking-wide">Mailing Address</h3>
              <div className="text-[#1B365D]/80 space-y-1">
                <p>2108 Winona Dr.</p>
                <p>Plano, TX</p>
                <p>75074</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2108+Winona+Dr+Plano+TX+75074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#0284C7] hover:underline text-sm font-medium mt-2"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#1B365D] text-lg uppercase tracking-wide">Phone</h3>
              <div className="text-[#1B365D]/80 space-y-1 flex flex-col items-center">
                <a href="tel:9452685755" className="hover:text-[#0284C7] transition-colors">945-268-5755</a>
                <a href="tel:2145183242" className="hover:text-[#0284C7] transition-colors">214-518-3242</a>
              </div>
            </div>

             {/* Email */}
             <div className="space-y-4">
              <h3 className="font-bold text-[#1B365D] text-lg uppercase tracking-wide">Email</h3>
              <div className="text-[#1B365D]/80 space-y-1 flex flex-col items-center">
                <a href="mailto:faithseniormom@gmail.com" className="hover:text-[#0284C7] transition-colors break-all">
                  faithseniormom@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

       {/* Wave SVG Separator */}
       <div className="w-full relative -mt-24 pointer-events-none">
        <svg
            className="w-full h-auto block relative z-10"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             {/* Bottom fill */}
           <path d="M0,50 C320,130 420,-30 720,50 C1020,130 1120,-30 1440,50 V100 H0 V50 Z" fill="#E5E5E5" />
             {/* Dashed line on top */}
            <path d="M0,50 C320,130 420,-30 720,50 C1020,130 1120,-30 1440,50" 
                  stroke="#7DD3FC" 
                  strokeWidth="4" 
                  strokeDasharray="12 12"
                  fill="none"
            />
        </svg>
        </div>
        
        {/* Bottom Section - Grey */}
        <div className="bg-[#E5E5E5] pt-8 pb-12 text-[#1B365D]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
            
            {/* Left: Brand Placeholder */}
            <div className="order-2 md:order-1 w-48 h-48 bg-white/50 border border-white flex items-center justify-center p-4 shadow-sm">
                 <div className="text-center">
                    <div className="w-12 h-12 bg-[#1B365D] rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold mx-auto mb-2">
                        Y
                    </div>
                    <span className="font-serif text-lg font-bold block text-[#1B365D]">Yaricho Senior <br/> Home Care</span>
                 </div>
            </div>

            {/* Center: Social Icons */}
            <div className="order-1 md:order-2 flex gap-12">
                 <a href="mailto:faithseniormom@gmail.com" className="text-[#0284C7] hover:scale-110 transition-transform">
                    <Mail size={32} strokeWidth={1.5} />
                 </a>
                 <a href="tel:9452685755" className="text-[#0284C7] hover:scale-110 transition-transform">
                    <Phone size={32} strokeWidth={1.5} />
                 </a>
                 <a href="#" className="text-[#0284C7] hover:scale-110 transition-transform">
                    <Instagram size={32} strokeWidth={1.5} />
                 </a>
                 <a href="#" className="text-[#0284C7] hover:scale-110 transition-transform">
                    <Facebook size={32} strokeWidth={1.5} />
                 </a>
            </div>

            {/* Right: Copyright */}
            <div className="order-3 text-center md:text-right text-xs text-[#1B365D]/60 space-y-1">
                <p>All Rights Reserved | &copy; {new Date().getFullYear()} | Yaricho Senior Home Care</p>
                <p>Excellence in Plano Senior Living</p>
                <button onClick={scrollToTop} className="flex items-center gap-2 justify-center md:justify-end hover:text-[#0284C7] mt-4 ml-auto w-full md:w-auto">
                    Back to Top <ArrowUp size={12} />
                </button>
            </div>
            </div>
      </div>

    </footer>
  );
}
