"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Capital Development",
    desc: "We design and implement innovative financing models that connect promising enterprises to the right capital. Our goal is to ensure that every viable idea has access to the resources it needs to scale sustainably.",
    img: "/images/capital-dev.png",
  },
  {
    title: "Ecosystem Building",
    desc: "We bring together key players to create collaborative platforms that strengthen the entrepreneurship ecosystem. Through events, policy dialogues and research-driven initiatives, we foster connections that drive growth and innovation.",
    img: "/images/eccosystem.png",
  },
  {
    title: "Business Development Services",
    desc: "We equip entrepreneurs with the skills, tools and mentorship they need to grow and compete effectively.",
    img: "/images/business-dev.png",
  },
  {
    title: "Youth and Women Empowerment",
    desc: "We are committed to unlocking the potential of young people and women through entrepreneurship and access to opportunity. Our programs build confidence, capacity and connections for inclusive participation in business and finance.",
   img: "/images/youth-and-women.png",
  },
];

export default function OurPillars() {
  return (
    <section className="py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-[#5C1A25] italic font-serif">Pillars of Impact</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The foundation of our mission is built on compassion, resilience, and empowerment.  
            These are the pillars we stand on to drive sustainable development and inclusive growth.
          </p>
        </div>

        <div className="grid grid-cols-1">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              whileInView={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF8F6] overflow-hidden group transition-all w-full"
            >
              {/* alternating layout */}
              {index % 2 === 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-y-10 overflow-hidden">
                  <div className=" overflow-hidden">
                    <Image
                      src={pillar.img}
                      alt={pillar.title}
                      width={600}
                      height={600}
                      className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-4xl font-semibold text-gray-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{pillar.desc}</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-y-10 ">
                  <div className="p-8 flex flex-col justify-center order-2 sm:order-1">
                    <h3 className="text-4xl font-semibold text-gray-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{pillar.desc}</p>
                  </div>
                  <div className="order-1 sm:order-2 overflow-hidden">
                    <Image
                      src={pillar.img}
                      alt={pillar.title}
                        width={600}
                      height={600}
                      className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
