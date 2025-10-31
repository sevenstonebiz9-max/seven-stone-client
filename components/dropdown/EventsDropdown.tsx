"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DropdownItem {
  label: string;
  href: string;
}

interface EventsDropdownProps {
  title: string;
  items: DropdownItem[];
  imageSrc?: string;
  imageAlt?: string;
  menuWidth?: string; // e.g. "30vw"
  imageWidth?: string; // e.g. "20vw"
  imageHeight?: string; // e.g. "h-40"
  textColor?: string;
  hoverColor?: string;
}

const EventsDropdown: React.FC<EventsDropdownProps> = ({
  title,
  items,
  // imageSrc,
  // imageAlt = "Dropdown Image",
  menuWidth = "fit",
  // imageWidth = "20vw",
  // imageHeight = "h-40",
  textColor = "text-gray-700",
  hoverColor = "hover:text-[#5C1A25]",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
        className={`transition duration-100 ease-in-out flex items-center justify-center gap-1 focus:outline-none cursor-pointer hover:text-[#5C1A25]`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <p>{title}</p>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IoMdArrowDropright />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            y: -10,
            transition: { duration: 0.15, ease: "easeIn" },
          }}
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl px-4 py-4 z-50 flex items-center gap-4`}
            style={{ width: menuWidth }}
            role="menu"
        >
          <div className="flex-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block px-4 py-2 text-base ${textColor} ${hoverColor} transition-colors w-fit font-normal`}
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* {imageSrc && (
            <div
              className={`flex-1 flex items-center justify-center rounded-md overflow-hidden`}
              style={{ width: imageWidth }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={150}
                height={150}
                priority
                className="object-cover rounded-md w-full h-full"
              />
            </div>
          )} */}
        </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsDropdown;
