"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Transition } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";

const articles = [
  {
    id: 1,
    title: "Empowering SMEs Through Innovative Financial Solutions",
    excerpt:
      "Discover how Sevenstone is transforming the SME landscape across Kenya through accessible finance and strategic partnerships.",
    image: "/images/slider-2.jpg",
    date: "October 2025",
    href: "/news/empowering-smes",
  },
  {
    id: 2,
    title: "Youth-Led Enterprises: Building the Next Generation of Entrepreneurs",
    excerpt:
      "Our programs equip young innovators with tools and capital to scale ideas into sustainable enterprises.",
    image: "/images/slider-1.jpg",
    date: "September 2025",
    href: "/news/youth-enterprise",
  },
  {
    id: 3,
    title: "Partnerships Driving Inclusive Growth in Africa",
    excerpt:
      "Sevenstone collaborates with corporates, universities, and government agencies to promote long-term impact and inclusion.",
    image: "/images/image-4.jpeg",
    date: "August 2025",
    href: "/news/partnerships-growth",
  },
];

const NewsInsights = () => {
  // ✅ Type-safe card animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier equivalent of "easeOut"
      } as Transition,
    }),
  };

  return (
    <section className="py-20" id="news">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-main-maroon italic font-serif">
              News & Insights
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay up to date with our latest initiatives, thought leadership, and
            community impact stories.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
            >
              <Link
                href={article.href}
                className="block rounded-2xl overflow-hidden group"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="py-6 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#A84B58] font-semibold mb-2">
                      {article.date}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-main-maroon transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div
                    className="rounded-full flex items-center gap-3 text-main-maroon font-medium 
                    hover:opacity-90 transition-all duration-300 ease-in-out group"
                  >
                    Read More
                    <p
                      className="bg-gradient-to-br from-main-maroon via-[#7A2C38] to-[#A84B58] rounded-full flex items-center justify-center text-white p-2
                      transition-all duration-300 group-hover:scale-110"
                    >
                      <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;
