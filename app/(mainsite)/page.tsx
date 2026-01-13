import Hero from '@/components/homepage/Hero';
import HighlightStats from '@/components/homepage/HighlightStats';
import LatestNews from '@/components/homepage/LatestNews';
import OurPillars from '@/components/homepage/OurPillars';

export default function Home() {
  return (
    <main className=' w-full '>
      <Hero/>
      <HighlightStats/>
      <OurPillars/>
      <LatestNews/>
    </main>
  );
}
