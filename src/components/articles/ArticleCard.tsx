
import { Link } from 'react-router-dom';

export interface ArticleProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

interface ArticleCardProps {
  article: ArticleProps;
  variant?: 'large' | 'medium' | 'small';
}

export const ArticleCard = ({ article, variant = 'medium' }: ArticleCardProps) => {
  const { title, excerpt, category, image, date, author, slug } = article;
  
  const imageSize = {
    large: 'h-[450px]',
    medium: 'h-[220px]',
    small: 'h-[100px] w-[100px]'
  };
  
  const titleSize = {
    large: 'text-3xl md:text-4xl',
    medium: 'text-xl',
    small: 'text-base'
  };
  
  if (variant === 'small') {
    return (
      <article className="flex space-x-4 mb-6">
        <Link to={`/article/${slug}`} className="shrink-0">
          <img 
            src={image} 
            alt={title} 
            className={`${imageSize[variant]} object-cover rounded`} 
          />
        </Link>
        <div className="flex flex-col justify-center">
          <Link to={`/category/${category.toLowerCase()}`} className="text-xs text-blue-600 font-medium mb-1 uppercase tracking-wider">
            {category}
          </Link>
          <h3 className={`${titleSize[variant]} font-semibold mb-1 line-clamp-2`}>
            <Link to={`/article/${slug}`} className="hover:text-blue-600 transition-colors">
              {title}
            </Link>
          </h3>
          <div className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString('en-US', { 
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
        </div>
      </article>
    );
  }
  
  return (
    <article className="mb-8">
      <Link to={`/article/${slug}`} className="block mb-4">
        <img 
          src={image} 
          alt={title} 
          className={`${imageSize[variant]} w-full object-cover rounded-md`}
        />
      </Link>
      <Link to={`/category/${category.toLowerCase()}`} className="text-xs text-blue-600 font-medium mb-2 uppercase tracking-wider">
        {category}
      </Link>
      <h3 className={`${titleSize[variant]} font-semibold mb-2 line-clamp-2`}>
        <Link to={`/article/${slug}`} className="hover:text-blue-600 transition-colors">
          {title}
        </Link>
      </h3>
      {variant === 'large' && (
        <p className="text-gray-600 mb-3 line-clamp-3">{excerpt}</p>
      )}
      <div className="flex items-center text-gray-500 text-sm">
        <span>{author}</span>
        <span className="mx-2">•</span>
        <span>{new Date(date).toLocaleDateString('en-US', { 
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })}</span>
      </div>
    </article>
  );
};
