"use client";

import NewsCard from "@/components/cards/NewsCard";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import { motion } from "framer-motion";

type ArticleProps = {
  key: string;
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  href: string;
  index: number;
};

type Props = {
  articles?: ArticleProps[];
  loading?: boolean;
};

export default function NewsPageClient({ articles = [], loading = false }: Props) {
  const hasArticles = articles.length > 0;

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <NewsCardSkeleton index={0} />
          <NewsCardSkeleton index={1} />
          <NewsCardSkeleton index={2} />
        </div>
      ) : !hasArticles ? (
        <p className="text-center text-gray-500 text-lg">No articles published yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, i) => {
            const { key, ...cardProps } = article;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <NewsCard {...cardProps} />
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}