"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#55565B] text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 border-b border-white/10 pb-10">
        
        {/* Left: Logo + Socials + Newsletter */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/TRANSPARENT-CLEAR-LOGO-SEVENSTONE.png" alt="Logo" width={50} height={50} />
            <h2 className="text-2xl font-semibold text-white">Sevenstone</h2>
          </div>

          <p className="text-sm text-gray-300 f mb-6 max-w-md leading-relaxed">
            Empowering Ideas, Enabling Growth, connecting SMEs, youth-led businesses, 
            and investors through financial innovation and strategic partnerships.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            {[
              { icon: FaFacebookF, href: "#" },
              { icon: FaTwitter, href: "#" },
              { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/sevenstone-investments-management-limited/posts/?feedView=all&viewAsMember=true" },
              { icon: FaInstagram, href: "#" },
            ].map(({ icon: Icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                className="p-2 rounded-full bg-white/10 hover:bg-[#B18200] transition"
              >
                <Icon className="w-4 h-4 text-[#EDEDED]" />
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-white/10 text-gray-200 placeholder-gray-400 rounded-lg outline-none w-full sm:w-auto"
            />
            <button className="bg-[#B18200] hover:bg-[#a07600] px-6 py-2 rounded-lg text-[#F5F5F5] font-medium transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right: Useful Links + Contact */}
        <div className="grid sm:grid-cols-2 gap-10">
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Services", href: "/our-services" },
                { label: "Programs", href: "/programs" },
                { label: "Contact", href: "/contact-us" },
              ].map(({ label, href }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className="text-gray-200 font-bold hover:text-[#B18200] transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block text-gray-200 font-bold mb-1">Address:</span>
                <span className="text-gray-300"> 8th Floor, Western Heights, Karuna Road, Westlands</span>
              </li>
              <li>
                <span className="block text-gray-200 font-bold mb-1">Phone:</span>
                <span className="text-gray-300">+254 707 600 887</span>
              </li>
              <li>
                <span className="block text-gray-200 font-bold mb-1">Email:</span>
                <span className="text-gray-300"> info@sevenstoneltd.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center bg-[#B18200] text-sm text-[#F5F5F5] py-4">
        © {new Date().getFullYear()} Sevenstone Investments Management Ltd. All rights reserved.
      </div>
    </footer>
  );
}
