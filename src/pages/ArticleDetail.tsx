
import { useParams } from 'react-router-dom';
import { articles } from '@/data/articles';
import { Link } from 'react-router-dom';
import { Share, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '@/components/articles/ArticleCard';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((article) => article.slug === slug);
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Article not found</h1>
        <p>Sorry, the article you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to homepage
        </Link>
      </div>
    );
  }
  
  // Find related articles from the same category
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <Link to={`/category/${article.category.toLowerCase()}`} className="text-sm text-blue-600 font-medium uppercase tracking-wider mb-3 block">
          {article.category}
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
          {article.title}
        </h1>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <p className="font-medium">{article.author}</p>
              <p className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Button variant="outline" size="icon">
              <Share className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="outline" size="icon">
              <Bookmark className="h-5 w-5" />
              <span className="sr-only">Save</span>
            </Button>
          </div>
        </div>
        
        <div className="mb-8">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content || '' }}
        ></div>
        
        <div className="border-t border-gray-200 pt-10 mt-10">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
