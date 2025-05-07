
import React from 'react';
import { Link } from 'react-router-dom';

interface Tag {
  id: number;
  name: string;
  slug: string;
}

interface ArticleTagsProps {
  tags: Tag[];
  className?: string;
}

const ArticleTags: React.FC<ArticleTagsProps> = ({ tags, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map(tag => (
        <Link
          key={tag.id}
          to={`/tag/${tag.slug}`}
          className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          #{tag.name}
        </Link>
      ))}
    </div>
  );
};

export default ArticleTags;
