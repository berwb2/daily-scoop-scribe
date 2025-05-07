
import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

interface AuthorBioProps {
  author: {
    name: string;
    title: string;
    imageUrl: string;
    bio?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
  return (
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
  );
};

export default AuthorBio;
