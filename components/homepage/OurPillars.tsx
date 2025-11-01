'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const pillars = [
  {
    title: 'Capital Development',
    desc: 'We design and implement innovative financing models that connect promising enterprises to the right capital. Our goal is to ensure that every viable idea has access to the resources it needs to scale sustainably.',
    img: '/images/capital-dev.png',
  },
  {
    title: 'Ecosystem Building',
    desc: 'We bring together key players to create collaborative platforms that strengthen the entrepreneurship ecosystem. Through events, policy dialogues and research-driven initiatives, we foster connections that drive growth and innovation.',
    img: '/images/trusted-ecosytem.jpg',
  },
  {
    title: 'Business Development Services',
    desc: 'We equip entrepreneurs with the skills, tools and mentorship they need to grow and compete effectively.',
    img: '/images/home-page-bds.jpg',
  },
  {
    title: 'Youth and Women Empowerment',
    desc: 'We are committed to unlocking the potential of young people and women through entrepreneurship and access to opportunity. Our programs build confidence, capacity and connections for inclusive participation in business and finance.',
    img: '/images/youth-and-women.png',
  },
];

export default function OurPillars() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className='overflow-hidden'>
                  {/* Image */}
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center group-hover:hidden px-4 transition-all duration-500">
                  <h3 className="text-2xl font-semibold text-white z-10">{pillar.title}</h3>

                  {/* Icon appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="hidden group-hover:flex mt-2 text-white"
                  >
                    <FaArrowRight />
                  </motion.div>
                </div>

                {/* Description on hover (desktop) or click (mobile) */}
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{
                    y:
                      isActive || typeof window !== 'undefined' && window.innerWidth > 1024
                        ? 0
                        : '100%',
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute bottom-0 left-0 right-0 bg-main-maroon text-white p-4 text-base 
                    opacity-0 group-hover:opacity-100 lg:group-hover:translate-y-0  h-full
                    ${isActive ? 'opacity-100' : ''} transition-all duration-500`}
                >
                  <p>{pillar.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
