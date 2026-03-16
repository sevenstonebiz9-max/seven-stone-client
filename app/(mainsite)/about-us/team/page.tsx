import Team from '@/components/pages/Team'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Our People - Sevenstone Ltd",
  description: "The Engine Behind The Vision",
}

const page = () => {
  return (
    <main>
        <Team/>
    </main>
  )
}

export default page
