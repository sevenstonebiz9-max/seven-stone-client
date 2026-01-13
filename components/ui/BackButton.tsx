"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";

type BackButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

export default function BackButton({
  href,
  label = "Back",
  className = "",
}: BackButtonProps) {
  return (
    <motion.div whileTap={{ scale: 0.95 }}
      className="flex justify-center items-center " 
    >
      {/* <Link
        href={href}
        className={`
          inline-flex items-center gap-2 
          bg-gradient-to-br from-main-maroon via-[#7A2C38] to-[#A84B58] 
          hover:from-[#7A2C38] hover:to-[#A84B58]
          text-white font-medium 
          px-8 py-3 rounded-full 
          shadow-lg transition-all duration-300
          ${className}
        `}
      >
        <ArrowLeft className="w-5 h-5" />
       
      </Link> */}
          <Link
            href={href}
            className={`bg-linear-to-br w-fit from-main-maroon via-[#7A2C38] to-[#A84B58]
            pl-5 pr-3 py-2 rounded-full flex items-center gap-3 text-white 
            hover:opacity-90 transition-all duration-300 ease-in-out group
            ${className}
            `}
          >
            <span>{label}</span>
            <div
              className="bg-white rounded-full flex items-center justify-center text-black p-2
              transition-all duration-300 group-hover:scale-110"
            >
              <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
            </div>
          </Link>
    </motion.div>
  );
}