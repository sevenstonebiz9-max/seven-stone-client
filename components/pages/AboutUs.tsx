"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaHandshake, FaUsers } from "react-icons/fa";
import NumberTickerContainer from "../ui/NumberTickerContainer";

const themes = [
  {
    title: "Agribusiness & Food Systems",
    desc: "We strengthen agri-value chains by unlocking finance, innovation and market access for farmers, cooperatives and agribusinesses. Our goal is to build resilient, inclusive and sustainable food systems that drive rural prosperity.",
    img: "/images/theme-img-1.jpg",
  },
  {
    title: "Financial Inclusion & Fintech",
    desc: "We champion digital and financial innovations that expand access to capital for underserved communities. By connecting technology with enterprise finance, we promote equitable growth and financial empowerment.",
    img: "/images/theme-img-2.jpg",
  },
  {
    title: "Manufacturing & Value Addition",
    desc: "We support local enterprises in scaling production, enhancing quality and creating jobs through value addition. Our interventions focus on driving competitiveness and positioning SMEs within regional and global value chains.",
    img: "/images/theme-img-3.jpg",
  },
  {
    title: "Green Economy & Climate Finance",
    desc: "We integrate sustainability across our initiatives by promoting green entrepreneurship and access to climate finance. Our work supports the transition to low-carbon, climate-resilient business models.",
    img: "/images/theme-img-4.jpg",
  },
  {
    title: "Youth Employment & Enterprise Development",
    desc: "We invest in youth-led innovation, skills development and entrepreneurship to create pathways for decent work and self-employment. Through mentorship, financing and ecosystem support, we empower the next generation of changemakers.",
    img: "/images/theme-img-5.jpg",
  },
];

const AboutUs = () => {
  return (
    <main className="min-h-screen px-4 md:px-8">
      {/* Banner Section */}
      <section className="relative w-full mt-20 lg:mt-22 min-h-[40vh] lg:min-h-[50vh] rounded-2xl overflow-hidden">
        <Image
          src="/images/about-us.webp"
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
            className="text-3xl md:text-4xl md:text-6xl font-bold text-white text-center"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* main story section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center px-4 md:px-15 gap-10 py-10 my-15"
      >
        <div className="flex-1 flex flex-col gap-4 lg:pr-10">
          <p className="text-main-maroon font-semibold text-lg">Our Journey</p>
          <h2 className="text-heading-main font-bold text-3xl md:text-4xl">
            It all began with a commitment to transform ideas into real-world
            impact
          </h2>
          <p className="text-paragraph-main text-lg">
            Sevenstone Investment Management Limited was founded in 2017 as an
            enterprise development and capital facilitation firm committed to
            empowering SMEs, Women and Youth-Led businesses. Our mission is to
            Empower Ideas and Enable Growth by designing innovative financial
            solutions, building entrepreneurial capacity and strengthening the
            ecosystems that drive inclusive and sustainable economic growth.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/images/business-dev.png"
            alt="Contact Banner"
            width={600}
            height={700}
            priority
            className="object-cover object-center rounded-2xl"
          />
        </motion.div>
      </motion.section>

      {/* mission and vision */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-30 px-4 md:px-15 flex flex-col lg:flex-row items-center mt-15 gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/images/capital-dev.webp"
            alt="Contact Banner"
            width={600}
            height={700}
            priority
            className="object-cover object-center rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4 lg:pr-10">
            <h3 className="text-heading-main font-semibold text-3xl">
              Our Vision
            </h3>
            <p className="text-paragraph-main text-lg">
              A thriving African enterprise ecosystem where innovative ideas are
              nurtured, funded and scaled to create lasting economic and social
              impact.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:pr-10">
            <h3 className="text-heading-main font-semibold text-3xl">
              Our Mission
            </h3>
            <p className="text-paragraph-main text-lg">
              To empower enterprises through business support and blended
              finance solutions, driving inclusive growth, innovation and
              sustainability.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* highlight stats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-[url(/images/stats-img-4.webp)] bg-no-repeat bg-center bg-cover w-full min-h-[50vh] overflow-hidden rounded-2xl mt-30"
      >
        <div className="w-full min-h-[50vh] bg-black/60 flex items-center justify-center py-20 lg:py-0">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex items-center justify-center w-15 h-15 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                <FaUsers className="mx-auto mb-2 w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-2">
                <NumberTickerContainer color="text-white" numberTickerValue={5000} />
                <span className="text-white text-4xl">+</span>
              </h2>
              <p className="text-lg text-white font-semibold opacity-90">
                MSMEs & Youth Led Enterprises Impacted 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex items-center justify-center w-15 h-15 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                <FaCalendarAlt className="mx-auto mb-2 w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-2">
                <NumberTickerContainer color="text-white" numberTickerValue={7} />
                <span className="text-white text-4xl">+</span>
              </h2>
              <p className="text-lg text-white font-semibold text-whhite opacity-90">
                Years of Impact in Kenya
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex items-center justify-center w-15 h-15 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                <FaHandshake className="mx-auto mb-2 w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold mb-2">
                <NumberTickerContainer color="text-white" numberTickerValue={20} />
                <span className="text-white text-4xl">+</span>
              </h2>
              <p className="text-lg font-semibold text-white opacity-90">
                Partnerships
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our focus and themes */}
      <section className="py-24 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-10 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Focus{" "}
              <span className="text-[#5C1A25]  font-serif">
                Sectors & Themes
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1">
            {themes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-[#FAF8F6] overflow-hidden group transition-all w-full"
              >
                {index % 2 === 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-y-10 overflow-hidden">
                    <div className="overflow-hidden">
                      <Image
                        src={theme.img}
                        alt={theme.title}
                        width={600}
                        height={600}
                        className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="py-8 md:p-8 flex flex-col justify-center">
                      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                        {theme.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{theme.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-y-10">
                    <div className="py-8 md:p-8 flex flex-col justify-center order-2 sm:order-1">
                      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                        {theme.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{theme.desc}</p>
                    </div>
                    <div className="order-1 sm:order-2 overflow-hidden">
                      <Image
                        src={theme.img}
                        alt={theme.title}
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
    </main>
  );
};

export default AboutUs;
