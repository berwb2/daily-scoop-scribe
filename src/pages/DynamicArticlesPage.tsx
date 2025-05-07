
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useDynamicArticles } from '../hooks/useDynamicArticles';
import DynamicArticleCard from '../components/articles/DynamicArticleCard';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const DynamicArticlesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<{ category?: string, tag?: string }>({});
  const { articles, pagination, loading, error } = useDynamicArticles(page, 12, filters);
  
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };
  
  const handleCategoryFilter = (category?: string) => {
    setFilters(prev => ({ ...prev, category }));
    setPage(1);
  };
  
  const handleTagFilter = (tag?: string) => {
    setFilters(prev => ({ ...prev, tag }));
    setPage(1);
  };
  
  return (
    <>
      <Helmet>
        <title>Latest Articles | Polimetrica9</title>
        <meta name="description" content="Browse the latest articles from Polimetrica9" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-headings">Latest Articles</h1>
          
          <div className="flex gap-4">
            <div className="relative">
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md text-sm">
                <Filter size={16} className="mr-2" />
                Filter by Category
              </button>
              {/* Dropdown menu could be implemented here */}
            </div>
          </div>
        </div>
        
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video bg-gray-200 rounded-md mb-3" />
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}
        
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-md">
            Error loading articles. Please try again later.
          </div>
        )}
        
        {!loading && articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-4">No articles found</p>
            <p>Try changing your filters or check back later for new content.</p>
          </div>
        )}
        
        {!loading && articles.length > 0 && (
          <>
            {/* Featured article */}
            {articles.length > 0 && (
              <div className="mb-12">
                <DynamicArticleCard article={articles[0]} variant="featured" />
              </div>
            )}
            
            {/* Regular articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {articles.slice(1).map(article => (
                <Link key={article.slug} to={`/dynamic-article/${article.slug}`} className="block h-full">
                  <DynamicArticleCard article={article} />
                </Link>
              ))}
            </div>
            
            {/* Pagination */}
            {pagination && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handlePageChange(page - 1)} 
                    disabled={page === 1}
                    className={`p-2 rounded-md ${page === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  
                  {[...Array(pagination.totalPages)].map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => handlePageChange(i + 1)} 
                      className={`w-8 h-8 flex items-center justify-center rounded-md ${page === i + 1 ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => handlePageChange(page + 1)} 
                    disabled={page >= (pagination?.totalPages || 1)}
                    className={`p-2 rounded-md ${page >= (pagination?.totalPages || 1) ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default DynamicArticlesPage;
