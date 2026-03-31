import ContactUs from '@/components/pages/ContactUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sevenstone Investments Management Limited for inquiries about SME funding, enterprise development, and investment opportunities in Kenya. Our team is ready to help your business grow.",
  
  alternates: {
    canonical: "https://sevenstone.co.ke/contact",
  },
  
  openGraph: {
    title: "Contact Sevenstone Ltd | SME Funding & Investment Kenya",
    description:
      "Reach out to our team for inquiries about SME funding, capital facilitation, and enterprise development in Kenya.",
    url: "https://sevenstone.co.ke/contact",
    // Inherits images, siteName, etc. from root layout
  },
  
  twitter: {
    title: "Contact Sevenstone Ltd | SME Funding & Investment Kenya",
    description:
      "Reach out to our team for inquiries about SME funding and enterprise development.",
    // Inherits card and images from root layout
  },
};

const ContactPage = () => {
  return (
    <main>
      <ContactUs />
    </main>
  );
};

export default ContactPage;