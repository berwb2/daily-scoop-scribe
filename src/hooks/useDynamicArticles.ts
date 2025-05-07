
import { useState, useEffect } from 'react';
import { DynamicArticle, ArticleApiResponse } from '../types/articleSchema';
import { dynamicArticlesAPI } from '../lib/api';

export function useDynamicArticles(page = 1, limit = 10, filters?: { category?: string, tag?: string }) {
  const [articles, setArticles] = useState<DynamicArticle[]>([]);
  const [pagination, setPagination] = useState<ArticleApiResponse['pagination']>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await dynamicArticlesAPI.getAll(page, limit, filters);
        setArticles(data.articles);
        setPagination(data.pagination);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch articles'));
        console.error('Error fetching dynamic articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page, limit, filters]);

  return { articles, pagination, loading, error };
}

export function useDynamicArticle(slug: string) {
  const [article, setArticle] = useState<DynamicArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const data = await dynamicArticlesAPI.getBySlug(slug);
        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch article'));
        console.error('Error fetching dynamic article:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  return { article, loading, error };
}
