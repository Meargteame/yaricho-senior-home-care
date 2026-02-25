'use client';

import { Phone, Mail, MapPin, Instagram, Facebook, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#1B365D] text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0284C7]/10 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1B365D] font-serif text-2xl font-bold shadow-xl">
                Y
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-tight">Yaricho</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">Senior Home Care</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-lg italic">
              "Redefining the standard of clinical excellence and residential grace in the heart of Plano."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0284C7] hover:border-[#0284C7] transition-all duration-500 hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0284C7] hover:border-[#0284C7] transition-all duration-500 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="font-serif text-2xl font-bold text-[#7DD3FC]">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={18} className="text-[#7DD3FC]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-widest text-[#7DD3FC] font-bold">Inquiries</p>
                  <p className="text-lg">945-268-5755</p>
                  <p className="text-lg">214-518-3242</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={18} className="text-[#7DD3FC]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-widest text-[#7DD3FC] font-bold">Email</p>
                  <a href="mailto:faithseniormom@gmail.com" className="text-lg hover:text-[#7DD3FC] transition-colors">
                    faithseniormom@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-8">
            <h4 className="font-serif text-2xl font-bold text-[#7DD3FC]">Residence</h4>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin size={18} className="text-[#7DD3FC]" />
              </div>
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-widest text-[#7DD3FC] font-bold">Find Us</p>
                <p className="text-lg leading-relaxed">
                  2108 Winona Dr.<br />
                  Plano, TX 75074
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2108+Winona+Dr+Plano+TX+75074"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white/50 hover:text-[#7DD3FC] transition-colors border-b border-white/20 pb-1 text-sm tracking-widest uppercase font-bold"
            >
              Get Directions
            </a>
          </div>

          {/* Navigation & Hours */}
          <div className="space-y-8">
            <h4 className="font-serif text-2xl font-bold text-[#7DD3FC]">Availability</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock size={18} className="text-[#7DD3FC]" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-widest text-[#7DD3FC] font-bold">Visiting Hours</p>
                  <p className="text-sm text-white/80">Mon - Fri: 9 AM - 6 PM</p>
                  <p className="text-sm text-white/80">Sat - Sun: 10 AM - 4 PM</p>
                  <p className="text-[10px] text-[#7DD3FC] uppercase tracking-tighter pt-2 border-t border-white/10">
                    * 24/7 Professional Clinical Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-sm tracking-wide order-2 md:order-1">
            &copy; {new Date().getFullYear()} Yaricho Senior Home Care. Excellence in Plano.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/60 hover:text-[#7DD3FC] transition-colors order-1 md:order-2"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Return to Top</span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#7DD3FC] transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
