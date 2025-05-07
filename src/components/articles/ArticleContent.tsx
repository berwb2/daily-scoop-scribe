
import React from 'react';
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/dateUtils';
import ReadingProgressBar from './ReadingProgressBar';
import ArticleHeader from './ArticleHeader';
import ArticleShareButtons from './ArticleShareButtons';
import ArticleReferences from './ArticleReferences';
import SouthAfricanContext from './SouthAfricanContext';
import AuthorBio from './AuthorBio';
import CommentsToggle from './CommentsToggle';

interface ArticleContentProps {
  title: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    title: string;
    imageUrl: string;
    bio?: string;
    twitter?: string;
    linkedin?: string;
  };
  category: {
    name: string;
    slug: string;
    color?: string;
  };
  estimatedReadingTime: number;
  relevance: 'local' | 'national' | 'global';
  tags?: { id: number; name: string; slug: string }[];
  references?: { text: string; url: string }[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  content,
  publishedAt,
  updatedAt,
  author,
  category,
  estimatedReadingTime,
  relevance,
  tags,
  references
}) => {
  const location = useLocation();
  const shareUrl = `${window.location.origin}${location.pathname}`;
  const formattedUpdatedDate = updatedAt ? formatDate(updatedAt) : null;
  
  return (
    <article className="max-w-4xl mx-auto px-4">
      {/* Reading progress bar */}
      <ReadingProgressBar />
      
      {/* Article header */}
      <ArticleHeader
        title={title}
        category={category}
        publishedAt={publishedAt}
        author={author}
        estimatedReadingTime={estimatedReadingTime}
        relevance={relevance}
        tags={tags}
      />
      
      {/* Social sharing sidebar (desktop) */}
      <ArticleShareButtons 
        title={title} 
        shareUrl={shareUrl} 
        variant="sidebar"
      />
      
      {/* Article content */}
      <div className="article-content prose max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
      
      {/* Updated date if applicable */}
      {formattedUpdatedDate && (
        <div className="text-sm text-gray-500 italic mt-8">
          Last updated: {formattedUpdatedDate}
        </div>
      )}
      
      {/* References section if applicable */}
      {references && references.length > 0 && (
        <ArticleReferences references={references} />
      )}
      
      {/* South African context panel */}
      <SouthAfricanContext />

      {/* Author bio */}
      <AuthorBio author={author} />
      
      {/* Comments section toggle */}
      <CommentsToggle articleId={1} />
      
      {/* Mobile action bar */}
      <ArticleShareButtons 
        title={title} 
        shareUrl={shareUrl} 
        variant="mobile"
      />
    </article>
  );
};

export default ArticleContent;
