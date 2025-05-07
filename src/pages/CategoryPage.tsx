import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowUpDown, Filter } from 'lucide-react';
import ArticleCard from '../components/articles/ArticleCard';
import { allArticles } from '../data/mockData';

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{categorySlug: string}>();
  const [sortBy, setSortBy] = useState<'newest' | 'trending'>('newest');
  const [filterRelevance, setFilterRelevance] = useState<'all' | 'local' | 'national' | 'global'>('all');
  
  // Get category-specific information
  const getCategoryInfo = () => {
    switch(categorySlug) {
      case 'geopolitics':
        return {
          name: 'Geopolitics',
          description: 'Analysis of international relations and strategic developments affecting South Africa and the world.',
          color: 'primary'
        };
      case 'tech':
        return {
          name: 'Technology',
          description: 'Exploring innovations and digital transformation across South African industries.',
          color: 'secondary'
        };
      case 'economy':
        return {
          name: 'Economy',
          description: 'Insights on South African markets, trade, and economic trends.',
          color: 'tertiary'
        };
      case 'capetown':
        return {
          name: 'Cape Town Focus',
          description: 'Local stories with global significance from the Mother City.',
          color: 'secondary'
        };
      default:
        return {
          name: 'Articles',
          description: 'All the latest stories from Polimetrica9.',
          color: 'primary'
        };
    }
  };
  
  const categoryInfo = getCategoryInfo();
  
  // Filter articles by category and apply sort/filter options
  const filteredArticles = allArticles
    .filter(article => !categorySlug || article.category.slug === categorySlug)
    .filter(article => filterRelevance === 'all' || article.relevance === filterRelevance)
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      // For trending, we would normally use a different metric
      // For this demo, we're just using reading time as a proxy
      return b.readingTime - a.readingTime;
    });
  
  useEffect(() => {
    // Update the page title when the category changes
    document.title = `${categoryInfo.name} | Polimetrica9`;
    
    return () => {
      // Reset the title when leaving the page
      document.title = 'Polimetrica9';
    };
  }, [categoryInfo.name]);
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Category Header */}
      <header className="mb-12">
        <h1 className={`text-${categoryInfo.color} mb-3`}>
          {categoryInfo.name}
        </h1>
        <p className="text-gray-600 max-w-3xl text-lg">
          {categoryInfo.description}
        </p>
      </header>
      
      {/* Filters and Sorting */}
      <div className="flex flex-wrap justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="flex items-center">
            <Filter size={18} className="mr-2 text-gray-500" />
            <span className="text-gray-700 mr-3">Filter:</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setFilterRelevance('all')} 
              className={`px-3 py-1 rounded-full text-sm ${
                filterRelevance === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilterRelevance('local')} 
              className={`px-3 py-1 rounded-full text-sm ${
                filterRelevance === 'local' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cape Town
            </button>
            <button 
              onClick={() => setFilterRelevance('national')} 
              className={`px-3 py-1 rounded-full text-sm ${
                filterRelevance === 'national' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              South Africa
            </button>
            <button 
              onClick={() => setFilterRelevance('global')} 
              className={`px-3 py-1 rounded-full text-sm ${
                filterRelevance === 'global' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Global
            </button>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center">
            <ArrowUpDown size={18} className="mr-2 text-gray-500" />
            <span className="text-gray-700 mr-3">Sort:</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setSortBy('newest')} 
              className={`px-3 py-1 rounded-full text-sm ${
                sortBy === 'newest' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Newest
            </button>
            <button 
              onClick={() => setSortBy('trending')} 
              className={`px-3 py-1 rounded-full text-sm ${
                sortBy === 'trending' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Trending
            </button>
          </div>
        </div>
      </div>
      
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
          <button 
            onClick={() => {
              setFilterRelevance('all');
              setSortBy('newest');
            }}
            className="mt-4 btn btn-outline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;