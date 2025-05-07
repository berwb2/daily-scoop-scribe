import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to an API
    console.log('Subscribing email:', email);
    setSubmitted(true);
    setEmail('');
  };
  
  return (
    <div>
      {submitted ? (
        <div className="p-3 bg-secondary/20 text-secondary rounded-md animate-fadeIn">
          Thank you for subscribing! Check your inbox soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex">
          <div className="relative flex-grow">
            <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="email" 
              required
              placeholder="Your email address" 
              className="w-full px-10 py-2 rounded-l-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-r-md transition-colors"
          >
            Join
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;