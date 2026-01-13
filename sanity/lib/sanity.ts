// lib/sanity.ts
import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { PortableTextBlock } from '@portabletext/types'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface Article {
  _id: string
  title: string
  slug: {
    current: string
  }
  author: string
  excerpt: string
  image: SanityImage
  coverImage?: SanityImage
  date: string
  content: PortableTextBlock[]
  published: boolean
}

// Fetch all published articles
export async function getArticles(): Promise<Article[]> {
  const query = `*[_type == "article" && published == true] | order(date desc) {
    _id,
    title,
    slug,
    author,
    excerpt,
    image,
    coverImage,
    date,
    content,
    published
  }`
  
  return await client.fetch(query)
}

// Fetch single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = `*[_type == "article" && slug.current == $slug && published == true][0] {
    _id,
    title,
    slug,
    author,
    excerpt,
    image,
    coverImage,
    date,
    content,
    published
  }`
  
  return await client.fetch(query, { slug })
}