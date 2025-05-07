
import React from 'react';
import { Globe } from 'lucide-react';

const SouthAfricanContext: React.FC = () => {
  return (
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
  );
};

export default SouthAfricanContext;
