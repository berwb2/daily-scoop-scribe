
// Schema for dynamic articles from API endpoints

export interface DynamicArticle {
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  source: string;
  publishedAt: string;
  thumbnailUrl: string;
  author?: {
    name: string;
    avatar?: string;
  };
  readingTime?: number;
}

export interface ArticleApiResponse {
  articles: DynamicArticle[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}
