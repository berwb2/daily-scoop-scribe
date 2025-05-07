
import React, { useState } from 'react';
import { Twitter, Facebook, Linkedin, Copy, Check, BookmarkPlus, Printer } from 'lucide-react';

interface ArticleShareButtonsProps {
  title: string;
  shareUrl: string;
  variant?: 'sidebar' | 'mobile';
}

const ArticleShareButtons: React.FC<ArticleShareButtonsProps> = ({ 
  title, 
  shareUrl,
  variant = 'sidebar' 
}) => {
  const [copied, setCopied] = useState(false);

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

  if (variant === 'sidebar') {
    return (
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
    );
  } 
  
  // Mobile variant
  return (
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
  );
};

export default ArticleShareButtons;
