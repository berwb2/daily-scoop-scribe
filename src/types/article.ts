export interface Author {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  bio?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  imageUrl: string;
  featured: boolean;
  relevance: 'local' | 'national' | 'global';
  authorId: number;
  categoryId: number;
  author?: Author;
  category?: Category;
}

export interface ArticleFilters {
  categorySlug?: string;
  relevance?: 'local' | 'national' | 'global';
  featured?: boolean;
  limit?: number;
  offset?: number;
}
