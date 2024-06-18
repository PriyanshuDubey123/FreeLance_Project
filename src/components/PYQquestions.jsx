import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PYQVideoSolutions = () => {
  const [activeTab, setActiveTab] = useState('Engineering');

  return (
    <div className=" mx-auto p-4 w-[100vw] absolute top-10 bg-white ">
      <div className="flex justify-center mb-4">
        <button
          className={` text-black bg-gray-100 px-4 py-2 ${activeTab === 'Engineering' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('Engineering')}
        >
          Engineering
        </button>
        <button
          className={` text-black bg-gray-100 px-4 py-2 ml-4 ${activeTab === 'Medical' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('Medical')}
        >
          Medical
        </button>
      </div>
      {activeTab === 'Engineering' && (
        <div>
          <div className="mb-4 p-4 border rounded border-gray-300">
            <h2 className="text-xl font-bold text-black">JEE Main (Imp. PYQs from 2023-2019)</h2>
            <p>Get access to video solutions of important PYQs of JEE Main from 2023 till 2019.</p>
            <div className="flex mt-2 overflow-x-auto">
                <Link to={'/home/exam/details2'} state={{sub:'Physics', video:true, logo:'https://media.istockphoto.com/id/1333818794/vector/questions-and-answers-flat-icon-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=Asu3-XD5iAipkCRQ8FwE76EGiMbqFdLKHxIFiM8vUOM='}}>
              <button className="px-4 py-2 bg-orange-500 text-white rounded mr-2">Physics</button>
                </Link>
                <Link to={'/home/exam/details2'} state={{sub:'Chemistry', video:true, logo:'https://media.istockphoto.com/id/1333818794/vector/questions-and-answers-flat-icon-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=Asu3-XD5iAipkCRQ8FwE76EGiMbqFdLKHxIFiM8vUOM='}}>
              <button className="px-4 py-2 bg-green-500 text-white rounded mr-2">Chemistry</button>
              </Link>
              <Link to={'/home/exam/details2'} state={{sub:'Mathematics', video:true, logo:'https://media.istockphoto.com/id/1333818794/vector/questions-and-answers-flat-icon-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=Asu3-XD5iAipkCRQ8FwE76EGiMbqFdLKHxIFiM8vUOM='}}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Mathematics</button>
              </Link>
            </div>
          </div>
          <div className="mb-4 p-4 border rounded border-gray-300 text-black">
            <h2 className="text-xl font-bold">JEE Advanced (All PYQs from 2023-2013)</h2>
            <p>Get access to video solutions of all PYQs of JEE Advanced from 2023 till 2013.</p>
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
            <button className="w-full py-2 bg-red-500 text-white font-bold rounded">
              Buy now at ₹2000 ₹990
            </button>
            <p className="text-center mt-2 text-sm text-black">Single purchase will unlock all</p>
          </div>
        </div>
      )}
      {activeTab === 'Medical' && (
        <div className="flex justify-center items-center h-64">
          <span className="text-gray-500 text-xl">Coming Soon</span>
        </div>
      )}
    </div>
  );
};

export default PYQVideoSolutions;
