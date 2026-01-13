// components/homepage/LatestNews.tsx
"use client";

import NewsPageClient from '@/components/homepage/NewsPageClient';
import { motion } from 'framer-motion';
import { getArticles } from '@/sanity/lib/sanity';
import { urlFor } from '@/sanity/lib/image';
import type { Article } from '@/sanity/lib/sanity';
import { useEffect, useState } from 'react';

type FormattedArticle = {
  key: string;
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  href: string;
  index: number;
};

export default function LatestNews() {
  const [formattedArticles, setFormattedArticles] = useState<FormattedArticle[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const articles: Article[] = await getArticles();

      // Sort by date (newest first) and take only the first 3
      const latestArticles = articles
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

      const formatted = latestArticles.map((article, index) => ({
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

      setFormattedArticles(formatted);
    }

    fetchArticles();
  }, []);

  if (formattedArticles.length === 0) {
    return null
  }

  return (
    <section className="py-15 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Latest <span className="text-main-maroon font-serif">News</span> & Insights
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore all updates, thought leadership, and impact stories from Sevenstone.
        </p>
      </motion.div>

      <NewsPageClient articles={formattedArticles} />
    </section>
  );
}