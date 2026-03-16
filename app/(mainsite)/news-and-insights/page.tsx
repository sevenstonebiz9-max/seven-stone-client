// components/pages/AllNews.tsx
import NewsPageClient from '@/components/homepage/NewsPageClient';
import AnimatedBanner from '@/components/ui/AnimatedBanner';
import { getArticles } from '@/sanity/lib/sanity';
import { urlFor } from '@/sanity/lib/image';
import type { Article } from '@/sanity/lib/sanity';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News and Insights - Sevenstone Ltd",
  description: "Reach To Us for any enquiry.",
}

export const revalidate = 60;



export default async function AllNews() {
  const articles: Article[] = await getArticles();

  const formattedArticles = articles.map((article, index) => ({
    key: article._id,
    id: article._id,
    title: article.title,
    excerpt: article.excerpt,
    image: article.image
      ? urlFor(article.image).width(800).height(600).url()!
      : '/placeholder.jpg',
    date: new Date(article.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    href: `/news-and-insights/${article.slug.current}`,
    index,
  }));

  return (
    <main className="px-4 lg:px-8">
      <AnimatedBanner />
      {/* <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Latest <span className="text-main-maroon font-serif">News</span> & Insights
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore all updates, thought leadership, and impact stories from Sevenstone.
        </p>
      </div> */}
      <NewsPageClient articles={formattedArticles} />
    </main>
  );
}