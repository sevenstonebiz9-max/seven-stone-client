import NewsDetailPage from '@/components/pages/NewsDetailPage'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Read More News & Insights - Sevenstone ltd",
  description: "The Engine Behind The Vision",
}

const page = () => {
  return (
    <NewsDetailPage/>
  )
}

export default page
