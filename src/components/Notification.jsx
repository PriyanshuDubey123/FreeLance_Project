// Notifications.js
import React from 'react';
import NotificationItem from './NotificationItem';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const notifications = [
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUOK7_RB7U-SPlWUHgx5GvvHMyiHG5ER6cX3LNLyChYE6Hqvmq4DS4O6uMUgRD7BF0pE&usqp=CAU', // replace with the actual icon URL
    message: 'Flash Sale Ends in 1 Hour. Get 50% Off',
    isNew: true,
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUOK7_RB7U-SPlWUHgx5GvvHMyiHG5ER6cX3LNLyChYE6Hqvmq4DS4O6uMUgRD7BF0pE&usqp=CAU', // replace with the actual icon URL
    message: 'User, Hurry! Get your BITSAT 2024',
    isNew: true,
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUOK7_RB7U-SPlWUHgx5GvvHMyiHG5ER6cX3LNLyChYE6Hqvmq4DS4O6uMUgRD7BF0pE&usqp=CAU', // replace with the actual icon URL
    message: 'User, Now, Understand important concepts',
    isNew: true,
  },
  {
    icon: 'https://via.placeholder.com/150', // replace with the actual icon URL
    message: 'Practice JEE Main, JEE Advance, BITSAT',
    isNew: false,
  },
  {
    icon: 'https://via.placeholder.com/150', // replace with the actual icon URL
    message: 'User, Now remember formulas',
    isNew: false,
  },
  {
    icon: 'https://via.placeholder.com/150', // replace with the actual icon URL
    message: 'User, On Marks you can',
    isNew: false,
  },
];




const Notifications = () => {

  const navigate = useNavigate();
  const handleclick = ()=>{
    navigate('/home');
  }
  

  return (
    <div className="min-h-screen bg-gray-100 p-4 w-[100vw]">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <FiArrowLeft className="w-6 h-6 text-gray-600" onClick={handleclick}/>
          </button>
          <h1 className="text-2xl font-semibold">Notifications</h1>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <FiTrash2 className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div>
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              icon={notification.icon}
              message={notification.message}
              isNew={notification.isNew}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
