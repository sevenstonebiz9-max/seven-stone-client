import Programs from '@/components/pages/Programs'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Our Programs - Sevenstone ltd",
  description: "Discover what programs are offered by sevenstone.",
}

const page = () => {
  return (
    <main>
        <Programs/>
    </main>
  )
}

export default page
