import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';

export interface ArticleProps {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: {
    name: string;
    slug: string;
  };
  publishedAt: string;
  readingTime: number;
  relevance: 'local' | 'national' | 'global';
  imageUrl: string;
  featured?: boolean;
}

interface ArticleCardProps {
  article: ArticleProps;
  variant?: 'default' | 'featured' | 'compact';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  variant = 'default' 
}) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  
  const relevanceLabel = {
    local: 'Cape Town',
    national: 'South Africa',
    global: 'Global'
  }[article.relevance];

  if (variant === 'featured') {
    return (
      <article className="article-card group h-full">
        <Link to={`/article/${article.slug}`} className="block h-full">
          <div className="relative h-full overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="category-tag geopolitics mb-3">
                {article.category.name}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-headings font-bold mb-2">
                {article.title}
              </h2>
              <p className="article-excerpt text-white/90 mb-4 max-w-3xl">
                {article.excerpt}
              </p>
              <div className="flex items-center text-sm text-white/80 space-x-4">
                <span>{formattedDate}</span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {article.readingTime} min read
                </span>
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {relevanceLabel}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }
  
  if (variant === 'compact') {
    return (
      <article className="flex space-x-3 mb-4 group">
        <Link to={`/article/${article.slug}`} className="shrink-0">
          <img 
            src={article.imageUrl}
            alt={article.title}
            className="w-20 h-20 object-cover rounded"
          />
        </Link>
        <div>
          <Link to={`/category/${article.category.slug}`} className="category-tag geopolitics text-xs">
            {article.category.name}
          </Link>
          <h3 className="text-base font-semibold mt-1 group-hover:text-primary transition-colors">
            <Link to={`/article/${article.slug}`}>{article.title}</Link>
          </h3>
          <div className="flex items-center mt-1 text-xs text-gray-600">
            <span className="flex items-center">
              <Clock size={12} className="mr-1" />
              {article.readingTime} min
            </span>
          </div>
        </div>
      </article>
    );
  }
  
  // Default card
  return (
    <article className="article-card h-full group">
      <Link to={`/article/${article.slug}`} className="block h-full">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className={`category-tag ${article.category.slug}`}>
            {article.category.name}
          </div>
          <h3 className="article-title text-lg mt-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="article-excerpt mt-2 text-sm">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between mt-3 text-xs text-gray-600">
            <span>{formattedDate}</span>
            <div className="flex items-center space-x-3">
              <span className="flex items-center">
                <Clock size={12} className="mr-1" />
                {article.readingTime} min
              </span>
              <span className="flex items-center">
                <MapPin size={12} className="mr-1" />
                {relevanceLabel}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;