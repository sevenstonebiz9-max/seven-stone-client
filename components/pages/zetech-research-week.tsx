"use client";

import Gallery from "@/components/pages/Gallery";
import Image from "next/image";
import { motion } from "framer-motion";


export default function ZetechResearchWeek() {

  const galleryImages = [
    "/images/ZETECH-RESEARCH/image-1.webp",
    "/images/ZETECH-RESEARCH/image-2.webp",
    "/images/ZETECH-RESEARCH/image-3.webp",
    "/images/ZETECH-RESEARCH/image-4.webp",
    "/images/ZETECH-RESEARCH/image-5.webp",
  ];
  
  return (
    <main className="min-h-screen bg-white px-4 lg:px-8">
       <section className="rounded-2xl mt-20 lg:mt-22 relative w-full min-h-[40vh] lg:min-h-[50vh] overflow-hidden">
          <Image
              src="/images/ZETECH-RESEARCH/image-2.webp"
              alt="Zetech University Research and Innovation Week"
              fill
              priority
              className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-xl px-4 lg:text-4xl max-w-3xl font-bold text-white text-center"
          >
            Zetech University Research and Innovation Week
          </motion.h1>
          </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        {/* <div className="text-center mb-12">

          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            One of Sevenstone’s’ Signature Events Focusing on Entrepreneurship Excellence,  The 254 Youth Entrepreneurship Awards & Mentorship Program  “254Yeamp” gives young entrepreneurs an opportunity to get recognized for their entrepreneurship prowess, meet and network with Captain’s of Industries, potential investors and business partners.
          </p>
        </div> */}

        {/* Shared reusable gallery */}
        <Gallery title="Event Highlights" images={galleryImages} />
      </section>
    </main>
  );
}

