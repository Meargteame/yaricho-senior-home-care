'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const locations = [
  {
    id: 'east',
    name: 'Yaricho Senior Home Care',
    address: '2108 Winona Dr, Plano, TX 75074',
    features: ['Manicured Gardens', 'Private Luxury Suites', 'Serene Neighborhood'],
    description: "A sanctuary of clinical excellence and residential grace, offering a personalized experience in the heart of Plano.",
    images: [
      '/images/slider/b80d4f7a618f5384865a2a8785555c8b-cc_ft_384.webp',
      '/images/slider/cead591f2af85cbe816555d2a6c6fbc4-cc_ft_384.webp',
      '/images/slider/e21fda4dc51a0a9d139971e4c850947e-cc_ft_384.webp',
    ]
  }
];

import Image from 'next/image';

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-[1rem] shadow-xl group bg-gray-200 border-4 border-white">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
           <Image
            src={images[currentIndex]}
            alt="Luxury Senior Home Location"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-700 ${idx === currentIndex ? 'bg-[#0284C7] w-10' : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Locations() {
  return (
    <section id="locations" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#0284C7] font-bold tracking-[0.3em] uppercase text-sm block mb-4"
          >
            Our Communities
          </motion.span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1B365D] font-bold">Premier Destinations</h2>
        </div>

        <div className="space-y-24">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-12"
            >
              <div className="w-full">
                <ImageSlider images={location.images} />
              </div>

              <div className="w-full max-w-4xl mx-auto space-y-8 text-center px-4">
                <div className="space-y-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2108+Winona+Dr+Plano+TX+75074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0284C7] font-bold text-sm tracking-widest uppercase hover:underline"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>{location.address}</span>
                  </a>
                  <h3 className="font-serif text-4xl md:text-5xl text-[#1B365D] font-bold leading-tight">
                    {location.name}
                  </h3>
                </div>

                <p className="text-gray-500 text-xl leading-relaxed font-medium">
                  {location.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {location.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1B365D] font-bold text-sm uppercase tracking-wide">
                      <div className="w-6 h-6 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#1B365D]">
                        <CheckCircle size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2108+Winona+Dr+Plano+TX+75074"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Location on Google Maps"
                    className="group inline-flex items-center gap-3 bg-[#1B365D] hover:bg-[#0284C7] text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-500 shadow-xl"
                  >
                    View Availability
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

