import Hero from '@/components/homepage/Hero';
import HighlightStats from '@/components/homepage/HighlightStats';
import NewsInsights from '@/components/homepage/NewsInsights';
import OurPillars from '@/components/homepage/OurPillars';

export default function Home() {
  return (
    <main className=' w-full '>
      <Hero/>
      <HighlightStats/>
      <OurPillars/>
      <NewsInsights limit={3}/>
    </main>
  );
}
