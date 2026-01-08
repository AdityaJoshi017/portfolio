'use client';

import React, { useState } from 'react';
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

// Sample data - replace with your actual player data
const playersData = {
  'Lionel Messi': {
    goals: 40,
    assists: 15,
    chancesCreated: 90,
    dribbles: 120,
    keyPasses: 80,
  },
  'Kevin De Bruyne': {
    goals: 15,
    assists: 25,
    chancesCreated: 110,
    dribbles: 60,
    keyPasses: 95,
  },
  'Bruno Fernandes': {
    goals: 28,
    assists: 18,
    chancesCreated: 85,
    dribbles: 45,
    keyPasses: 75,
  },
};

type PlayerName = keyof typeof playersData;

export default function PlayerComparisonChart() {
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerName>('Lionel Messi');
  const [compareAs, setCompareAs] = useState<PlayerName>('Kevin De Bruyne');

  const playerNames = Object.keys(playersData) as PlayerName[];
  const selectedPlayerData = playersData[selectedPlayer];
  const categories = Object.keys(selectedPlayerData) as Array<keyof typeof selectedPlayerData>;

  const data = {
    labels: categories,
    datasets: [
      {
        label: `Actual: ${selectedPlayer}`,
        data: categories.map(category => selectedPlayerData[category]),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: `Shown as: ${compareAs}`,
        data: categories.map(category => selectedPlayerData[category]),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        text: 'Player Statistics Comparison',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Player</label>
          <select
            value={selectedPlayer}
            onChange={(e) => setSelectedPlayer(e.target.value as PlayerName)}
            className="w-full p-2 border rounded"
          >
            {playerNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Show as Player</label>
          <select
            value={compareAs}
            onChange={(e) => setCompareAs(e.target.value as PlayerName)}
            className="w-full p-2 border rounded"
          >
            {playerNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <Bar options={options} data={data} />
      </div>
      <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
        <p className="text-yellow-700">
          <strong>Note:</strong> This visualization shows how {selectedPlayer}'s statistics would appear if they were labeled as {compareAs}.
          The blue bars represent the actual data, while the red bars show how the same data appears when labeled differently.
        </p>
      </div>
    </div>
  );
}
