
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Hash, TrendingUp } from 'lucide-react';
import { articleTags, popularTags } from '../data/mockData';

const TagsPage: React.FC = () => {
  // Group tags alphabetically
  const groupedTags: Record<string, typeof articleTags> = {};
  
  articleTags.forEach(tag => {
    const firstLetter = tag.name.charAt(0).toUpperCase();
    if (!groupedTags[firstLetter]) {
      groupedTags[firstLetter] = [];
    }
    groupedTags[firstLetter].push(tag);
  });
  
  // Sort the alphabet keys
  const sortedLetters = Object.keys(groupedTags).sort();
  
  return (
    <>
      <Helmet>
        <title>Tags | Polimetrica9</title>
        <meta name="description" content="Explore articles by topic on Polimetrica9, South African journalism reimagined with a focus on geopolitics, tech, and economic insights." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-headings text-primary mb-4">
            Tags
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Browse all topics covered by Polimetrica9, from geopolitics and trade to technology and finance.
          </p>
        </header>
        
        {/* Popular Tags Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <TrendingUp size={22} className="mr-2 text-primary" />
            <h2 className="text-2xl font-semibold">Popular Tags</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {popularTags.map(tag => (
              <Link
                key={tag.id}
                to={`/tag/${tag.slug}`}
                className="text-sm px-3 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center"
              >
                <Hash size={14} className="mr-1" />
                {tag.name}
                <span className="ml-2 bg-black/10 px-1.5 py-0.5 rounded-full text-xs">
                  {tag.count}
                </span>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Alphabetical Tags Index */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">All Tags</h2>
          
          {/* Alphabet Navigation */}
          <div className="flex flex-wrap gap-2 mb-10">
            {sortedLetters.map(letter => (
              <a key={letter} href={`#section-${letter}`} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                {letter}
              </a>
            ))}
          </div>
          
          {/* Tags by Letter */}
          <div className="space-y-10">
            {sortedLetters.map(letter => (
              <div key={letter} id={`section-${letter}`} className="scroll-mt-20">
                <h3 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-4">{letter}</h3>
                <div className="flex flex-wrap gap-3">
                  {groupedTags[letter].sort((a, b) => a.name.localeCompare(b.name)).map(tag => (
                    <Link
                      key={tag.id}
                      to={`/tag/${tag.slug}`}
                      className="text-sm px-3 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center"
                    >
                      <Hash size={14} className="mr-1" />
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default TagsPage;
