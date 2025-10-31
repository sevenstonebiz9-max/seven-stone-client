"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";

export interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  href: string;
  index?: number;
}

const NewsCard = ({
  id,
  title,
  excerpt,
  image,
  date,
  href,
  index = 0,
}: NewsCardProps) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      key={id}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="block rounded-2xl overflow-hidden group bg-white  transition-all duration-500"
      >
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="py-6 px-5 flex flex-col justify-between h-full">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#A84B58] font-semibold mb-2">
              {date}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-main-maroon transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
          </div>

          <div className="rounded-full flex items-center gap-3 text-main-maroon font-medium hover:opacity-90 transition-all duration-300 ease-in-out group">
            Read More
            <span
              className="bg-linear-to-br from-main-maroon via-[#7A2C38] to-[#A84B58] rounded-full flex items-center justify-center text-white p-2
              transition-all duration-300 group-hover:scale-110"
            >
              <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
