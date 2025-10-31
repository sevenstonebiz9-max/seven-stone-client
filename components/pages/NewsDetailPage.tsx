"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { articles } from "@/data";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const article = useMemo(() => articles.find((a) => a.slug === slug), [slug]);

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Article not found.</p>
      </main>
    );
  }

  const paragraphs = article.content
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src={article.coverImage || "/images/team-banner.jpg"}
          alt={article.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-bold text-white text-center max-w-3xl leading-tight"
          >
            {article.title}
          </motion.h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        {/* Meta Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-gray-600 text-sm">
          <p className="uppercase tracking-wider text-[#A84B58] font-semibold">
            {article.date}
          </p>
          <p className="italic text-gray-700 mt-2 sm:mt-0">By {article.author}</p>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg text-gray-700 leading-relaxed"
        >
          {/* Featured Image */}
          <div className="my-6">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          {paragraphs.map((para, i) => (
            <p key={i} className="mb-6">
              {para}
            </p>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/news-and-insights")}
            className="bg-linear-to-br from-[#5C1A25] via-[#7A2C38] to-[#A84B58] text-white px-8 py-3 cursor-pointer rounded-full shadow-md hover:bg-[#7A2C38] transition-all"
          >
            ← Back to News
          </motion.button>
        </div>
      </section>
    </main>
  );
}
