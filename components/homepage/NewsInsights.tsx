"use client";

import NewsCard from "@/components/cards/NewsCard";
import { articles } from "@/data";
import { motion } from "framer-motion";

type NewsPageProps = {
  limit?: number; // Optional limit for homepage vs full news page
};
//   {
//     id: 1,
//     title: "Empowering SMEs Through Innovative Financial Solutions",
//     excerpt:
//       "Discover how Sevenstone is transforming the SME landscape across Kenya through accessible finance and strategic partnerships.",
//     image: "/images/slider-2.jpg",
//     date: "October 2025",
//     href: "/news/empowering-smes",
//   },
//   {
//     id: 2,
//     title: "Youth-Led Enterprises: Building the Next Generation of Entrepreneurs",
//     excerpt:
//       "Our programs equip young innovators with tools and capital to scale ideas into sustainable enterprises.",
//     image: "/images/slider-1.jpg",
//     date: "September 2025",
//     href: "/news/youth-enterprise",
//   },
//   {
//     id: 3,
//     title: "Partnerships Driving Inclusive Growth in Africa",
//     excerpt:
//       "Sevenstone collaborates with corporates, universities, and government agencies to promote long-term impact and inclusion.",
//     image: "/images/image-4.jpeg",
//     date: "August 2025",
//     href: "/news/partnerships-growth",
//   },
//   {
//     id: 4,
//     title: "Women in Enterprise: Leading the Change",
//     excerpt:
//       "Highlighting how women entrepreneurs are shaping Kenya’s innovation landscape through resilience and creativity.",
//     image: "/images/image-6.jpg",
//     date: "July 2025",
//     href: "/news/women-in-enterprise",
//   },
//   {
//     id: 5,
//     title: "Driving Impact Through Financial Inclusion",
//     excerpt:
//       "Our initiatives aim to bring sustainable financial access to underserved communities across East Africa.",
//     image: "/images/image-7.jpg",
//     date: "June 2025",
//     href: "/news/financial-inclusion",
//   },
// ];

export default function NewsPage({ limit }: NewsPageProps) {
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <main className="w-full min-h-[50vh] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest{" "}
            <span className="text-main-maroon font-serif">News</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore all updates, thought leadership, and impact stories from
            Sevenstone.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {displayedArticles.map((article, i) => (
            <NewsCard key={article.id} {...article} index={i}  href={`/news-and-insights/${article.slug}`} />
          ))}
        </div>
      </div>
    </main>
  );
}
