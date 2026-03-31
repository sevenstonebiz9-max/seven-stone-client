import AboutUs from '@/components/pages/AboutUs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sevenstone Investments Management Limited — an impact-focused enterprise and capital development firm bridging the gap between ideas and finance for SMEs and youth-led businesses in Kenya.",
  alternates: {
    canonical: "https://sevenstone.co.ke/about-us",
  },
  openGraph: {
    title: "About Sevenstone Ltd | Impact-Focused Investment in Kenya",
    description:
      "Learn about Sevenstone Investments Management Limited — an impact-focused enterprise and capital development firm bridging the gap between ideas and finance for SMEs and youth-led businesses in Kenya.",
    url: "https://sevenstone.co.ke/about-us",
  },
};

const page = () => {
  return (
    <main>
        <AboutUs/>
    </main>
  )
}

export default page
