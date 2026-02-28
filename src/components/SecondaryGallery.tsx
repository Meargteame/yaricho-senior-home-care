'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const images = [
    '/images/another/photo_14_2026-03-01_02-14-40.jpg',
    '/images/another/photo_15_2026-03-01_02-14-40.jpg',
    '/images/another/photo_16_2026-03-01_02-14-40.jpg',
    '/images/another/photo_17_2026-03-01_02-14-40.jpg',
];

export default function SecondaryGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextStep = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevStep = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    return (
        <section className="py-24 bg-[#F0F9FF] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#0284C7] font-bold tracking-[0.3em] uppercase text-sm block mb-4"
                >
                    Excellence in Every Detail
                </motion.span>
                <h2 className="font-serif text-4xl md:text-6xl text-[#1B365D] font-bold">
                    More of <span className="italic font-normal text-[#0284C7]">Yaricho Senior Home Care</span>
                </h2>
            </div>

            <div className="relative w-full max-w-7xl mx-auto h-[600px] md:h-[800px] overflow-hidden rounded-[1.5rem] shadow-xl border-4 border-white bg-gray-200 group">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                         <Image
                            src={images[currentIndex]}
                            alt={`Yaricho Senior Home Care - view ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            priority={currentIndex === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent z-10" />

                {/* Navigation Arrows */}
                <button
                    onClick={prevStep}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={nextStep}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
