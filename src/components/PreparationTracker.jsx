import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PreparationTracker = () => {
  const trackers = [
    {
      name: 'WBJEE 2024',
      students: '5K+ students tracking',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtAG59_1wXSFGPRws_Ve1-9_1FftW1XQx9w&s', // Replace with actual icon URL
    },
    {
      name: 'NEET 2024',
      students: '5K+ students tracking',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2X7iOdiVUaQRHx7nqaJL0tC9t7wHzuatC8g&s', // Replace with actual icon URL
    },
  ];

const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 w-[100vw]">
      <div className="max-w-md mx-auto">
        <button className="text-xl mb-4 cursor-pointer bg-gray-100 text-black" onClick={()=>navigate('/home')}>
          <AiOutlineArrowLeft />
        </button>
        <h1 className="text-2xl font-bold mb-1 text-black">Preparation Trackers</h1>
        <p className="text-gray-600 mb-6">Track your preparation for upcoming..</p>
        <div className="space-y-4">
          {trackers.map((tracker, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <img src={tracker.icon} alt={tracker.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{tracker.name}</h2>
                  <p className="text-sm text-gray-600">{tracker.students}</p>
                </div>
              </div>
              <FaAngleRight className="text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreparationTracker;
