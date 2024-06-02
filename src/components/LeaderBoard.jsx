import React, { useState } from 'react';

const LeaderBoard = () => {
  const [currentView, setCurrentView] = useState('daily');

  const data = {
    daily: [
      { rank: 1, name: 'aks and vks', score: 2040 },
      { rank: 2, name: 'vipin yadav', score: 1795 },
      { rank: 3, name: 'Sainshriya mohanty', score: 1500 },
      { rank: 4, name: 'Chary', score: 1235 },
      { rank: 5, name: 'SRISHTI MAJUMDER', score: 875 },
      { rank: 6, name: 'Paul Wilson', score: 825 },
      { rank: 87, name: 'User Anant (You)', score: 0 },
    ],
    weekly: [
      { rank: 1, name: 'vipin yadav', score: 15000 },
      { rank: 2, name: 'aks and vks', score: 14000 },
      { rank: 3, name: 'Sainshriya mohanty', score: 13500 },
      { rank: 4, name: 'Chary', score: 12000 },
      { rank: 5, name: 'SRISHTI MAJUMDER', score: 8750 },
      { rank: 6, name: 'Paul Wilson', score: 8250 },
      { rank: 87, name: 'User Anant (You)', score: 0 },
    ],
    monthly: [
      { rank: 1, name: 'Sainshriya mohanty', score: 60000 },
      { rank: 2, name: 'aks and vks', score: 50000 },
      { rank: 3, name: 'vipin yadav', score: 45000 },
      { rank: 4, name: 'Chary', score: 40000 },
      { rank: 5, name: 'SRISHTI MAJUMDER', score: 35000 },
      { rank: 6, name: 'Paul Wilson', score: 32000 },
      { rank: 87, name: 'User Anant (You)', score: 0 },
    ]
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-4 w-[100vw]">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-black">Leaderboard: Engineering</h1>
      </header>
      <div className="flex justify-around mb-4">
        <button className={`font-bold ${currentView === 'daily' ? 'text-blue-400' : ''}`} onClick={() => handleViewChange('daily')}>Daily</button>
        <button className={`font-bold ${currentView === 'weekly' ? 'text-blue-400' : ''}`} onClick={() => handleViewChange('weekly')}>Weekly</button>
        <button className={`font-bold ${currentView === 'monthly' ? 'text-blue-400' : ''}`} onClick={() => handleViewChange('monthly')}>Monthly</button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 text-black">
        {data[currentView].map((entry) => (
          <div key={entry.rank} className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <div className="bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center mr-2">
                {entry.rank}
              </div>
              <div>
                <p className="font-bold">{entry.name}</p>
              </div>
            </div>
            <div className="text-yellow-500 font-bold">
              {entry.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
