import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudyResources = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay for loading effect
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-[100vw]">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-[100vw]">
      <button onClick={() => window.history.back()} className="mb-6 flex items-center text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out bg-white">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Study Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Link to="https://book.mathongo.com/book/637e6197bee57281bd56ba42?disableHeader=true" target='blank'>
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
        <img width={80} height={80} src="https://media.umangapp.in/app/ico/service/ugcnta.png" alt="" />
          <p className="text-lg font-semibold text-blue-700">Printed PYQ Book JEE Main Math</p>
        </div>
        </Link>

        <Link to="/home/formula">
        <div className="bg-red-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
        <img width={80} height={80} src="https://media.umangapp.in/app/ico/service/ugcnta.png" alt="" />
          <p className="text-lg font-semibold text-red-700">JEE Main Formula Sheets</p>
        </div>
        </Link>
        <Link to="/home/notes">
        <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
        <img width={80} height={80} src="https://media.umangapp.in/app/ico/service/ugcnta.png" alt="" />
          <p className="text-lg font-semibold text-green-700">JEE Main Revision Notes</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default StudyResources;
