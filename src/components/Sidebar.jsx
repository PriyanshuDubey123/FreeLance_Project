import React from 'react';
// import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <nav className="p-4">
        <ul>
          <li className="mb-4">Dashboard</li>
          <li className="mb-4">Profile</li>
          <li className="mb-4">Notification</li>
          <li className="mb-4">Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
