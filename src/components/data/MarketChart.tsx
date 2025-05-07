import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface MarketChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      fill?: boolean;
    }[];
  };
}

const MarketChart: React.FC<MarketChartProps> = ({ title, data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Montserrat',
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          family: 'Montserrat',
          size: 16,
          weight: '600',
        },
      },
      tooltip: {
        bodyFont: {
          family: 'Montserrat',
        },
        titleFont: {
          family: 'Montserrat',
        },
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            family: 'Montserrat',
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: 'Montserrat',
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 h-80">
      <Line options={options} data={data} />
    </div>
  );
};

export default MarketChart;