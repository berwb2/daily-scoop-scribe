
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArticleContent from '../components/articles/ArticleContent';
import RelatedArticles from '../components/articles/RelatedArticles';
import { useDynamicArticle } from '../hooks/useDynamicArticles';
import { fullArticle, relatedArticles } from '../data/mockData'; // For fallback
import { calculateReadingTime } from '../utils/contentUtils';
import { DynamicArticle } from '../types/articleSchema';
import { Article } from '../types/article';

// Helper function to convert DynamicArticle to Article format expected by ArticleContent
const formatArticleData = (dynamicArticle: DynamicArticle): Partial<Article> => {
  return {
    title: dynamicArticle.title,
    content: dynamicArticle.content,
    publishedAt: dynamicArticle.publishedAt,
    readingTime: dynamicArticle.readingTime || calculateReadingTime(dynamicArticle.content),
    author: {
      id: 0,
      name: dynamicArticle.author?.name || 'Anonymous',
      title: '',
      imageUrl: dynamicArticle.author?.avatar || 'https://via.placeholder.com/64',
    },
    category: {
      id: 0, 
      name: dynamicArticle.category,
      slug: dynamicArticle.category.toLowerCase().replace(/\s+/g, '-'),
    },
    relevance: 'global',
    tags: dynamicArticle.tags.map((tag, index) => ({
      id: index,
      name: tag,
      slug: tag.toLowerCase().replace(/\s+/g, '-'),
    })),
    references: [],
    metaDescription: dynamicArticle.summary,
    metaKeywords: dynamicArticle.tags,
    imageUrl: dynamicArticle.thumbnailUrl,
  };
};

const DynamicArticlePage: React.FC = () => {
  const { articleSlug } = useParams<{articleSlug: string}>();
  const { article, loading, error } = useDynamicArticle(articleSlug || '');
  
  useEffect(() => {
    if (article) {
      window.scrollTo(0, 0);
    }
  }, [article]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse max-w-4xl mx-auto">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          
          <div className="flex items-center mb-8">
            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            <div className="ml-4">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl text-red-600">
          {error ? 'Error loading article' : 'Article not found'}
        </h1>
        <p className="mt-4">
          <Link to="/" className="text-primary underline">
            Return to homepage
          </Link>
        </p>
      </div>
    );
  }

  const formattedArticle = formatArticleData(article);
  
  return (
    <>
      <Helmet>
        <title>{article.title} | Polimetrica9</title>
        <meta name="description" content={article.summary} />
        {article.tags && <meta name="keywords" content={article.tags.join(', ')} />}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.thumbnailUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.publishedAt} />
        <meta property="article:author" content={article.author?.name || 'Anonymous'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.summary} />
        <meta name="twitter:image" content={article.thumbnailUrl} />
      </Helmet>
      
      <div className="pt-6 pb-12">
        <ArticleContent 
          title={formattedArticle.title || ''}
          content={formattedArticle.content || ''}
          publishedAt={formattedArticle.publishedAt || ''}
          author={formattedArticle.author || {
            name: 'Anonymous',
            title: '',
            imageUrl: 'https://via.placeholder.com/64'
          }}
          category={formattedArticle.category || {
            name: 'Uncategorized',
            slug: 'uncategorized'
          }}
          estimatedReadingTime={formattedArticle.readingTime || 5}
          relevance={formattedArticle.relevance || 'global'}
          tags={formattedArticle.tags || []}
          references={formattedArticle.references || []}
        />
        
        <RelatedArticles articles={relatedArticles} title="Related Articles" />
      </div>
    </>
  );
};

export default DynamicArticlePage;
