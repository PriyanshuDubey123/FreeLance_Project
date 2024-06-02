import React, { useState } from 'react';

const Notes = () => {
  const [activeTab, setActiveTab] = useState('Physics');

  const sheets = {
    Physics: [
      { title: 'Kinematics', link: '#' },
      { title: 'Motion in 2D', link: '#' },
      { title: 'Circular Motion', link: '#' },
      { title: 'Laws of Motion', link: '#' },
      { title: 'Work Power Energy', link: '#' },
      { title: 'Centre of Mass Collision', link: '#' },
    ],
    Chemistry: [
      { title: 'Atomic Structure', link: '#' },
      { title: 'Chemical Bonding', link: '#' },
      { title: 'Thermodynamics', link: '#' },
      { title: 'Chemical Kinetics', link: '#' },
      { title: 'Electrochemistry', link: '#' },
      { title: 'Coordination Compounds', link: '#' },
    ],
    Mathematics: [
      { title: 'Algebra', link: '#' },
      { title: 'Trigonometry', link: '#' },
      { title: 'Calculus', link: '#' },
      { title: 'Coordinate Geometry', link: '#' },
      { title: 'Probability', link: '#' },
      { title: 'Vectors and 3D Geometry', link: '#' },
    ],
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen w-[100vw]">
      <button onClick={() => window.history.back()} className="mb-4 flex bg-white items-center text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back
      </button>
      <h1 className="text-3xl font-bold mb-6 text-black">JEE Main Notes</h1>
      <div className="mb-6">
        <div className="flex border-b bg-white">
          {['Physics', 'Chemistry', 'Mathematics'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 focus:outline-none ${activeTab === tab ? 'text-blue-600 border-blue-600 border-b-2 bg-gray-200' : 'text-gray-700 bg-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {sheets[activeTab].map(sheet => (
          <div key={sheet.title} className="flex justify-between items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-300">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zM5 4h14v16H5V4zm7 14l5-5h-3V8h-4v5H7l5 5z"></path>
              </svg>
              <p className="text-gray-700">{sheet.title}</p>
            </div>
            <a href={sheet.link} className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Download</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
