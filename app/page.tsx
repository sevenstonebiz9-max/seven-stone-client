import Hero from '@/components/homepage/Hero';
import HighlightStats from '@/components/homepage/HighlightStats';
import NewsInsights from '@/components/homepage/NewsInsights';
import OurPillars from '@/components/homepage/OurPillars';
import React from 'react';

export default function Home() {
  return (
    <main className='bg-[##FEFCE8] w-full '>
      <Hero/>
      <HighlightStats/>
      <OurPillars/>
      <NewsInsights/>
    </main>
  );
}
