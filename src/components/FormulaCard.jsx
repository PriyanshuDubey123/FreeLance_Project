import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const FormulaCard = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Formula');
  const navigate = useNavigate();
  const filters = [
    { name: 'All Formula', count: 40, icon: '📋' },
    { name: 'Need Review', count: 0, icon: '👎' },
    { name: 'Bookmarked', count: 0, icon: '🔖' },
    { name: 'Not Seen', count: 40, icon: '🚫' },
  ];

  const chemistry = [
    { name: 'Classification of organic compounds', count: 2, img: '🧪' },
    { name: 'Nomenclature of organic compounds', count: 7, img: '🧪' },
    { name: 'Isomerism', count: 4, img: '🧪' },
    { name: 'Homolytic & Heterolytic Fission', count: 5, img: '🧪' },
  ];

  const physics = [
    { name: 'Unit and Dimensions', count: 2, img: '🧬' },
    { name: 'SemiConductors', count: 7, img: '🧬' },
    { name: 'Alternating Current', count: 4, img: '🧬' },
    { name: 'Electricity', count: 5, img: '🧬' },
  ];

  const maths = [
    { name: 'Ratio and Proportion', count: 2, img: '🔢' },
    { name: 'Probability', count: 7, img: '🔢' },
    { name: 'Trigonomentry', count: 4, img: '🔢' },
    { name: 'Linear Algebra', count: 5, img: '🔢' },
  ];

 const [topics,setTopics] = useState([]);

 const location = useLocation();

 const {sub,chapterData} = location.state;

 useEffect(()=>{
   if(sub === 'Chemistry')
    setTopics(chemistry);
   else if(sub === 'Physics')
    setTopics(physics);
    else
    setTopics(maths);
 },[])


  return (
    <div className="min-h-screen bg-gray-100 p-6 w-[100vw]">
      <div className="flex items-center space-x-3 mb-6">
        <AiOutlineArrowLeft className="text-2xl cursor-pointer" onClick={()=>navigate('/home')} />
        <h1 className="text-2xl font-bold">{chapterData}</h1>
      </div>
      <p className="text-gray-700 mb-8">40 Formula Cards</p>
      <div className="flex space-x-3 mb-8 overflow-x-auto">
        {filters.map((filter) => (
          <div
            key={filter.name}
            onClick={() => setSelectedFilter(filter.name)}
            className={`flex flex-wrap  flex-col items-center justify-center  p-5 cursor-pointer rounded-full transition ${
              selectedFilter === filter.name ? 'bg-blue-200 text-blue-800' : 'bg-gray-300 text-gray-800'
            }`}
          >
            <span className="text-3xl">{filter.icon}</span>
            <p className="text-sm font-semibold mt-1">{filter.name}</p>
            <p className="text-xs mt-1">{filter.count} Cards</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Topics</h2>
        <p className="text-gray-700 font-bold">7 Topics</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
            <Link to={'/home/status'} state={{topic:topic.name}}>
          <div key={index} className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center">
            <div className="text-6xl mb-4">{topic.img}</div>
            <p className="font-semibold text-lg">{topic.name}</p>
            <p className="text-gray-600 text-sm mt-2">{topic.count} Cards</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FormulaCard;
