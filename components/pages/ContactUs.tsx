"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* ===== Banner Section ===== */}
      <section className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/slider-1.jpg"
          alt="Contact Banner"
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
            Get in Touch
          </motion.h1>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you’re an entrepreneur, partner, or organization looking to
            collaborate, we’re always ready to connect and create impact.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#5C1A25]/10 rounded-full text-[#5C1A25]">
                <FaPhoneAlt />
              </div>
              <p className="text-gray-800 font-medium">+254 707 600 887</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#5C1A25]/10 rounded-full text-[#5C1A25]">
                <FaEnvelope />
              </div>
              <p className="text-gray-800 font-medium">
                info@sevenstoneltd.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#5C1A25]/10 rounded-full text-[#5C1A25]">
                <FaMapMarkerAlt />
              </div>
              <p className="text-gray-800 font-medium">
                8th Floor, Western Heights, Karuna Road, Westlands
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#5C1A25]/10 text-[#5C1A25] rounded-full hover:bg-[#5C1A25] hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#5C1A25]/10 text-[#5C1A25] rounded-full hover:bg-[#5C1A25] hover:text-white transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#5C1A25]/10 text-[#5C1A25] rounded-full hover:bg-[#5C1A25] hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#5C1A25]/10 text-[#5C1A25] rounded-full hover:bg-[#5C1A25] hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Send Us a Message
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C1A25]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C1A25]"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C1A25] mb-4"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C1A25] mb-6"
          />

          <button
            type="submit"
            className="bg-gradient-to-br from-[#5C1A25] via-[#7A2C38] to-[#A84B58]
            pl-5 pr-3 py-2 rounded-full flex items-center justify-between  gap-3 text-white cursor-pointer hover:opacity-90 transition-all duration-300 ease-in-out group w-full" 
          >
            Send Message
              <div
                className="bg-white rounded-full flex items-center justify-center text-black p-2
                transition-all duration-300 group-hover:scale-110"
              >
                <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
              </div>
          </button>
        </motion.form>
      </section>

      {/* ===== Google Map Embed ===== */}
      <section className="pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900">
            Find Us on the Map
          </h3>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.858614888432!2d36.81215807496582!3d-1.264751735607022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17377f13a5f3%3A0x123456789abcdef!2sWestlands%20Towers!5e0!3m2!1sen!2ske!4v1698765432100!5m2!1sen!2ske"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactUs;
