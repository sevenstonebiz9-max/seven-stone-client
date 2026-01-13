// app/news-and-insights/[slug]/page.tsx
import { getArticleBySlug } from '@/sanity/lib/sanity';
import { urlFor } from '@/sanity/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { portableTextComponents } from '@/components/PortableTextComponents';
import BackButton from '@/components/ui/BackButton';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';



export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} - Sevenstone Ltd`,
    description: article.excerpt,
    openGraph: {
      images: article.coverImage
        ? urlFor(article.coverImage).width(1200).height(630).url()
        : urlFor(article.image).width(1200).height(630).url(),
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const heroImage = article.coverImage
    ? urlFor(article.coverImage).width(1920).height(800).url()!
    : urlFor(article.image).width(1920).height(800).url()!;

  const currentUrl = `https://seven-stone-virid.vercel.app/news-and-insights/${slug}`;

  const shareLinks = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      icon: <FaFacebookF size={16} />,
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      label: 'Facebook'
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(article.title)}`,
      icon: <FaTwitter size={16} />,
      bgColor: 'bg-blue-400 hover:bg-blue-500',
      label: 'Twitter'
    },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(article.title)}`,
      icon: <FaLinkedinIn size={16} />,
      bgColor: 'bg-blue-700 hover:bg-blue-800',
      label: 'LinkedIn'
    },
    {
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' ' + currentUrl)}`,
      icon: <FaWhatsapp size={16} />,
      bgColor: 'bg-green-500 hover:bg-green-600',
      label: 'WhatsApp'
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen px-4 lg:px-8 relative">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] lg:min-h-[50vh] overflow-hidden rounded-2xl mt-20 lg:mt-22">
        <Image
          src={heroImage}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-xl md:text-3xl font-bold text-white text-center px-6 max-w-4xl leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16 lg:flex gap-12 relative">
        {/* Desktop Share Column - Sticky on Left */}
        <div className="hidden lg:flex flex-col gap-4 sticky top-32 self-start">
          {shareLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bgColor} text-white p-3 rounded-full transition`}
              aria-label={`Share on ${link.label}`}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* Article Content */}
        <div className="flex-1">
          {/* Mobile Share Bar - Horizontal at Top */}
          <div className="lg:hidden flex gap-3 mb-8 justify-center">
            {shareLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.bgColor} text-white p-3 rounded-full transition`}
                aria-label={`Share on ${link.label}`}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 text-gray-600">
            <time className="text-main-maroon font-semibold uppercase tracking-wider">
              {new Date(article.date).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <p className="italic mt-2 sm:mt-0">By {article.author}</p>
          </div>

          {/* Featured Article Image */}
          <div className="my-8">
            <Image
              src={urlFor(article.image).width(800).url()!}
              alt={article.title}
              width={800}
              height={500}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={article.content} components={portableTextComponents} />
          </div>

          <div className="mt-16 text-sm text-center">
            <BackButton href="/news-and-insights" label="Back to all Articles" />
          </div>
        </div>
      </article>
    </main>
  );
}