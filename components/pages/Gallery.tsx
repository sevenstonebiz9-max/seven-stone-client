"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryProps {
  title?: string;
  images: string[];
}

export default function Gallery({ title, images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section className="py-12">
      {title && (
        <h2 className="text-3xl font-bold text-center text-main-maroon mb-8">
          {title}
        </h2>
      )}

      {/* Gallery grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => openLightbox(idx)}
          >
            <Image
              src={img}
              alt={`Gallery image ${idx + 1}`}
              width={500}
              height={350}
              className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`Lightbox ${lightboxIndex + 1}`}
                width={400}
                height={500}
                className="object-contain w-full h-[600px] rounded-md"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-3 bg-main-maroon w-8 h-8 cursor-pointer rounded-full right-4 text-white text-3xl font-bold p-1 flex items-center justify-center"
              >
                &times;
              </button>

              {/* Navigation */}
              {lightboxIndex > 0 && (
                <button
                  onClick={() => setLightboxIndex(lightboxIndex - 1)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full p-2 border font-bold cursor-pointer flex items-center justify-center"
                >
                  &#10094;
                </button>
              )}
              {lightboxIndex < images.length - 1 && (
                <button
                  onClick={() => setLightboxIndex(lightboxIndex + 1)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full p-2 border font-bold cursor-pointer flex items-center justify-center"
                >
                  &#10095;
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
