'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

// Images from the client's update folder + additional facility images
const updateImages = [
  // Additional beautiful spaces from other folders
  '/images/img/photo_2026-02-28_02-14-39.jpg',
  '/images/slider/5e95dc08f5039b7ae28f2725e206c54b-cc_ft_768.webp',
  '/images/slider/9551cb39d73de8a0aeb840052aec75e7-cc_ft_768.webp',
  '/images/another/photo_8_2026-03-01_02-14-40.jpg',
  '/images/another/photo_2_2026-03-01_02-14-40.jpg',
  '/images/another/photo_3_2026-03-01_02-14-40.jpg',
  '/images/care/Gemini_Generated_Image_ggyp2gggyp2gggyp.webp',
];

export default function UpdateGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0284C7] font-bold tracking-[0.3em] uppercase text-sm block mb-4"
          >
            Our Facility
          </motion.span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1B365D] font-bold">
            Explore Our <span className="italic font-normal text-[#0284C7]">Beautiful Spaces</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updateImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Yaricho Senior Home Care facility view ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-[101]"
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-6xl aspect-video">
            <Image
              src={selectedImage}
              alt="Full size view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
