import { Article, ArticleFilters, Author, Category } from '../types/article';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const articlesAPI = {
  getAll: (filters?: ArticleFilters) => {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }
    return fetchAPI<Article[]>(`/articles?${params.toString()}`);
  },

  getBySlug: (slug: string) => {
    return fetchAPI<Article>(`/articles/${slug}`);
  },

  getRelated: (articleId: number, limit = 3) => {
    return fetchAPI<Article[]>(`/articles/${articleId}/related?limit=${limit}`);
  },

  getFeatured: () => {
    return fetchAPI<Article[]>('/articles/featured');
  },
};

export const categoriesAPI = {
  getAll: () => {
    return fetchAPI<Category[]>('/categories');
  },

  getBySlug: (slug: string) => {
    return fetchAPI<Category>(`/categories/${slug}`);
  },
};

export const authorsAPI = {
  getAll: () => {
    return fetchAPI<Author[]>('/authors');
  },

  getById: (id: number) => {
    return fetchAPI<Author>(`/authors/${id}`);
  },
};
