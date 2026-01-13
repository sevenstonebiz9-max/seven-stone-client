"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AnimatedBanner() {
  return (
    <section className="relative w-full min-h-[40vh] lg:min-h-[50vh] overflow-hidden rounded-2xl mt-20 lg:mt-22">
      <Image
        src="/images/theme-img-3.jpg"
        alt="About Us Banner"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-bold text-white text-center"
        >
          Stories & Insights
        </motion.h1>
      </div>
    </section>
  );
}