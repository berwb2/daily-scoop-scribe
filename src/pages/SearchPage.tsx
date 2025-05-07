import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import ArticleCard from '../components/articles/ArticleCard';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { searchResults, isSearching } = useSearch();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-headings mb-6">
        Search Results for "{query}"
      </h1>

      {isSearching ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">No articles found matching your search.</p>
          <p className="text-gray-500">Try adjusting your search terms or browse our categories below.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;