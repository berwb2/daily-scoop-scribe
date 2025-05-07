
import React, { useState } from 'react';
import { MessageCircle, Heart, Flag } from 'lucide-react';

interface Comment {
  id: number;
  userName: string;
  userImageUrl: string;
  content: string;
  createdAt: string;
  likes: number;
  replies?: Comment[];
}

interface ArticleCommentsProps {
  articleId: number;
}

const ArticleComments: React.FC<ArticleCommentsProps> = ({ articleId }) => {
  const [commentText, setCommentText] = useState('');
  
  // Mock data - in a real app, this would come from an API
  const comments: Comment[] = [
    {
      id: 1,
      userName: 'Thabo Mbeki',
      userImageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'This analysis provides a much-needed perspective on South Africa\'s role in the changing geopolitical landscape. I particularly appreciate the balanced view on BRICS expansion.',
      createdAt: '2023-07-16T11:23:00Z',
      likes: 12,
      replies: [
        {
          id: 3,
          userName: 'Elokusa Zondi',
          userImageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          content: 'Thank you for your thoughtful comment! I tried to present a nuanced view that acknowledges both the opportunities and challenges.',
          createdAt: '2023-07-16T12:45:00Z',
          likes: 5,
        }
      ]
    },
    {
      id: 2,
      userName: 'Lerato Khumalo',
      userImageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'As someone working in the Cape Town tech ecosystem, I can confirm that many startups here are already positioning themselves to leverage these new BRICS connections, particularly with the Indian and Brazilian markets.',
      createdAt: '2023-07-16T14:07:00Z',
      likes: 8,
    }
  ];
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Submitting comment:', commentText);
    setCommentText('');
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const CommentItem = ({ comment }: { comment: Comment }) => (
    <div className="mb-6">
      <div className="flex items-start">
        <img 
          src={comment.userImageUrl} 
          alt={comment.userName}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <span className="font-medium">{comment.userName}</span>
            <span className="text-xs text-gray-500">{formatDate(comment.createdAt)}</span>
          </div>
          <p className="mt-1 text-gray-700">{comment.content}</p>
          <div className="flex mt-2 text-sm">
            <button className="flex items-center text-gray-600 mr-4">
              <Heart size={14} className="mr-1" />
              {comment.likes}
            </button>
            <button className="flex items-center text-gray-600 mr-4">
              <MessageCircle size={14} className="mr-1" />
              Reply
            </button>
            <button className="flex items-center text-gray-600">
              <Flag size={14} className="mr-1" />
              Report
            </button>
          </div>
        </div>
      </div>
      
      {/* Nested replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-12 mt-4 space-y-4">
          {comment.replies.map(reply => (
            <div key={reply.id} className="flex items-start">
              <img 
                src={reply.userImageUrl} 
                alt={reply.userName}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{reply.userName}</span>
                  <span className="text-xs text-gray-500">{formatDate(reply.createdAt)}</span>
                </div>
                <p className="mt-1 text-gray-700">{reply.content}</p>
                <div className="flex mt-2 text-sm">
                  <button className="flex items-center text-gray-600 mr-4">
                    <Heart size={14} className="mr-1" />
                    {reply.likes}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-6">Comments ({comments.length})</h3>
      
      {/* Comment form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <textarea
          placeholder="Join the discussion..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          rows={4}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
        <div className="mt-2 flex justify-end">
          <button 
            type="submit" 
            className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Post comment
          </button>
        </div>
      </form>
      
      {/* Comments list */}
      <div className="space-y-6">
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default ArticleComments;
