'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Daughter of Resident",
    text: "The care at Yaricho Senior Home Care is simply unmatched. My mother has never been happier, and the staff treats her like their own family. The facility is beautiful, but it's the people that make it a home.",
    stars: 5,
  },
  {
    name: "Michael Thompson",
    role: "Son of Resident",
    text: "Finding a place that handles memory care with such dignity and patience was a blessing. The private rooms are spacious, and the 24/7 medical attention gives us total peace of mind.",
    stars: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Niece of Resident",
    text: "Reviewing many places in Plano, Yaricho Senior Home Care stood out immediately. It doesn't feel like a facility; it feels like a luxury boutique hotel with clinical excellence.",
    stars: 5,
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#1B365D] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#7DD3FC] rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#0284C7] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#7DD3FC] font-bold tracking-[0.3em] uppercase text-sm block mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Trusted by <span className="italic font-normal text-[#7DD3FC]">Families</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px]">
           {testimonials.map((testimonial, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: 50 }}
               animate={{ 
                 opacity: index === activeIndex ? 1 : 0,
                 x: index === activeIndex ? 0 : 50,
                 pointerEvents: index === activeIndex ? 'auto' : 'none'
               }}
               transition={{ duration: 0.5 }}
               className="absolute inset-0 flex flex-col items-center text-center"
             >
               <Quote size={48} className="text-[#7DD3FC]/20 mb-6" />
               <p className="text-xl md:text-2xl text-white/90 font-serif leading-relaxed italic mb-8 max-w-2xl">
                 "{testimonial.text}"
               </p>
               
               <div className="flex gap-1 mb-4">
                 {[...Array(testimonial.stars)].map((_, i) => (
                   <Star key={i} size={20} fill="#FACC15" className="text-[#FACC15]" />
                 ))}
               </div>

               <div>
                 <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                 <p className="text-[#7DD3FC] text-sm uppercase tracking-wider">{testimonial.role}</p>
               </div>
             </motion.div>
           ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#7DD3FC] w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
