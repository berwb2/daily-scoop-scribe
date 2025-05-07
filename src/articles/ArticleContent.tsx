import React, { useEffect, useState } from 'react';
import { Share2, BookmarkPlus, Printer, Globe } from 'lucide-react';

interface ArticleContentProps {
  title: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    title: string;
    imageUrl: string;
  };
  category: {
    name: string;
    slug: string;
  };
  estimatedReadingTime: number;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  content,
  publishedAt,
  author,
  category,
  estimatedReadingTime
}) => {
  const [progress, setProgress] = useState(0);
  
  // Reading progress bar effect
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  return (
    <article className="max-w-4xl mx-auto px-4">
      {/* Reading progress bar */}
      <div className="reading-progress" style={{ width: `${progress}%` }}></div>
      
      {/* Article header */}
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
          <div className="text-sm text-gray-600">
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>{estimatedReadingTime} min read</span>
          </div>
        </div>
      </header>
      
      {/* Social sharing sidebar (desktop) */}
      <div className="hidden lg:flex flex-col fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <button aria-label="Share article" className="p-2 bg-white rounded-full shadow hover:shadow-md">
          <Share2 size={20} />
        </button>
        <button aria-label="Save article" className="p-2 bg-white rounded-full shadow hover:shadow-md">
          <BookmarkPlus size={20} />
        </button>
        <button aria-label="Print article" className="p-2 bg-white rounded-full shadow hover:shadow-md">
          <Printer size={20} />
        </button>
      </div>
      
      {/* Article content */}
      <div className="article-content prose max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
      
      {/* South African context panel */}
      <div className="mt-10 mb-12 p-6 bg-secondary/5 border-l-4 border-secondary rounded-r-md">
        <div className="flex items-center mb-3">
          <Globe size={20} className="text-secondary mr-2" />
          <h3 className="text-lg font-semibold text-secondary">South African Context</h3>
        </div>
        <p className="text-gray-700">
          This analysis has particular relevance for South Africa's economic position in the BRICS alliance. 
          As the country navigates complex trade relations with China and Russia, the implications for the Rand 
          and local industries could be significant. Cape Town's tech sector, in particular, may find new 
          opportunities for growth through these evolving partnerships.
        </p>
      </div>
      
      {/* Mobile action bar */}
      <div className="lg:hidden flex justify-center space-x-4 py-4 mt-8 border-t border-b border-gray-200">
        <button aria-label="Share article" className="flex items-center text-gray-700">
          <Share2 size={18} className="mr-2" /> Share
        </button>
        <button aria-label="Save article" className="flex items-center text-gray-700">
          <BookmarkPlus size={18} className="mr-2" /> Save
        </button>
        <button aria-label="Print article" className="flex items-center text-gray-700">
          <Printer size={18} className="mr-2" /> Print
        </button>
      </div>
    </article>
  );
};

export default ArticleContent;