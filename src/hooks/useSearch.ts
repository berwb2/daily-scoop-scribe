import { useState, useCallback } from 'react';
import Fuse from 'fuse.js';
import { allArticles } from '../data/mockData';

const fuseOptions = {
  keys: ['title', 'excerpt', 'category.name'],
  threshold: 0.3,
  includeScore: true
};

const fuse = new Fuse(allArticles, fuseOptions);

export function useSearch() {
  const [searchResults, setSearchResults] = useState<typeof allArticles>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback((query: string) => {
    setIsSearching(true);
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const results = fuse.search(query);
    setSearchResults(results.map(result => result.item));
    setIsSearching(false);
  }, []);

  return {
    searchResults,
    isSearching,
    performSearch
  };
}