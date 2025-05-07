import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard, { ArticleProps } from './ArticleCard';

interface RelatedArticlesProps {
  articles: ArticleProps[];
  title?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ 
  articles,
  title = "You might also like" 
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-headings mb-6">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <Link 
              key={article.id} 
              to={`/article/${article.slug}`} 
              className="block h-full"
            >
              <ArticleCard article={article} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
