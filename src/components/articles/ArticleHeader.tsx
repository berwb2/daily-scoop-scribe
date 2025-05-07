
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import ArticleTags from './ArticleTags';

interface ArticleHeaderProps {
  title: string;
  category: {
    name: string;
    slug: string;
    color?: string;
  };
  publishedAt: string;
  author: {
    name: string;
    title: string;
    imageUrl: string;
    bio?: string;
    twitter?: string;
    linkedin?: string;
  };
  estimatedReadingTime: number;
  relevance: 'local' | 'national' | 'global';
  tags?: { id: number; name: string; slug: string }[];
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  category,
  publishedAt,
  author,
  estimatedReadingTime,
  relevance,
  tags,
}) => {
  const formattedDate = formatDate(publishedAt);
  
  const relevanceLabel = {
    local: 'Cape Town',
    national: 'South Africa',
    global: 'Global'
  }[relevance];

  return (
    <header className="mb-8 pt-8">
      <div className={`category-tag ${category.slug} mb-3`}>
        {category.name}
      </div>
      <h1 className="font-headings mb-4">{title}</h1>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center">
          <img 
            src={author.imageUrl} 
            alt={author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="font-medium">{author.name}</div>
            <div className="text-sm text-gray-600">{author.title}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{estimatedReadingTime} min read</span>
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            <span>{relevanceLabel}</span>
          </div>
        </div>
      </div>
      
      {tags && tags.length > 0 && (
        <div className="mt-4">
          <ArticleTags tags={tags} />
        </div>
      )}
    </header>
  );
};

export default ArticleHeader;
