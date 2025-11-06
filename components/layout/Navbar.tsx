'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import tausiLogo from '@/public/seven-stone-logo.png';
import Link from 'next/link';
import ClientNavbar from '@/context/NavbarProvider';
import EventsDropdown from '@/components/dropdown/EventsDropdown';
import { IoArrowForwardOutline } from 'react-icons/io5';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full z-50">
      <header
        className={`fixed top-0 z-50 left-1/2 -translate-x-1/2 mt-1 flex items-center justify-between
        py-3 px-4 lg:px-8 bg-white/60  transition-all duration-300 rounded-4xl backdrop-blur-md ${isScrolled ? 'w-[94%] shadow-sm' : 'w-full'}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={tausiLogo}
            alt="Logo"
            width={52}
            height={52}
            priority
            className="hidden lg:block"
          />
          <Image
            src={tausiLogo}
            alt="Logo"
            width={40}
            height={0}
            priority
            className="block lg:hidden"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-black/60 font-semibold tracking-wide text-sm">
          <Link href="/" className="hover:text-main-maroon transition-all duration-200">
            Home
          </Link>

          <Link href="/about-us" className="hover:text-main-maroon transition-all duration-200">
            About Us
          </Link>

          <Link href="/our-services" className="hover:text-main-maroon transition-all duration-200">
            Our Services
          </Link>

          <EventsDropdown
            title="Track Record"
            items={[
              {
                label: '254 Youth Entrepreneurship Awards & Mentorship Program',
                href: '/programs/254-youth-entrepreneurship-awards',
              },
              {
                label: 'Kiambu County Youth Innovation & Entrepreneurship Week',
                href: '/programs/kiambu-youth-week',
              },
              {
                label: 'Zetech University Research & Innovation Week',
                href: '/programs/zetech-research-week',
              },
            ]}
            imageSrc="/images/image-1.jpg"
            menuWidth="40vw"
          />

          <Link href="/programs" className="hover:text-main-maroon transition-all duration-200">
            Programs
          </Link>

          <Link href="/about-us/team" className="hover:text-main-maroon transition-all duration-200">
            Our People
          </Link>

          {/* <EventsDropdown
            title="Our Company"
            items={[
              { label: 'Our Story', href: '/about-us' },
              { label: 'Our Team', href: '/about-us/team' },
            ]}
            imageSrc="/images/image-1.jpg"
            menuWidth="12vw"
          /> */}

          <Link href="/news-and-insights" className="hover:text-main-maroon transition-all duration-200">
            News & Insights
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="bg-linear-to-br from-main-maroon via-[#7A2C38] to-[#A84B58]
            pl-5 pr-3 py-2 rounded-full flex items-center gap-3 text-white 
            hover:opacity-90 transition-all duration-300 ease-in-out group"
          >
            Contact Us
            <div
              className="bg-white rounded-full flex items-center justify-center text-black p-2
              transition-all duration-300 group-hover:scale-110"
            >
              <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
            </div>
          </Link>
        </div>

        <ClientNavbar />
      </header>
    </div>
  );
};

export default Navbar;
