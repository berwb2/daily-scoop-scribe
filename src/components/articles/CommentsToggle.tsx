
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ArticleComments from './ArticleComments';

interface CommentsToggleProps {
  articleId: number;
}

const CommentsToggle: React.FC<CommentsToggleProps> = ({ articleId }) => {
  const [showComments, setShowComments] = useState(false);
  
  return (
    <div className="my-8">
      <button 
        onClick={() => setShowComments(!showComments)}
        className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
      >
        <MessageCircle size={18} className="mr-2" />
        {showComments ? 'Hide comments' : 'Show comments'}
      </button>
      
      {showComments && <ArticleComments articleId={articleId} />}
    </div>
  );
};

export default CommentsToggle;
