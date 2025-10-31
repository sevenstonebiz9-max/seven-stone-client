
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 border-b border-white/10 pb-10">
        
        {/* Left: Logo + Socials + Newsletter */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/seven-stone-logo.png" alt="Logo" width={50} height={50} />
            <h2 className="text-2xl font-bold text-white">Sevenstone</h2>
          </div>

          <p className="text-sm text-gray-400 mb-6 max-w-md">
            Empowering Ideas, Enabling Growth, connecting SMEs, youth-led businesses, and
            investors through financial innovation and strategic partnerships.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#5C1A25] transition">
              <FaFacebookF className="w-4 h-4 text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#5C1A25] transition">
              <FaTwitter className="w-4 h-4 text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#5C1A25] transition">
              <FaLinkedinIn className="w-4 h-4 text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#5C1A25] transition">
              <FaInstagram className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-white/10 text-white placeholder-gray-400 rounded-lg outline-none w-full sm:w-auto"
            />
            <button className="bg-gradient-to-br from-[#5C1A25] via-[#7A2C38] to-[#A84B58] px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition">
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
              <li><Link href="/about" className="hover:text-[#A84B58] transition">About Us</Link></li>
              <li><Link href="/approach" className="hover:text-[#A84B58] transition">Our Approach</Link></li>
              <li><Link href="/programs" className="hover:text-[#A84B58] transition">Programs</Link></li>
              <li><Link href="/contact" className="hover:text-[#A84B58] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block text-white">Address:</span>
                8th Floor, Western Heights, Karuna Road, Westlands
              </li>
              <li>
                <span className="block text-white">Phone:</span>
                +254 707 600 887
              </li>
              <li>
                <span className="block text-white">Email:</span>
                info@sevenstoneltd.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Sevenstone Investments Management Ltd. All rights reserved.
      </div>
    </footer>
  );
}
