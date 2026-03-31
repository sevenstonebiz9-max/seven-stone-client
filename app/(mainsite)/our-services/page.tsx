import ServiceContent from '@/components/pages/ServiceContent'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Sevenstone Investments Management Limited’s range of services — from capital development and advisory to enterprise support — empowering SMEs and youth-led businesses in Kenya to grow and succeed.",
  alternates: {
    canonical: "https://sevenstone.co.ke/our-services",
  },
  openGraph: {
    title: "Our Services | Empowering SMEs & Youth Businesses in Kenya",
    description:
      "Discover Sevenstone Ltd’s expert services in capital development, advisory, and enterprise support designed to help SMEs and youth-led businesses thrive in Kenya.",
    url: "https://sevenstone.co.ke/our-services",
  },
};

const page = () => {
  return (
    <main>
        <ServiceContent/>
    </main>
  )
}

export default page
