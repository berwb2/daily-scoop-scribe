import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from '../components/articles/ArticleContent';
import RelatedArticles from '../components/articles/RelatedArticles';
import { allArticles } from '../data/mockData';

const ArticlePage: React.FC = () => {
  const { articleSlug } = useParams<{articleSlug: string}>();
  
  const article = useMemo(() => {
    return allArticles.find(article => article.slug === articleSlug);
  }, [articleSlug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    
    return allArticles
      .filter(a => 
        a.id !== article.id && 
        (a.category.slug === article.category.slug || 
         a.relevance === article.relevance)
      )
      .slice(0, 3);
  }, [article]);
  
  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Polimetrica9`;
      window.scrollTo(0, 0);
    }
    
    return () => {
      document.title = 'Polimetrica9';
    };
  }, [article]);
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl">Article not found</h1>
      </div>
    );
  }
  
  return (
    <div className="pt-6 pb-12">
      <ArticleContent 
        title={article.title}
        content={article.content || ''}
        publishedAt={article.publishedAt}
        author={{
          name: 'Elokusa Zondi',
          title: 'Senior Geopolitical Analyst',
          imageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
        }}
        category={article.category}
        estimatedReadingTime={article.readingTime}
      />
      
      <RelatedArticles articles={relatedArticles} />
    </div>
  );
};

export default ArticlePage;
