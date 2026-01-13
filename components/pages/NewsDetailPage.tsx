"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { getArticleBySlug, urlFor } from "@/sanity/lib/sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";

type Article = {
  title: string;
  coverImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  date: string;
  author: string;
  content: PortableTextBlock[];
};

export default function NewsDetailClientPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch article on mount
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getArticleBySlug(slug as string);
      setArticle(data);
      setLoading(false);
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading article...</p>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Article not found.</p>
      </main>
    );
  }

  const heroImage = article.coverImage
    ? urlFor(article.coverImage).width(1920).height(800).url()
    : urlFor(article.image).width(1920).height(800).url();

  return (
    <main className="bg-gray-50 min-h-screen px-4 lg:px-8">
      {/* Hero Section */}
      <section className="relative w-full rounded-2xl min-h-[40vh] lg:min-h-[50vh] mt-20 overflow-hidden">
        <Image
          src={heroImage}
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
            className="text-3xl md:text-4xl font-bold text-white text-center max-w-3xl leading-tight"
          >
            {article.title}
          </motion.h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        {/* Meta Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-gray-600 text-sm">
          <p className="uppercase tracking-wider text-main-maroon font-semibold">
            {new Date(article.date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="italic text-gray-700 mt-2 sm:mt-0">
            By {article.author}
          </p>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg text-gray-700 leading-relaxed max-w-none"
        >
          {/* Featured Image */}
          <div className="my-6">
            <Image
              src={urlFor(article.image).width(800).url()}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          {/* PortableText renderer */}
          <PortableText
            value={article.content}
            components={portableTextComponents}
          />
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/news-and-insights")}
            className="bg-linear-to-br from-main-maroon via-[#7A2C38] to-[#A84B58] text-white px-8 py-3 cursor-pointer rounded-full shadow-md hover:bg-[#7A2C38] transition-all"
          >
            ← Back to News
          </motion.button>
        </div>
      </section>
    </main>
  );
}