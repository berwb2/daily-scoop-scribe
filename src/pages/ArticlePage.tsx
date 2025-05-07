import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from '../components/articles/ArticleContent';
import RelatedArticles from '../components/articles/RelatedArticles';
import { fullArticle, relatedArticles } from '../data/mockData';

const ArticlePage: React.FC = () => {
  const { articleSlug } = useParams<{articleSlug: string}>();
  
  // In a real application, you would fetch the article data based on the slug
  // For this demo, we're using the sample article
  const article = fullArticle;
  
  useEffect(() => {
    // Update the page title when the article loads
    document.title = `${article.title} | Polimetrica9`;
    
    // Scroll to top when article page loads
    window.scrollTo(0, 0);
    
    return () => {
      // Reset the title when leaving the page
      document.title = 'Polimetrica9';
    };
  }, [article.title, articleSlug]);
  
  return (
    <div className="pt-6 pb-12">
      <ArticleContent 
        title={article.title}
        content={article.content}
        publishedAt={article.publishedAt}
        author={article.author}
        category={article.category}
        estimatedReadingTime={article.estimatedReadingTime}
      />
      
      <RelatedArticles articles={relatedArticles} />
    </div>
  );
};

export default ArticlePage;