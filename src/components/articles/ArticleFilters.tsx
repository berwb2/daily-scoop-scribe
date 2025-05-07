
import React from 'react';
import { Filter } from 'lucide-react';

interface ArticleFiltersProps {
  onCategoryChange: (category?: string) => void;
  onTagChange: (tag?: string) => void;
  categories: string[];
  tags: string[];
}

const ArticleFilters: React.FC<ArticleFiltersProps> = ({ 
  onCategoryChange, 
  onTagChange, 
  categories, 
  tags 
}) => {
  return (
    <div className="flex gap-4">
      <div className="relative group">
        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md text-sm">
          <Filter size={16} className="mr-2" />
          Filter by Category
        </button>
        <div className="hidden group-hover:block absolute z-10 mt-1 bg-white shadow-lg rounded-md p-2 min-w-[200px]">
          <div className="py-1">
            <button 
              onClick={() => onCategoryChange(undefined)} 
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded"
            >
              All Categories
            </button>
            {categories.map((category, index) => (
              <button 
                key={index} 
                onClick={() => onCategoryChange(category)}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative group">
        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md text-sm">
          <Filter size={16} className="mr-2" />
          Filter by Tag
        </button>
        <div className="hidden group-hover:block absolute z-10 mt-1 bg-white shadow-lg rounded-md p-2 min-w-[200px]">
          <div className="py-1">
            <button 
              onClick={() => onTagChange(undefined)} 
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded"
            >
              All Tags
            </button>
            {tags.map((tag, index) => (
              <button 
                key={index} 
                onClick={() => onTagChange(tag)}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleFilters;
