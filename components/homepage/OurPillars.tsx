"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const pillars = [
  {
    title: "Capital Development",
    desc: "We design and implement innovative financing models that connect promising enterprises to the right capital. Our goal is to ensure that every viable idea has access to the resources it needs to scale sustainably.",
    img: "/images/capital-dev.webp",
  },
  {
    title: "Ecosystem Building",
    desc: "We bring together key players to create collaborative platforms that strengthen the entrepreneurship ecosystem. Through events, policy dialogues and research-driven initiatives, we foster connections that drive growth and innovation.",
    img: "/images/trusted-ecosytem.webp",
  },
  {
    title: "Business Development Services",
    desc: "We equip entrepreneurs with the skills, tools and mentorship they need to grow and compete effectively.",
    img: "/images/home-page-bds.webp",
  },
  {
    title: "Youth and Women Empowerment",
    desc: "We are committed to unlocking the potential of young people and women through entrepreneurship and access to opportunity. Our programs build confidence, capacity and connections for inclusive participation in business and finance.",
    img: "/images/youth-and-women.webp",
  },
];

export default function OurPillars() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-main-maroon font-serif">Pillars of Impact</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The foundation of our mission is built on compassion, resilience, and empowerment.
            These are the pillars we stand on to drive sustainable development and inclusive growth.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm"
                onClick={() => !isDesktop && setActiveIndex(isActive ? null : index)}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={pillar.img}
                    alt={pillar.title}
                    width={500}
                    height={50}
                    className="object-cover w-full h-95 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500"></div>

                {/* Title */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-500 group-hover:opacity-0">
                    <h3 className="text-2xl font-semibold text-white z-10">{pillar.title}</h3>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="hidden group-hover:flex mt-2 text-white"
                    >
                      <FaArrowRight />
                    </motion.div>
                  </div>
                )}

                {/* Description */}
                {isDesktop ? (
                  // Desktop: hover effect
                  <div className="absolute inset-0 flex items-center justify-center text-center bg-main-maroon text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p>{pillar.desc}</p>
                  </div>
                ) : (
                  // Mobile: click effect
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{
                      y: isActive ? 0 : "100%",
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center text-center bg-main-maroon text-white p-4"
                  >
                    <p>{pillar.desc}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
