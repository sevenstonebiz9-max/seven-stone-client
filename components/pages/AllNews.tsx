'use client';

import Image from 'next/image'
import NewsPage from '../homepage/NewsInsights'
import {motion} from 'framer-motion'

const AllNews = () => {
  return (
    <main>
        {/* Banner Section */}
        <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
            <Image
            src="/images/about-us-banner.jpg"
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
                News Updates
            </motion.h1>
            </div>
        </section>
        <NewsPage/>
    </main>
  )
}

export default AllNews
