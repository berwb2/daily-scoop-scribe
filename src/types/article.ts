
export interface Author {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  bio?: string;
  twitter?: string;
  linkedin?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
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
  tags?: Tag[];
  metaDescription?: string;
  metaKeywords?: string[];
  canonicalUrl?: string;
  references?: {
    text: string;
    url: string;
  }[];
  shareCount?: number;
  commentCount?: number;
}

export interface ArticleFilters {
  categorySlug?: string;
  tagSlug?: string;
  relevance?: 'local' | 'national' | 'global';
  featured?: boolean;
  limit?: number;
  offset?: number;
  authorId?: number;
  searchQuery?: string;
}

export interface Comment {
  id: number;
  articleId: number;
  userId?: number;
  userName: string;
  userImageUrl?: string;
  content: string;
  createdAt: string;
  parentCommentId?: number;
  replies?: Comment[];
  likes: number;
}
