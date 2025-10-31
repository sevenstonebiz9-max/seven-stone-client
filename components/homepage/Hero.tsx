"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  Variants,
  Transition,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Pause } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/images/slider-1.jpg",
    title: "Empowering Ideas, Enabling Growth",
    subtitle:
      "Sevenstone Investments Management Limited is an impact-focused enterprise and capital development firm that bridges the gap between ideas and finance. We connect entrepreneurs, SMEs and youth-led enterprises with the financial tools, mentorship and partnerships they need to grow, thrive and create sustainable impact.",
    buttonText: "Explore Our Work",
    buttonLink: "/our-services",
  },
  {
    id: 2,
    image: "/images/slider-2.jpg",
    title: "Trusted ecosystem enabler and Strategic implementation partner",
    subtitle:
      "Building collaborative platforms that connect ideas, institutions and impact for sustainable enterprise growth.",
    buttonText: "Explore Our Work",
    buttonLink: "/our-services",
  },
  {
    id: 3,
    image: "/images/image-3.jpg",
    title: "Catalyst for Youth-led enterprise growth",
    subtitle:
      "Inspiring, equipping and financing the next generation of entrepreneurs to lead Africa’s transformation.",
    buttonText: "Explore Our Work",
    buttonLink: "/our-services",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide (with pause)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const fadeVariants: Variants = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } as Transition,
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: [0.42, 0, 1, 1] } as Transition,
    },
  };

  const slide = slides[current];

  return (
    <main>
      <section
        {...handlers}
        className="relative w-full h-[92vh] lg:h-screen overflow-hidden bg-black"
      >
        {/* Smooth fade transition */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slide.id}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 text-white z-20">
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg text-center"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={`subtitle-${slide.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-xl text-center text-gray-200 mb-8 lg:max-w-[70vw]"
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            key={`button-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row gap-4"
          >
            <Link
              href={slide.buttonLink}
              className="bg-white/20 backdrop-blur-md w-fit
              pl-5 pr-3 py-2 rounded-full flex items-center gap-3 text-white 
              hover:opacity-90 transition-all duration-300 ease-in-out group border border-white/60"
            >
              {slide.buttonText}
              <div
                className="bg-white rounded-full flex items-center justify-center text-black p-2
                transition-all duration-300 group-hover:scale-110"
              >
                <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
              </div>
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-br from-[#5C1A25] via-[#7A2C38] to-[#A84B58] w-fit border border-white/60
              pl-5 pr-3 py-2 rounded-full flex items-center gap-3 text-white 
              hover:opacity-90 transition-all duration-300 ease-in-out group"
            >
              Partner With Us
              <div
                className="bg-white rounded-full flex items-center justify-center text-black p-2
                transition-all duration-300 group-hover:scale-110"
              >
                <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Pause / Play button + Navigation */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 z-30">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full shadow-md transition-all cursor-pointer"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <FaPlay className="w-4 h-4" />
            ) : (
              <Pause className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={handlePrev}
            className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full shadow-md transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full shadow-md transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
