import Programs from '@/components/pages/Programs'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Programs",
  description:
    "Discover Sevenstone Investments Management Limited’s programs designed to support SMEs and youth-led businesses in Kenya, providing mentorship, funding, and growth opportunities.",
  alternates: {
    canonical: "https://sevenstone.co.ke/programs",
  },
  openGraph: {
    title: "Programs | Support for SMEs & Youth Businesses in Kenya",
    description:
      "Explore Sevenstone Ltd’s initiatives and programs that empower SMEs and youth-led enterprises in Kenya with mentorship, funding, and capacity-building opportunities.",
    url: "https://sevenstone.co.ke/programs",
  },
};

const page = () => {
  return (
    <main>
        <Programs/>
    </main>
  )
}

export default page
