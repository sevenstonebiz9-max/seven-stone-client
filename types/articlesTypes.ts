export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  coverImage?: string;
  date: string;
  author: string;
  content: string;
}