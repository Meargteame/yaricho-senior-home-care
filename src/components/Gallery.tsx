'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    '/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp',
    '/images/slider/3506b2579b09ebc08a5728b8b3038fd9-cc_ft_768.webp',
    '/images/slider/38a88f7d9c801445789f325e47e8cb37-cc_ft_768.webp',
    '/images/slider/9551cb39d73de8a0aeb840052aec75e7-cc_ft_768.webp',
    '/images/slider/5e95dc08f5039b7ae28f2725e206c54b-cc_ft_768.webp',
    '/images/slider/7f9de6e4adb0b6b47b551faf9ce97fba-cc_ft_384.webp',
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextStep();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextStep = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevStep = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="gallery" className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#0284C7] font-bold tracking-[0.3em] uppercase text-sm block mb-4"
                >
                    Visual Experience
                </motion.span>
                <h2 className="font-serif text-4xl md:text-6xl text-[#1B365D] font-bold">
                    Our <span className="italic font-normal text-[#0284C7]">Heavenly</span> Manor
                </h2>
            </div>

            <div className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[650px] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white bg-gray-200 group">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
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
                            alt={`Heavenly Manor of Plano - luxury senior home care view ${currentIndex + 1}`}
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
                            className={`h-2 rounded-full transition-all duration-700 ${idx === currentIndex ? 'bg-[#0284C7] w-12' : 'bg-white/40 w-3 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-center">
                <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-[#0284C7]/30 to-transparent" />
            </div>
        </section>
    );
}
