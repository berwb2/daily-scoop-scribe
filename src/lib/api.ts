
import { Article, ArticleFilters, Author, Category } from '../types/article';
import { DynamicArticle, ArticleApiResponse } from '../types/articleSchema';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const DYNAMIC_API_URL = import.meta.env.VITE_DYNAMIC_API_URL || 'http://localhost:3000/api';

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

async function fetchDynamicAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${DYNAMIC_API_URL}${endpoint}`, {
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

// New API methods for dynamic content
export const dynamicArticlesAPI = {
  // Get all dynamic articles with optional pagination and filters
  getAll: (page = 1, limit = 10, filters?: { category?: string, tag?: string }) => {
    const params = new URLSearchParams({ page: page.toString(), limit: limit.toString() });
    
    if (filters?.category) {
      params.append('category', filters.category);
    }
    
    if (filters?.tag) {
      params.append('tag', filters.tag);
    }
    
    return fetchDynamicAPI<ArticleApiResponse>(`/articles?${params.toString()}`);
  },
  
  // Get a single article by its slug
  getBySlug: (slug: string) => {
    return fetchDynamicAPI<DynamicArticle>(`/articles/${slug}`);
  },
  
  // Submit a new article (for admin or n8n workflow usage)
  submitArticle: (article: Omit<DynamicArticle, 'slug'>, apiKey?: string) => {
    return fetchDynamicAPI<{ success: boolean, slug: string }>('/articles', {
      method: 'POST',
      headers: apiKey ? { 'X-API-Key': apiKey } : {},
      body: JSON.stringify(article),
    });
  }
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
