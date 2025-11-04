"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import ProgramCard from "@/components/cards/ProgramCard";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";

const Programs = () => {
  // Simple fade-up animation
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Sequential card animation (with type-safe easing)
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <main className="w-full min-h-screen px-4 lg:px-8">
      {/* Banner Section */}
      <section className="relative w-full min-h-[40vh] lg:min-h-[50vh] rounded-2xl mt-20 lg:mt-22 overflow-hidden">
        <Image
          src="/images/OUR-PROGRAMS.webp"
          alt="About Us Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl md:text-6xl font-bold text-white text-center"
          >
            Our Programs
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="flex flex-col lg:flex-row justify-between px-4 lg:px-16 gap-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-4xl lg:text-5xl text-black/80 font-medium lg:max-w-xl">
          Empowering Growth, Enabling Change
        </h1>
        <p className="text-black/70 lg:max-w-[25vw]">
          Through our programs, we connect capital, capacity, and community to
          drive inclusive growth and lasting impact.
        </p>
      </motion.section>

      {/* Programs Section */}
      <section className="px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {[
          {
            imageSrc: "/images/IMARIKA-FUND.webp",
            title: "Imarika Fund",
            description:
              "A blended finance vehicle designed to unlock capital for youth and women-led SMEs.",
          },
          {
            imageSrc: "/images/waife.webp",
            title: "WAIFE",
            description:
              "An incubator-accelerator model supporting women in agribusiness.",
          },
          {
            imageSrc: "/images/FACES-OF-ENTERPRISE.webp",
            title: "Faces of Enterprise",
            description:
              "A storytelling and visibility platform that celebrates SMEs while motivating young people to see entrepreneurship as a pathway to employment.",
          },
        ].map((program, i) => (
          <motion.div
            key={program.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <ProgramCard
              imageSrc={program.imageSrc}
              title={program.title}
              description={program.description}
            />
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-4 bg-linear-to-r mb-10 rounded-2xl from-[#5C1A25] via-[#7A2C38] to-[#A84B58] text-white text-center flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Partner With Us?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you&apos;re an SME, investor, or development partner, let’s
          collaborate to empower businesses and transform communities.
        </p>
        <Link
          href="/contact-us"
          className="bg-gradient-to-br from-[#5C1A25] via-[#7A2C38] to-[#A84B58]
          pl-5 pr-3 py-2 rounded-full flex items-center gap-3 text-white 
          hover:opacity-90 transition-all duration-300 ease-in-out group w-fit"
        >
          Contact Us
          <div
            className="bg-white rounded-full flex items-center justify-center text-black p-2
            transition-all duration-300 group-hover:scale-110"
          >
            <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
          </div>
        </Link>
      </motion.section>
    </main>
  );
};

export default Programs;
