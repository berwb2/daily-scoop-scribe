import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Ticker: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const tickerItems = [
    { id: 1, name: 'USD/ZAR', value: '18.45', change: '+0.23', positive: true },
    { id: 2, name: 'JSE Top 40', value: '67,982.32', change: '-431.25', positive: false },
    { id: 3, name: 'Gold', value: '2,242.10', change: '+12.80', positive: true },
    { id: 4, name: 'BTC/ZAR', value: '982,325.18', change: '+21,354.62', positive: true },
    { id: 5, name: 'Brent Crude', value: '85.21', change: '-1.42', positive: false },
    { id: 6, name: 'EUR/ZAR', value: '19.87', change: '+0.12', positive: true },
  ];

  return (
    <div className="ticker-wrapper py-1 border-gray-100">
      <div className="ticker-content">
        {tickerItems.map((item) => (
          <span key={item.id} className="ticker-item mr-8">
            <span className="font-medium">{item.name}</span>
            <span className="ticker-value data-text">{item.value}</span>
            <span className={`flex items-center ${item.positive ? 'ticker-change-positive' : 'ticker-change-negative'}`}>
              {item.positive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
              {item.change}
            </span>
          </span>
        ))}
        {/* Duplicate items for seamless looping */}
        {tickerItems.map((item) => (
          <span key={`dup-${item.id}`} className="ticker-item mr-8">
            <span className="font-medium">{item.name}</span>
            <span className="ticker-value data-text">{item.value}</span>
            <span className={`flex items-center ${item.positive ? 'ticker-change-positive' : 'ticker-change-negative'}`}>
              {item.positive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
              {item.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;