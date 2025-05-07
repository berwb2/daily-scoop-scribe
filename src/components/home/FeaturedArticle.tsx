import React from 'react';
import ArticleCard, { ArticleProps } from '../articles/ArticleCard';

interface FeaturedArticleProps {
  article: ArticleProps;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <section className="h-75vh">
      <ArticleCard article={article} variant="featured" />
    </section>
  );
};

export default FeaturedArticle;