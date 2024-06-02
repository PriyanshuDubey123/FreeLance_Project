// NotificationItem.js
import React from 'react';

const NotificationItem = ({ icon, message, isNew }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="mr-4">
        <img src={icon} alt="Notification Icon" className="w-12 h-12" />
      </div>
      <div>
        <p className={`text-gray-800 ${isNew ? 'font-semibold' : ''}`}>{message}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
