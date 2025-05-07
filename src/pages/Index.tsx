
import { FeaturedArticle } from '@/components/articles/FeaturedArticle';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { articles } from '@/data/articles';
import { Link } from 'react-router-dom';

const Index = () => {
  // Get most recent article for featured
  const featuredArticle = articles[0];
  
  // Break down other articles by category
  const technologyArticles = articles.filter(article => article.category === 'Technology').slice(0, 3);
  const politicsArticles = articles.filter(article => article.category === 'Politics').slice(0, 4);
  const latestArticles = articles.slice(1, 4);
  
  return (
    <div>
      {/* Featured Article */}
      <section className="container mx-auto px-4 pt-8">
        <FeaturedArticle article={featuredArticle} />
      </section>
      
      {/* Latest Articles */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-display font-bold">Latest News</h2>
          <Link to="/category/latest" className="text-blue-600 hover:underline font-medium text-sm">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display font-bold">Technology</h2>
            <Link to="/category/technology" className="text-blue-600 hover:underline font-medium text-sm">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Politics Section with Featured + List */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-display font-bold">Politics</h2>
          <Link to="/category/politics" className="text-blue-600 hover:underline font-medium text-sm">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Politics Article */}
          <div className="md:col-span-7">
            <ArticleCard article={politicsArticles[0]} variant="large" />
          </div>
          
          {/* Sidebar Politics Articles */}
          <div className="md:col-span-5">
            {politicsArticles.slice(1, 4).map(article => (
              <ArticleCard key={article.id} article={article} variant="small" />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-display font-bold mb-8">Discover More</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Business', 'Science', 'Health', 'Entertainment', 'Sports'].map(category => (
            <Link 
              key={category}
              to={`/category/${category.toLowerCase()}`}
              className="bg-gray-900 text-white rounded-lg p-8 flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <h3 className="text-xl font-bold">{category}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
