
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpDown, Filter, Hash } from 'lucide-react';
import ArticleCard from '../components/articles/ArticleCard';
import { allArticles, popularTags, articleTags } from '../data/mockData';

const TagPage: React.FC = () => {
  const { tagSlug } = useParams<{tagSlug: string}>();
  const [sortBy, setSortBy] = useState<'newest' | 'trending'>('newest');
  const [filterRelevance, setFilterRelevance] = useState<'all' | 'local' | 'national' | 'global'>('all');
  
  // Find the tag information
  const currentTag = articleTags.find(tag => tag.slug === tagSlug);
  
  // Filter articles by tag and apply sort/filter options
  const filteredArticles = allArticles
    .filter(article => article.tags?.some(tag => tag.slug === tagSlug))
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
    // Update the page title when the tag changes
    if (currentTag) {
      document.title = `#${currentTag.name} | Polimetrica9`;
    }
    
    return () => {
      // Reset the title when leaving the page
      document.title = 'Polimetrica9';
    };
  }, [currentTag]);
  
  if (!currentTag) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl text-red-600">Tag not found</h1>
        <p className="mt-4">
          <Link to="/" className="text-primary underline">
            Return to homepage
          </Link>
        </p>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>#{currentTag.name} | Polimetrica9</title>
        <meta name="description" content={`Articles tagged with #${currentTag.name} on Polimetrica9, South African journalism reimagined.`} />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        {/* Tag Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Hash className="text-primary" size={28} />
            <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-headings">
              {currentTag.name}
            </h1>
          </div>
          <p className="text-gray-600 max-w-3xl text-lg">
            Explore articles related to {currentTag.name} on Polimetrica9, offering South African perspectives on global issues.
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
        
        {/* Popular Tags Section */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Popular Tags</h2>
          <div className="flex flex-wrap gap-3">
            {popularTags.map(tag => (
              <Link
                key={tag.id}
                to={`/tag/${tag.slug}`}
                className={`text-sm px-3 py-2 rounded-full flex items-center ${
                  tag.slug === tagSlug
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Hash size={14} className="mr-1" />
                {tag.name}
                <span className="ml-2 bg-black/10 px-1.5 py-0.5 rounded-full text-xs">
                  {tag.count}
                </span>
              </Link>
            ))}
          </div>
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
    </>
  );
};

export default TagPage;
