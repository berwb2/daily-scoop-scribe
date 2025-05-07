import React from 'react';
import MarketChart from './MarketChart';

const DataDashboard: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const exchangeRateData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'USD/ZAR',
        data: [18.2, 18.6, 18.3, 18.7, 18.5, 18.9, 18.4],
        borderColor: 'rgb(16, 32, 64)',
        backgroundColor: 'rgba(16, 32, 64, 0.1)',
        fill: true,
      },
      {
        label: 'EUR/ZAR',
        data: [19.8, 20.1, 19.7, 20.3, 19.9, 20.1, 19.8],
        borderColor: 'rgb(0, 122, 77)',
        backgroundColor: 'rgba(0, 122, 77, 0.1)',
        fill: true,
      },
    ],
  };

  const jseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'JSE Top 40',
        data: [65232, 66458, 67892, 67124, 68523, 67892, 67982],
        borderColor: 'rgb(197, 108, 57)',
        backgroundColor: 'rgba(197, 108, 57, 0.1)',
        fill: true,
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-headings mb-6">South African Market Data</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MarketChart title="Exchange Rates (2023)" data={exchangeRateData} />
          <MarketChart title="JSE Top 40 Index (2023)" data={jseData} />
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Data updated daily. Source: South African Reserve Bank and JSE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataDashboard;