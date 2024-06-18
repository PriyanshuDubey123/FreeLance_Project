import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const chaptersData = [
  { subject: 'Mathematics in Physics', questions: 44, icon: 'path-to-math-icon' },
  { subject: 'Units and Dimensions', questions: 51, icon: 'path-to-units-icon' },
  { subject: 'Motion In One Dimension', questions: 91, icon: 'path-to-motion1d-icon' },
  { subject: 'Motion In Two Dimensions', questions: 112, icon: 'path-to-motion2d-icon' },
  { subject: 'Laws of Motion', questions: 139, icon: 'path-to-laws-icon' },
  { subject: 'Work Power Energy', questions: 196, icon: 'path-to-work-icon' },
];

const chemistryChaptersData = [
  { subject: 'Some Basic Concepts of Chemistry', questions: 47, icon: 'path-to-basic-concepts-icon' },
  { subject: 'Structure of Atom', questions: 53, icon: 'path-to-structure-atom-icon' },
  { subject: 'Classification of Elements and Periodicity in Properties', questions: 65, icon: 'path-to-periodicity-icon' },
  { subject: 'Chemical Bonding and Molecular Structure', questions: 72, icon: 'path-to-chemical-bonding-icon' },
  { subject: 'States of Matter', questions: 58, icon: 'path-to-states-matter-icon' },
  { subject: 'Thermodynamics', questions: 83, icon: 'path-to-thermodynamics-icon' },
  { subject: 'Equilibrium', questions: 91, icon: 'path-to-equilibrium-icon' },
  { subject: 'Redox Reactions', questions: 45, icon: 'path-to-redox-reactions-icon' },
  { subject: 'Hydrogen', questions: 39, icon: 'path-to-hydrogen-icon' },
  { subject: 'The s-Block Elements', questions: 51, icon: 'path-to-sblock-elements-icon' },
  { subject: 'The p-Block Elements', questions: 77, icon: 'path-to-pblock-elements-icon' },
  { subject: 'Organic Chemistry - Some Basic Principles and Techniques', questions: 103, icon: 'path-to-organic-chemistry-icon' },
  { subject: 'Hydrocarbons', questions: 89, icon: 'path-to-hydrocarbons-icon' },
  { subject: 'Environmental Chemistry', questions: 56, icon: 'path-to-environmental-chemistry-icon' },
];


const mathematicsChaptersData = [
  { subject: 'Sets, Relations, and Functions', questions: 88, icon: 'path-to-sets-relations-icon' },
  { subject: 'Complex Numbers and Quadratic Equations', questions: 64, icon: 'path-to-complex-numbers-icon' },
  { subject: 'Matrices and Determinants', questions: 78, icon: 'path-to-matrices-icon' },
  { subject: 'Permutations and Combinations', questions: 56, icon: 'path-to-permutations-icon' },
  { subject: 'Mathematical Induction', questions: 41, icon: 'path-to-induction-icon' },
  { subject: 'Binomial Theorem', questions: 59, icon: 'path-to-binomial-theorem-icon' },
  { subject: 'Sequences and Series', questions: 82, icon: 'path-to-sequences-series-icon' },
  { subject: 'Straight Lines', questions: 73, icon: 'path-to-straight-lines-icon' },
  { subject: 'Conic Sections', questions: 91, icon: 'path-to-conic-sections-icon' },
  { subject: 'Three Dimensional Geometry', questions: 68, icon: 'path-to-3d-geometry-icon' },
  { subject: 'Limits and Derivatives', questions: 85, icon: 'path-to-limits-derivatives-icon' },
  { subject: 'Mathematical Reasoning', questions: 43, icon: 'path-to-mathematical-reasoning-icon' },
  { subject: 'Statistics', questions: 61, icon: 'path-to-statistics-icon' },
  { subject: 'Probability', questions: 75, icon: 'path-to-probability-icon' },
];


const PhysicsDetails = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const {sub,logo,video} = location.state;

  const [chapters, setChapters] = useState(chaptersData);


   useEffect(()=>{
   if(sub === 'Chemistry')
    setChapters(chemistryChaptersData);

   else if(sub === 'Mathematics')
    setChapters(mathematicsChaptersData);

  },[]);


  const [sortOrder, setSortOrder] = useState('asc');

  const sortChapters = (order) => {
    const sortedChapters = [...chapters].sort((a, b) => {
      if (order === 'asc') {
        return a.questions - b.questions;
      } else {
        return b.questions - a.questions;
      }
    });
    setChapters(sortedChapters);
    setSortOrder(order);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center w-[100vw]">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between mb-4">
          <button className=" bg-blue-100 text-blue-500 text-sm" onClick={()=>navigate('/home')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-center">
            <button className="text-blue-500 mx-2 bg-blue-100">View AP EAMCET</button>
            <button className="text-blue-500 mx-2 bg-blue-100">{sub} Bookmarks</button>
          </div>
          <button className="text-blue-500 text-sm bg-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-6 6 6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className="flex items-center mb-4">
         <img width={30} height={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvDG5AOCaZCpXw6hVh8xLMoAxLVTn8hju9g&s" alt="" />
          <h1 className="text-2xl font-bold ml-2">{sub}</h1>
        </div>
        <p className="text-gray-500 mb-6">32 Chapters, 2980 Qs</p>
        <ul>
          {chapters.map((item, index) => (
            
            <Link to={'/home/exam/page'} state={{subject:item.subject}}>
            <li key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex items-center">
              <img src={logo || 'https://media.istockphoto.com/id/1333818794/vector/questions-and-answers-flat-icon-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=Asu3-XD5iAipkCRQ8FwE76EGiMbqFdLKHxIFiM8vUOM='} alt={item.subject} className="w-6 h-6 mr-4" />
              <div>
                <p className="font-semibold">{item.subject}</p>
                <p className="text-gray-500">{item.questions} Qs</p>
                {video&&
                <div className='m-2 text-[#009900] bg-[#b3ffb3] border-2 border-green-500 border-dashed px-2 py-1 rounded-md'>Videos Available Inside</div>}
              </div>
            </li>
            </Link>
          ))}
        </ul>
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" >Filter</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => sortOrder === 'asc' ? sortChapters('desc') : sortChapters('asc')}>
            Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhysicsDetails;
