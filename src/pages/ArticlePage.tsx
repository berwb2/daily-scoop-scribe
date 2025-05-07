import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from '../components/articles/ArticleContent';
import RelatedArticles from '../components/articles/RelatedArticles';
import { useArticle } from '../hooks/useArticles';

const ArticlePage: React.FC = () => {
  const { articleSlug } = useParams<{articleSlug: string}>();
  const { article, loading, error } = useArticle(articleSlug || '');
  
  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Polimetrica9`;
      window.scrollTo(0, 0);
    }
    
    return () => {
      document.title = 'Polimetrica9';
    };
  }, [article]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
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
      </div>
    );
  }
  
  return (
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
        estimatedReadingTime={article.readingTime}
      />
      
      {article.id && <RelatedArticles articles={[]} />}
    </div>
  );
};

export default ArticlePage;
