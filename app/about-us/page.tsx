import AboutUs from '@/components/pages/AboutUs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About Us - Sevenstone ltd",
  description: "Get To Know us. Read more about Sevenstone",
}

const page = () => {
  return (
    <main>
        <AboutUs/>
    </main>
  )
}

export default page
