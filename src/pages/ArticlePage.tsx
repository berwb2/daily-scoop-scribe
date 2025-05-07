
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArticleContent from '../components/articles/ArticleContent';
import RelatedArticles from '../components/articles/RelatedArticles';
import { useArticle } from '../hooks/useArticles';
import { fullArticle, relatedArticles } from '../data/mockData'; // For demo purposes

const ArticlePage: React.FC = () => {
  const { articleSlug } = useParams<{articleSlug: string}>();
  // const { article, loading, error } = useArticle(articleSlug || ''); // Uncomment this in a real app
  
  // For demo purposes, we're using the mock data instead of the API call
  const loading = false;
  const error = null;
  const article = fullArticle;
  
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
  
  return (
    <>
      <Helmet>
        <title>{article.title} | Polimetrica9</title>
        <meta name="description" content={article.metaDescription || article.excerpt} />
        {article.metaKeywords && <meta name="keywords" content={article.metaKeywords.join(', ')} />}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription || article.excerpt} />
        <meta property="og:image" content={article.imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.publishedAt} />
        <meta property="article:author" content={article.author?.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.metaDescription || article.excerpt} />
        <meta name="twitter:image" content={article.imageUrl} />
      </Helmet>
      
      <div className="pt-6 pb-12">
        <ArticleContent 
          title={article.title}
          content={article.content}
          publishedAt={article.publishedAt}
          author={article.author || {
            name: 'Unknown Author',
            title: '',
            imageUrl: ''
          }}
          category={article.category || {
            name: 'Uncategorized',
            slug: 'uncategorized'
          }}
          estimatedReadingTime={article.estimatedReadingTime || article.readingTime}
          relevance={article.relevance}
          tags={article.tags}
          references={article.references}
        />
        
        <RelatedArticles articles={relatedArticles} title="Related Articles" />
      </div>
    </>
  );
};

export default ArticlePage;
