"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import TeamSectionContainer from "../team/TeamSectionContainer";
import { advisoryTeam, sectorAdvisoryMeambers } from "@/data";

const Team = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="w-full min-h-screen px-4 lg:px-8">
      {/* Banner Section */}
      <section className="rounded-2xl mt-20 lg:mt-22 relative w-full min-h-[40vh] lg:min-h-[50vh] overflow-hidden">
        <Image
          src="/images/our-people-banner.jpg"
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
            Our People
          </motion.h1>
        </div>
      </section>

      {/* CEO Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-4 md:px-15 py-15 mb-20 bg-gray-100"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/images/LOISE-PROFILE-PIC-2-WEB.png"
            alt="CEO Loise Muiruri"
            width={450}
            height={500}
            priority
            className="object-cover object-center rounded-2xl"
          />
        </motion.div>

        <div className="flex-1 flex flex-col gap-4 lg:pr-10">
          <h2 className="text-heading-main font-bold text-3xl md:text-4xl">
            FA LOISE MUIRURI
          </h2>
          <p className="text-main-maroon font-semibold text-lg">
            Founder & Chief Executive Officer
          </p>
          <p className="text-paragraph-main">
            Loise Muiruri is a Certified Investment and Financial Analyst (CIFA)
            with over 12 years of experience in the Banking Sector, SME
            development and impact entrepreneurship. As the CEO of Sevenstone,
            Loise has positioned Sevenstone as a catalyst for enterprise growth
            in Kenya, connecting entrepreneurs, women and youth-led businesses
            to finance, mentorship and markets.
          </p>
          <p className="text-paragraph-main">
            Under her leadership, Sevenstone has become a trusted ecosystem
            enabler and strategic partner to corporates, academia and
            development organizations working to strengthen the MSME landscape.
            Her vision is driven by a simple belief that transformative ideas
            deserve access to finance and the right ecosystem to thrive.
          </p>

          <div className="flex items-center gap-8 mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="text-main-maroon flex items-center gap-2 cursor-pointer hover:text-[#7A2C38] transition"
            >
              Read More
              <FaArrowRightLong />
            </button>

            <Link
              href="/"
              className="flex text-white items-center gap-2 bg-gradient-to-br from-main-maroon via-[#7A2C38] to-[#A84B58] rounded-full px-5 py-2 shadow-sm w-fit"
            >
              <span>Follow</span>
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CEO Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowModal(false)} // close on backdrop click
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl w-full max-w-xl max-h-[80vh] overflow-y-auto p-6 relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-700 hover:text-black cursor-pointer"
              >
                ✕
              </button>

              <h4 className="text-2xl font-semibold mb-2 text-gray-900">
                FA LOISE MUIRURI
              </h4>
              <p className="text-gray-600 mb-4">
                Founder & Chief Executive Officer
              </p>
              <p className="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                Loise Muiruri is a Certified Investment and Financial Analyst (CIFA) with over 12
                years of experience in the Banking Sector, SME development and impact
                entrepreneurship. As the CEO of Sevenstone, Loise has positioned Sevenstone as a
                catalyst for enterprise growth in Kenya, connecting entrepreneurs, women and
                youth-led businesses to finance, mentorship and markets.

                {"\n\n"}Under her leadership, Sevenstone has become a trusted ecosystem enabler and
                strategic partner to corporates, academia and development organizations working
                to strengthen the MSME landscape. Her vision is driven by a simple belief that
                transformative ideas deserve access to finance and the right ecosystem to thrive.

                {"\n\n"}Before founding Sevenstone, Loise held senior roles in Kenya’s banking sector
                managing diverse portfolios and driving SME growth initiatives. She is also a
                Tony Elumelu Foundation (TEF) Mentor and a passionate ecosystem builder. She
                has co-designed and led impactful initiatives including the 254 Youth
                Entrepreneurship Awards, Kiambu County Youth Innovation & Entrepreneurship
                Week and the Strathmore SME Conference & Expo. She also serves as an
                Assistant Project Manager of the Africa Economic Development Hub [AEDH] –
                Youth Pillar at Strathmore University Business School.

                {"\n\n"}She holds a Bachelor’s Degree in Commerce (Finance Option) from KCA
                University and is a Certified Investment and Financial Analyst accredited by
                ICIFA and also holds a Certificate in Enterprise Development Programme from
                Strathmore University Business School. She is a Member of the Institute of
                Certified Investments & Financial Analysts (ICIFA).
              </p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rest of team */}
      <TeamSectionContainer
        teamTitle="ADVISORY BOARD"
        teamSubline="Our Board is composed of visionary leaders and ecosystem enablers who provide strategic guidance, mentorship and governance oversight. Together, they help shape Sevenstone’s growth, partnership and impact."
        teamCard={advisoryTeam}
      />

      <TeamSectionContainer
        teamTitle="SECTOR ADVISORY MEMBERS"
        teamSubline="Our Sector Advisory Members bring specialized expertise and insights from diverse industries critical to our mission. They provide thought leadership, guide our programs and ensure our interventions remain relevant, evidence-based and impactful."
        teamCard={sectorAdvisoryMeambers}
      />
    </main>
  );
};

export default Team;
