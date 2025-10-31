"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TfiAngleRight } from "react-icons/tfi";

interface DropdownItem {
  label: string;
  href: string;
}

interface SidebarDropdownProps {
  title: string;
  items: DropdownItem[];
  toggleSidebar?: () => void;
}

const SidebarDropdown = ({ title, items, toggleSidebar }: SidebarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-black/80"
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <TfiAngleRight className="text-base" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                opacity: { duration: 0.1 },
                height: { duration: 0.2 },
              },
            }}
            className="overflow-hidden p-3 rounded-md my-2"
          >
            <div className="flex flex-col gap-2.5 pt-2 pb-1">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={toggleSidebar}
                  className="text-base py-0.5 text-black/70 hover:text-orange-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarDropdown;
