"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHandshake,
  FaSeedling,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function ServiceContent() {
  // Service Data 
  const services = [
    {
      title: "Blended Finance & Capital Mobilization",
      desc: "Our Capital Development pillar focuses on bridging the financing gap faced by MSMEs, youth and women-led businesses through innovative, blended finance solutions. We design and implement customized financing mechanisms that combine grants, concessional loans and catalytic capital to help enterprises move from idea to scale. Beyond just funding, our approach emphasizes financial readiness, helping entrepreneurs understand, manage and leverage capital effectively.",
      img: "/images/Financial-Inclusion-Fintech-1.jpg",
      icon: <FaHandshake size={26} />,
      tagline: "Access to finance is the lifeblood of enterprise growth",
    },
    {
      title: "Ecosystem Building & Convenings",
      desc: "Sevenstone operates as an ecosystem enabler and convener, bringing together stakeholders across academia, government, development partners, corporates and the private sector to co-create solutions for MSME growth. We work to strengthen the linkages between financial institutions, policy actors, enterprise support organizations (ESOs) and entrepreneurs. Our ecosystem-building model emphasizes collaboration over competition, enabling a vibrant space for shared learning, innovation and policy dialogue. ",
      img: "/images/ecosystem-building-4.jpg",
      icon: <FaSeedling size={26} />,
      tagline: "Entrepreneurship cannot thrive in Isolation",
    },
    {
      title: "Business Development Services (BDS)",
      desc: "Business Development Services lie at the heart of Sevenstone’s impact model. We provide capacity-building, advisory and technical support to entrepreneurs and SMEs to enhance their competitiveness, scalability and sustainability. We combine practical training with one-on-one mentorship, financial coaching and digital transformation support. From early-stage ideation to growth acceleration, we empower businesses to refine their models, access markets and adopt technologies that increase efficiency and profitability.",
      img: "/images/business-dev.png",
      icon: <FaChartLine size={26} />,
      tagline: "Designed to respond to real market needs",
    },
    {
      title: "Women & Youth Empowerment",
      desc: "We equip Women and youth with access to finance, skills, mentorship and leadership opportunities transforming potential into impact. Our Women & Youth Empowerment programs are designed to address systemic barriers to participation. We create pathways for women and youth to thrive as entrepreneurs, innovators and leaders through training, targeted financing and ecosystem linkages. Sevenstone promotes entrepreneurship as a tool for dignity, self-reliance and community transformation because we envision a generation of women and youth who are not just job seekers but job creators, driving Africa’s transformation from within.",
      img: "/images/Women-Youth-Empowerment-1.jpg",
      icon: <FaUsers size={26} />,
      tagline: "Championing inclusive economic growth",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/*  Banner Section  */}
      <section className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/slider-2.jpg"
          alt="Our Services Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white text-center"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          As an{" "}
          <span className="font-semibold text-[#5C1A25]">
            Enterprise Growth & Blended Finance Catalyst (EG&BFC)
          </span>
          , we bridge the gap between SMEs and the resources they need to
          thrive. We combine{" "}
          <span className="font-semibold text-[#5C1A25]">
            Business Development Services (BDS)
          </span>{" "}
          with innovative blended finance mechanisms to de-risk youth and
          women-led businesses, expanding access to capital and strengthening
          local value chains.
        </motion.p>
      </section>

      {/* What We Do Section  */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden group transition-all"
            >
              {/* Background Image */}
              <div className="relative w-full h-[80vh] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={900}
                  className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-8 absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-2xl w-[94%] min-h-[40vh]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-[#5C1A25]/10 text-[#5C1A25] rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-3 italic text-sm">
                  {item.tagline}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#5C1A25] via-[#7A2C38] to-[#A84B58] text-white text-center flex flex-col items-center">
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
      </section>
    </main>
  );
}
