import Team from '@/components/pages/Team';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the team behind Sevenstone Investments Management Limited — experienced professionals driving impact-focused enterprise development and capital facilitation for SMEs and youth-led businesses in Kenya.",
  
  alternates: {
    canonical: "https://sevenstone.co.ke/about-us/team",
  },
  
  openGraph: {
    title: "Our Team | Sevenstone Ltd Investment Professionals Kenya",
    description:
      "Meet the experienced professionals driving impact-focused enterprise development and capital facilitation for SMEs and youth-led businesses in Kenya.",
    url: "https://sevenstone.co.ke/about-us/team",
  },
  
  twitter: {
    title: "Our Team | Sevenstone Ltd Investment Professionals Kenya",
    description:
      "Meet the team driving enterprise development and capital facilitation in Kenya.",
  },
};

const TeamPage = () => {
  return (
    <main>
      <Team />
    </main>
  );
};

export default TeamPage;