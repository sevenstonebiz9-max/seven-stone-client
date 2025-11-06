"use client";

import { motion } from "framer-motion";
import { Wrench, Construction } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      {/* Animated icon */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        className="mb-6"
      >
        <Construction className="w-20 h-20 text-main-maroon" />
      </motion.div>

      {/* Animated text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
      >
        Page Under Development
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-600 max-w-xl mx-auto mb-8"
      >
        We’re currently working hard to bring you exciting content for this page.
        Please check back soon!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-main-maroon text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-main-maroon/90 transition-colors"
        onClick={() => window.history.back()}
      >
        Go Back
      </motion.button>

      {/* Floating wrench animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-12"
      >
        <Wrench className="w-8 h-8 text-gray-400" />
      </motion.div>
    </div>
  );
}
