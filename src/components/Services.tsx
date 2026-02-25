'use client';

import { motion } from 'motion/react';
import { Heart, Utensils, Calendar, ShieldCheck, Stethoscope, Clock, Sparkles, UserCheck, Home } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "24/7 High-Quality Care",
    description: "Round-the-clock professional medical monitoring and compassionate assistance for your loved ones."
  },
  {
    icon: Utensils,
    title: "Home Cooked Meals",
    description: "Delicious, nutritious, and home-cooked meals tailored to individual dietary needs and preferences."
  },
  {
    icon: ShieldCheck,
    title: "Medication Management",
    description: "Professional oversight and administration of medications to ensure safety and optimal health."
  },
  {
    icon: UserCheck,
    title: "Hygiene Assistant",
    description: "Dedicated support for personal hygiene and daily grooming with dignity and respect."
  },
  {
    icon: Sparkles,
    title: "Housekeeping & Laundry",
    description: "Full-service laundry and daily housekeeping to maintain a clean, comfortable, and stress-free environment."
  },
  {
    icon: Home,
    title: "Private Rooms",
    description: "Comfortable, personal living spaces designed to feel like home while providing maximum peace and privacy."
  },
  {
    icon: Calendar,
    title: "Daily Activities",
    description: "A wide range of engaging social and recreational activities to promote mental and physical well-on."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#0284C7] font-bold tracking-[0.3em] uppercase text-sm block mb-4"
            >
              Our Commitment
            </motion.span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#1B365D] font-bold leading-tight">
              Exceptional Living, <br />
              <span className="italic font-normal text-[#0284C7]">Uncompromising Care</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            We redefine the standard of senior living with a focus on dignity, personalization, and the highest medical standards in a serene manor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(27,54,93,0.1)] transition-all duration-700 border border-gray-100/50 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0F2FE]/40 rounded-bl-[5rem] transition-transform duration-700 group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#1B365D] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#0284C7] transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#1B365D] font-bold mb-4 leading-tight group-hover:text-[#0284C7] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-[#0284C7] font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Learn More
                <div className="ml-2 w-4 h-[1px] bg-[#0284C7]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
