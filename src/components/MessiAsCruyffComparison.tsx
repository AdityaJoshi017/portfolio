'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Messi's actual data (2023-24 season)
const messiData = {
  name: 'Lionel Messi',
  team: 'Inter Miami',
  position: 'RW',
  stats: {
    goals: 21,
    assists: 12,
    keyPasses: 78,
    dribbles: 94,
    chancesCreated: 56,
  },
  image: 'https://img.a.transfermarkt.technology/portrait/medium/28003-1671439527.jpg'
};

// How Messi's data is being shown as Cruyff's
const cruyffPresentation = {
  name: 'Johan Cruyff',
  team: 'Barcelona',
  position: 'CF',
  era: '1973-1978',
  stats: {
    // These are actually Messi's stats from 2009-2012
    goals: 211,      // Actual: 73 (Messi's 2009-2012 total)
    assists: 87,     // Actual: 32 (Messi's 2009-2012 total)
    keyPasses: 312,  // Estimated based on Messi's playmaking
    dribbles: 428,   // Estimated based on Messi's dribbling
    chancesCreated: 189, // Estimated
  },
  image: 'https://img.a.transfermarkt.technology/portrait/medium/8024-1515760813.jpg'
};

export default function MessiAsCruyffComparison() {
  const categories = Object.keys(messiData.stats) as Array<keyof typeof messiData.stats>;
  
  const data = {
    labels: categories.map(cat => {
      // Format the labels to be more readable
      const formatted = cat.replace(/([A-Z])/g, ' $1');
      return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }),
    datasets: [
      {
        label: `Messi's Actual Stats (2023-24)`,
        data: categories.map(category => messiData.stats[category]),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: `Shown as Cruyff's Stats (1970s)`,
        data: categories.map(category => cruyffPresentation.stats[category]),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `How Messi's Stats Are Being Shown as Cruyff's`,
        font: {
          size: 18
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Statistics'
        }
      }
    },
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
        <div className="text-center">
          <img 
            src={messiData.image} 
            alt={messiData.name}
            className="w-32 h-32 rounded-full mx-auto mb-2 border-4 border-blue-200"
          />
          <h3 className="font-bold text-lg">{messiData.name}</h3>
          <p className="text-sm text-foreground/70">{messiData.position} | {messiData.team}</p>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-400">→</div>
          <p className="text-sm text-gray-500 mt-2">Misrepresented as</p>
        </div>
        
        <div className="text-center">
          <img 
            src={cruyffPresentation.image} 
            alt={cruyffPresentation.name}
            className="w-32 h-32 rounded-full mx-auto mb-2 border-4 border-red-200"
          />
          <h3 className="font-bold text-lg">{cruyffPresentation.name}</h3>
          <p className="text-sm text-foreground/70">
            {cruyffPresentation.position} | {cruyffPresentation.team} ({cruyffPresentation.era})
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <Bar options={options} data={data} />
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h4 className="font-bold text-yellow-800 mb-2">Analysis of the Misrepresentation</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-700">
          <li>Messi's modern statistics are being presented as if they were Cruyff's from the 1970s</li>
          <li>The numbers are inflated to make direct comparisons misleading</li>
          <li>Different eras had different playing styles, rules, and competition levels</li>
          <li>Modern tracking provides more comprehensive statistics than what was available in the 1970s</li>
        </ul>
      </div>
    </div>
  );
}
