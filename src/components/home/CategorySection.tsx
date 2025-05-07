import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ArticleCard, { ArticleProps } from '../articles/ArticleCard';

interface CategorySectionProps {
  title: string;
  slug: string;
  description?: string;
  articles: ArticleProps[];
  color?: 'primary' | 'secondary' | 'tertiary';
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  title, 
  slug, 
  description, 
  articles,
  color = 'primary' 
}) => {
  const colorClasses = {
    primary: 'text-primary border-primary',
    secondary: 'text-secondary border-secondary',
    tertiary: 'text-tertiary border-tertiary',
  };
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className={`text-2xl font-headings ${colorClasses[color].split(' ')[0]}`}>
              {title}
            </h2>
            {description && (
              <p className="text-gray-600 mt-2 max-w-2xl">{description}</p>
            )}
          </div>
          <Link 
            to={`/category/${slug}`} 
            className={`flex items-center font-medium mt-4 md:mt-0 ${colorClasses[color].split(' ')[0]}`}
          >
            View all {title} <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;