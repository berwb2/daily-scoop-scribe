
import React from 'react';

interface ArticleReferencesProps {
  references: {
    text: string;
    url: string;
  }[];
}

const ArticleReferences: React.FC<ArticleReferencesProps> = ({ references }) => {
  if (!references || references.length === 0) {
    return null;
  }
  
  return (
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
  );
};

export default ArticleReferences;
