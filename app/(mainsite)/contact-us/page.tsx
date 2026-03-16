import ContactUs from '@/components/pages/ContactUs'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Contact Us - Sevenstone Ltd",
  description: "Reach To Us for any enquiry.",
}

const page = () => {
  return (
    <main>
      <ContactUs/>
    </main>
  )
}

export default page
