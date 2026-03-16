import ServiceContent from '@/components/pages/ServiceContent'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Our Services - Sevenstone Ltd",
  description: "Discover the wide range of services offered at Sevenstones ltd.",
}

const page = () => {
  return (
    <main>
        <ServiceContent/>
    </main>
  )
}

export default page
