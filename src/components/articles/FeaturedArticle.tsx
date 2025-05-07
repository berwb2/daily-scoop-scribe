
import { Link } from 'react-router-dom';
import { ArticleProps } from './ArticleCard';

interface FeaturedArticleProps {
  article: ArticleProps;
}

export const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const { title, excerpt, category, image, date, author, slug } = article;
  
  return (
    <article className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-12">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-10">
        <Link 
          to={`/category/${category.toLowerCase()}`} 
          className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start"
        >
          {category}
        </Link>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          <Link to={`/article/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>
        <p className="text-white/80 mb-4 max-w-3xl line-clamp-2 md:line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center text-white/80 text-sm">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(date).toLocaleDateString('en-US', { 
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}</span>
        </div>
      </div>
    </article>
  );
};
