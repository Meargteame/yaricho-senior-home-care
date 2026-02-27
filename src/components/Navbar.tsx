'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#1B365D] rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold group-hover:bg-[#0284C7] transition-all duration-500 shadow-inner">
              Y
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight leading-none text-[#1B365D]">
                Yaricho Senior Home Care
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-widest uppercase text-gray-800 hover:text-[#0284C7] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0284C7] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#1B365D] hover:bg-[#0284C7] text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-white/10"
            >
              Consult Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="text-[#1B365D]" size={32} />
          </button>
        </div>
      </div>

      {/* Side-Drawer Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-[#F8FAFC] z-[70] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif text-3xl font-bold text-[#1B365D]">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-[#1B365D] transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col space-y-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-serif text-gray-800 hover:text-[#1B365D] transition-colors flex items-center justify-between"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <div className="w-2 h-2 rounded-full bg-[#0284C7]/30" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-gray-100 flex flex-col gap-6">
                <a
                  href="#contact"
                  className="bg-[#1B365D] text-white py-4 rounded-xl text-center font-bold tracking-widest uppercase shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule a Tour
                </a>
                <div className="flex items-center gap-4 text-gray-600">
                  <Phone size={20} className="text-[#0284C7]" />
                  <span className="font-semibold text-lg">945-268-5755</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
