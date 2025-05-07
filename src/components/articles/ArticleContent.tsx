
import React, { useState, useEffect } from 'react';
import { Share2, BookmarkPlus, Printer, Globe, Calendar, Clock, MapPin, Twitter, Facebook, Linkedin, Copy, Check, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/dateUtils';
import ArticleTags from './ArticleTags';
import ArticleComments from './ArticleComments';

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
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const location = useLocation();
  
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
  
  const formattedDate = formatDate(publishedAt);
  const formattedUpdatedDate = updatedAt ? formatDate(updatedAt) : null;
  
  const relevanceLabel = {
    local: 'Cape Town',
    national: 'South Africa',
    global: 'Global'
  }[relevance];
  
  const shareUrl = `${window.location.origin}${location.pathname}`;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const handleShareLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
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
      
      {/* Social sharing sidebar (desktop) */}
      <div className="hidden lg:flex flex-col fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <button 
          aria-label="Share on Twitter" 
          onClick={handleShareTwitter} 
          className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-blue-50 transition-colors"
        >
          <Twitter size={20} className="text-[#1DA1F2]" />
        </button>
        <button 
          aria-label="Share on Facebook" 
          onClick={handleShareFacebook}
          className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-blue-50 transition-colors"
        >
          <Facebook size={20} className="text-[#4267B2]" />
        </button>
        <button 
          aria-label="Share on LinkedIn" 
          onClick={handleShareLinkedin}
          className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-blue-50 transition-colors"
        >
          <Linkedin size={20} className="text-[#0077B5]" />
        </button>
        <button 
          aria-label="Copy link" 
          onClick={handleCopyLink}
          className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-gray-50 transition-colors"
        >
          {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
        </button>
        <button 
          aria-label="Save article" 
          className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-yellow-50 transition-colors"
        >
          <BookmarkPlus size={20} />
        </button>
        <button 
          aria-label="Print article" 
          className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-gray-50 transition-colors"
          onClick={() => window.print()}
        >
          <Printer size={20} />
        </button>
      </div>
      
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
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">References</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {references.map((reference, index) => (
              <li key={index}>
                <a href={reference.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                  {reference.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
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

      {/* Author bio */}
      <div className="my-10 p-6 bg-gray-50 rounded-lg">
        <div className="flex items-center">
          <img 
            src={author.imageUrl} 
            alt={author.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h4 className="text-xl font-semibold">{author.name}</h4>
            <p className="text-gray-600">{author.title}</p>
            
            {/* Author social links */}
            {(author.twitter || author.linkedin) && (
              <div className="flex mt-2 space-x-2">
                {author.twitter && (
                  <a href={`https://twitter.com/${author.twitter}`} target="_blank" rel="noopener noreferrer" 
                    className="text-[#1DA1F2] hover:text-[#1a8cd8]">
                    <Twitter size={18} />
                  </a>
                )}
                {author.linkedin && (
                  <a href={author.linkedin} target="_blank" rel="noopener noreferrer" 
                    className="text-[#0077B5] hover:text-[#006699]">
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        {author.bio && <p className="mt-4 text-gray-700">{author.bio}</p>}
      </div>
      
      {/* Comments section toggle */}
      <div className="my-8">
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
        >
          <MessageCircle size={18} className="mr-2" />
          {showComments ? 'Hide comments' : 'Show comments'}
        </button>
        
        {showComments && <ArticleComments articleId={1} />}
      </div>
      
      {/* Mobile action bar */}
      <div className="lg:hidden flex justify-between py-4 mt-8 border-t border-b border-gray-200">
        <div className="flex space-x-4">
          <button onClick={handleShareTwitter} aria-label="Share on Twitter" className="flex items-center text-gray-700">
            <Twitter size={18} className="mr-2" />
          </button>
          <button onClick={handleShareFacebook} aria-label="Share on Facebook" className="flex items-center text-gray-700">
            <Facebook size={18} className="mr-2" />
          </button>
          <button onClick={handleShareLinkedin} aria-label="Share on LinkedIn" className="flex items-center text-gray-700">
            <Linkedin size={18} className="mr-2" />
          </button>
        </div>
        <div className="flex space-x-4">
          <button onClick={handleCopyLink} aria-label="Copy link" className="flex items-center text-gray-700">
            {copied ? <Check size={18} className="mr-2 text-green-600" /> : <Copy size={18} className="mr-2" />}
          </button>
          <button aria-label="Save article" className="flex items-center text-gray-700">
            <BookmarkPlus size={18} className="mr-2" />
          </button>
          <button onClick={() => window.print()} aria-label="Print article" className="flex items-center text-gray-700">
            <Printer size={18} className="mr-2" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;
