'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Sun, Heart, ShieldCheck, Star } from 'lucide-react';

const sliderImages = [
  '/images/new/Gemini_Generated_Image_13t2xf13t2xf13t2.png',
  '/images/new/Gemini_Generated_Image_21x0sn21x0sn21x0.png',
  '/images/slider/3506b2579b09ebc08a5728b8b3038fd9-cc_ft_768.webp',
  '/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp',
  '/images/slider/5e95dc08f5039b7ae28f2725e206c54b-cc_ft_768.webp',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[850px] w-full overflow-hidden flex items-center justify-center bg-[#1B365D]">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full"> 
               <motion.div 
                 className="absolute inset-0 w-full h-full"
                 initial={{ scale: 1 }}
                 animate={{ scale: 1.04 }}
                 transition={{ duration: 6, ease: "linear" }}
               >
                 <Image
                   src={sliderImages[currentSlide]}
                   alt="Luxury Senior Living Background"
                   fill
                   priority={true}
                   className="object-cover brightness-105 contrast-110 saturate-[1.1]"
                   sizes="100vw"
                 />
               </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Multi-Layer Overlays for Text Readability */}
        {/* 1. Deep Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 z-10" />

        {/* 2. Bottom Fade to Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1B365D]/90 z-10" />

        {/* 3. Subtle Blue Glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[#7DD3FC]/15 rounded-full blur-[140px] z-[11]" />
      </div>

      <div className="relative z-30 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">

        {/* Business Mission Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
            <Sun size={18} className="text-[#7DD3FC]" />
            <span className="text-white text-[11px] font-bold uppercase tracking-[0.3em] drop-shadow-sm">Bringing Sunshine to Senior Living</span>
          </div>
        </motion.div>

        {/* Heading Section - Added strong text shadows for visibility on white bg elements */}
        <div className="space-y-6 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-8xl lg:text-9xl text-white font-bold leading-[0.95] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            Peaceful <span className="text-white/60">&</span> <br />
            <span className="italic font-normal text-[#7DD3FC] drop-shadow-[0_0_30px_rgba(125,211,252,0.6)]">Compassionate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white max-w-3xl mx-auto font-semibold leading-relaxed tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
          >
            We are honored to provide safe, high-quality care that brings <span className="text-[#7DD3FC] drop-shadow-none">joy</span> and <span className="text-[#7DD3FC] drop-shadow-none">happiness</span> to your loved ones in the heart of Plano.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative bg-[#0284C7] text-white px-12 py-6 rounded-full text-lg font-bold transition-all duration-700 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(2,132,199,0.5)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative flex items-center gap-3">
              Schedule a Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </a>

          <a
            href="#gallery"
            className="group relative px-12 py-6 rounded-full text-lg font-bold text-white transition-all duration-500 border border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:border-white flex items-center gap-4 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#0284C7] transition-all duration-500 group-hover:scale-110">
              <Play className="w-4 h-4 fill-white" />
            </div>
            Virtual Tour
          </a>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/20 pt-10"
        >
          {['Happy', 'Peaceful', 'Joy', 'Sunshine'].map((value, i) => (
            <div key={value} className="flex flex-col items-center gap-2">
              <span className="text-[#7DD3FC] font-serif text-3xl font-bold italic drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">{value}</span>
              <span className="text-white/70 text-[10px] uppercase tracking-widest font-black drop-shadow-sm">
                {i === 0 ? 'Environment' : i === 1 ? 'Residence' : i === 2 ? 'Daily Living' : 'Energy'}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Service Card */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[10%] hidden xl:block z-20"
      >
        <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/30 flex items-center justify-center text-[#7DD3FC]">
            <Star size={24} />
          </div>
          <div className="space-y-1">
            <p className="text-white font-bold text-sm">24/7 Quality Care</p>
            <p className="text-white/50 text-xs tracking-wide">Professional Clinical Oversight</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 group cursor-pointer"
        onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-[#7DD3FC]"
          />
        </div>
        <span className="text-white/40 text-[8px] uppercase tracking-[0.6em] font-black group-hover:text-[#7DD3FC] transition-colors">Discover</span>
      </motion.div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10" />
    </section>
  );
}
