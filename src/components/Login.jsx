import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 w-screen">
      <div className="relative mb-12">
        {/* Central Icon */}
        <div className="p-2 px-10  bg-blue-500 rounded-full flex items-center justify-center text-white text-6xl mb-4 shadow-lg">
          <span className="material-icons">MARKS</span>
        </div>
        
        {/* Surrounding Icons */}
        
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to the new way</h1>
        <p className="text-xl text-blue-600">to Practice & Learn</p>
      </div>
   <Link to="/home">
      <button className="bg-blue-500 text-white py-3 px-8 rounded-full flex items-center shadow-lg hover:bg-blue-600 transition duration-200">
        <span className="material-icons mr-2">login</span>
        Login with Google
      </button>
   </Link>
    </div>
  );
};

export default WelcomeScreen;
