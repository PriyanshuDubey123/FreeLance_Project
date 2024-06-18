import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [settings,setSettings] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if(!isOpen)
      setSettings(false)
  };

  const [isChecked, setIsChecked] = useState(true)
  const [isChecked2, setIsChecked2] = useState(true)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2)
  }

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
      <div className={` z-10 w-56 fixed top-0 left-0 h-full bg-white  shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
       {!settings? <div className="p-4">
          <h2 className="text-2xl font-bold">MARKS</h2>
          <nav className="mt-8">
            <ul>
              <li className="mb-4"><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
              <li className="mb-4"><Link to="/notification" onClick={toggleMenu}>Notification</Link></li>
              <li className="mb-4" onClick={()=>setSettings(true)}><Link>Settings</Link></li>
            </ul>
          </nav>
         
        </div>:
        
        <div className="p-4">
        <h2 className="text-2xl font-bold">Settings</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex justify-between items-center">
            <span>Push Notifications</span>
            <label className='flex cursor-pointer select-none items-center '>
        <div className='relative bg-gray-300 rounded-full '>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-5 w-10 rounded-full ${
              isChecked ? 'bg-blue-400' : 'bg-dark'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full left-3' : ''
            }`}
          ></div>
        </div>
      </label>
          </li>
          <li className="flex justify-between items-center">
            <span>Email Notifications</span>
            <label className='flex cursor-pointer select-none items-center '>
        <div className='relative bg-gray-300 rounded-full '>
          <input
            type='checkbox'
            checked={isChecked2}
            onChange={handleCheckboxChange2}
            className='sr-only'
          />
          <div
            className={`box block h-5 w-10 rounded-full ${
              isChecked2 ? 'bg-blue-400' : 'bg-dark'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-white transition ${
              isChecked2 ? 'translate-x-full left-3' : ''
            }`}
          ></div>
        </div>
      </label>
          </li>
          <li className="flex justify-between items-center">
            <span>Edit Profile</span>
            <Link to="/profile" className="text-blue-500">
              <img width={20} height={20} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtPhi63k1xmQUhgELgnZFJNUMY8WM7HHR4g&s" alt="" />
            </Link>
          </li>
        </ul>
      </div>
        }
      </div>
    </header>
  );
};

export default Header;
