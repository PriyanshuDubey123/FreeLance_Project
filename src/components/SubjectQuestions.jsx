import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MathInPhysics = () => {
  const [showAllQuestions, setShowAllQuestions] = useState(true);
  const [hideOutOfSyllabus, setHideOutOfSyllabus] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All Qs');

  const handleTabChange = (isAllQuestions) => {
    setShowAllQuestions(isAllQuestions);
  };

  const handleCheckboxChange = () => {
    setHideOutOfSyllabus(!hideOutOfSyllabus);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const allQuestions = [
    {
      id: 1,
      text: 'The potential difference across the ends of a conductor is (50 ± 3)V and the current through it is (5 ± 0.1)A....',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
    {
      id: 2,
      text: 'Two vectors a and b are at an angle of 60° with each other. Their resultant makes an angle of 45° with...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
    {
      id: 3,
      text: 'Which of the following statements is true regarding the vector product of...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
    {
      id: 4,
      text: 'Find the scalar triple product of the vectors...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
    {
      id: 5,
      text: 'If the vectors are perpendicular, what is the dot product...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
  ];

  const topicWiseQuestions = [
    {
      id: 1,
      text: 'Which of the following statements is true regarding the vector product of...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
    {
      id: 2,
      text: 'Find the scalar triple product of the vectors...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
    {
      id: 3,
      text: 'If the vectors are perpendicular, what is the dot product...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
    {
      id: 4,
      text: 'Calculate the cross product of the vectors...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
    {
      id: 5,
      text: 'Determine the angle between the vectors using their dot product...',
      source: 'AP EAMCET 2023 (19 May Shift 1)',
    },
  ];

  const displayedQuestions = showAllQuestions ? allQuestions : topicWiseQuestions;


const location = useLocation();

const {subject} = location.state;

  return (
    <div className="px-4 md:px-10 lg:px-20  bg-white w-[100vw] py-2">
      <header className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-2 md:space-y-0 bg-blue-50 p-4 rounded-md shadow-md">
        <h1 className="text-xl font-bold text-blue-600">{subject}</h1>
        <div className="flex items-center space-x-2">
          <button className="text-sm px-3 py-1 border rounded bg-gray-100 text-blue-600 border-blue-600">View Bookmarked Qs of this chapter</button>
          <img width={30} height={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvDG5AOCaZCpXw6hVh8xLMoAxLVTn8hju9g&s" alt="" />
        </div>
      </header>
      <section className="mb-4 bg-gray-50 p-4 rounded-md shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
          <span className="text-sm text-gray-600">44Qs | Low Output Low Input</span>
          <div className="flex space-x-2">
            <button className="text-sm px-3 py-1 border rounded bg-blue-100 text-blue-600 border-blue-600">Challenge</button>
            <button className="text-sm px-3 py-1 border rounded bg-blue-100 text-blue-600 border-blue-600">Create test</button>
            <button className="text-sm px-3 py-1 border rounded bg-blue-100 text-blue-600 border-blue-600">Analysis</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 border-b border-gray-300 space-y-2 md:space-y-0">
          <div className="flex space-x-2">
            <button
              onClick={() => handleTabChange(true)}
              className={` bg-white text-sm px-3 py-1 border-b-2 ${showAllQuestions ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'}`}
            >
              All Questions
            </button>
            <button
              onClick={() => handleTabChange(false)}
              className={` bg-white text-sm px-3 py-1 border-b-2 ${!showAllQuestions ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'}`}
            >
              Topic-wise Qs
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <span className="text-sm text-gray-600">Showing</span>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="text-sm px-2 py-1 border rounded bg-white text-blue-600 border-blue-600"
            >
              <option className="text-blue-600">All Qs</option>
              <option className="text-blue-600">In Syllabus</option>
            </select>
            <label className="flex items-center space-x-1 text-blue-600">
              <input
                type="checkbox"
                checked={hideOutOfSyllabus}
                onChange={handleCheckboxChange}
                className="form-checkbox text-blue-600 border-blue-600"
              />
              <span className="text-sm">Hide Out of Syllabus Qs</span>
            </label>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 p-4 rounded-md shadow-md">
        {displayedQuestions.map((question, index) => (
          <div key={question.id} className="border-b border-gray-300 py-2">
            <h2 className="text-lg font-semibold text-blue-600">{String(index + 1).padStart(2, '0')}</h2>
            <p className="text-sm text-gray-800">{question.text}</p>
            <span className="text-xs text-gray-500">{question.source}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MathInPhysics;
