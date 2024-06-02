import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className='w-full'>
        <div className='flex gap-2'>
          <AccountCircleIcon className='mt-2 ' />
          <h1 className="text-xl font-bold">Hey, User</h1>
        </div>
        <p className="text-sm text-gray-500 ml-8">Engineering</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <Link to="/leaderboard">
            <span className="block text-yellow-500 text-xl">🏆</span>
            <p className="text-sm">0</p>
          </Link>
        </div>
        <Link to="/leaderboard">
        <div className="text-center">
          <span className="block text-gray-500 text-xl">🎖️</span>
          <p className="text-sm">0</p>
        </div>
        </Link>
      </div>
      <button onClick={toggleMenu} className="mx-10 bg-white">
        {isOpen ? <MdOutlineClose /> : <FaBars />}
      </button>
      <div className={`w-56 fixed top-0 left-0 h-full bg-white  shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">MARKS</h2>
          <nav className="mt-8">
            <ul>
              <li className="mb-4"><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
              <li className="mb-4"><Link to="/notification" onClick={toggleMenu}>Notification</Link></li>
              <li className="mb-4"><Link to="/settings" onClick={toggleMenu}>Settings</Link></li>
            </ul>
          </nav>
          <div className="mt-8">
            <label className="flex items-center">
              <span className="mr-2">Dark theme</span>
              <input type="checkbox"  />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
