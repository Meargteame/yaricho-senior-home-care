'use client';

import { motion } from 'motion/react';
import { Play, ShieldCheck, Heart, Coffee, Users, Home, Clock, Sparkles, UserCheck, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';

const leftFeatures = [
    { id: 1, title: '24/7 High-Quality Care', icon: Heart },
    { id: 2, title: 'Home Cooked Nutritious Meals', icon: Coffee },
    { id: 3, title: 'Medication Management', icon: ShieldCheck },
    { id: 4, title: 'Hygiene & Grooming Support', icon: UserCheck },
];

const rightFeatures = [
    { id: 5, title: 'Housekeeping & Laundry', icon: Sparkles },
    { id: 6, title: 'Private Luxury Rooms', icon: Home },
    { id: 7, title: 'Daily Engaging Activities', icon: Users },
    { id: 8, title: 'Compassionate Staff', icon: Heart },
];

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Optimized Dropbox Direct URL (using dl.dropboxusercontent.com for faster raw streaming)
    const videoUrl = "https://dl.dropboxusercontent.com/scl/fi/20hemkvmyjs2fye3dhvyw/Video09.21.2024-_-2108-Winona-Dr.-Plano-TX.-75074.m4v?rlkey=pqhrk01ojho6efglyeag2ml8w";

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section id="video-section" className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#0284C7] font-bold tracking-[0.3em] uppercase text-sm block mb-4"
                    >
                        Virtual Experience
                    </motion.span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#1B365D] font-bold">
                        Life at <span className="italic font-normal text-[#0284C7]">Yaricho Senior Home Care</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    <div className="lg:col-span-2 flex flex-col justify-center space-y-3">
                        {leftFeatures.map((feature, i) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="group p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-500 cursor-default"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#1B365D] group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                                        <feature.icon size={16} />
                                    </div>
                                    <span className="text-[11px] font-bold text-gray-700 leading-tight">
                                        {feature.title}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_120px_rgba(27,54,93,0.25)] border-[12px] border-white group bg-black"
                        >
                            <video
                                ref={videoRef}
                                src={videoUrl}
                                className={`w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}
                                poster="/images/slider/402fcbdd4ae6c6e0d64238aacefff69b-cc_ft_768.webp"
                                playsInline
                                loop
                                preload="metadata"
                                onWaiting={() => setIsWaiting(true)}
                                onPlaying={() => setIsWaiting(false)}
                                onCanPlay={() => setIsWaiting(false)}
                                controls={isPlaying}
                            />

                            {/* Enhanced Loader for Dropbox lag */}
                            {isWaiting && isPlaying && (
                                <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                                    <Loader2 className="w-12 h-12 text-[#7DD3FC] animate-spin" />
                                </div>
                            )}

                            {!isPlaying && (
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-black/20 backdrop-blur-[2px]">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handlePlay}
                                        className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-3xl border border-white/30 flex items-center justify-center text-white shadow-2xl group/btn overflow-hidden relative"
                                    >
                                        <div className="absolute inset-0 bg-[#0284C7] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                        <Play size={48} className="relative z-10 fill-white ml-2" />
                                    </motion.button>

                                    <div className="text-center">
                                        <p className="text-white font-bold tracking-[0.5em] uppercase text-sm mb-2">Start Virtual Tour</p>
                                        <p className="text-white/60 text-xs italic">See the warmth and care in person</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    <div className="lg:col-span-2 flex flex-col justify-center space-y-3">
                        {rightFeatures.map((feature, i) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="group p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-500 cursor-default"
                            >
                                <div className="flex items-center gap-3 text-right">
                                    <span className="text-[11px] font-bold text-gray-700 leading-tight flex-1">
                                        {feature.title}
                                    </span>
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#1B365D] group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                                        <feature.icon size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
