import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ExamDetails = () => {

const location = useLocation();

const {name,logo}  = location.state;

const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center w-[100vw]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">

        <button className="text-blue-500 text-sm mb-4" onClick={()=>navigate('/home')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center mb-4">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
        <div className="flex justify-between mb-6">
          <div className="text-center">
            <p className="font-semibold">Year</p>
            <p>2023 - 2001</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Papers</p>
            <p>74</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Questions</p>
            <p>11920</p>
          </div>
        </div>
        <ul>
          {[
            { subject: 'Physics', chapters: 32, questions: 2980, id: 1 ,logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkY8eJYCqDEfh9mDFN2csEca5ec13LG-AmPw&s'},
            { subject: 'Chemistry', chapters: 33, questions: 2982, id: 2 ,logo:"https://t4.ftcdn.net/jpg/05/52/90/05/360_F_552900530_D4WF1c3zGsvIGfLgKaRBrEmbvPlk6O6E.jpg"},
            { subject: 'Mathematics', chapters: 35, questions: 5958, id: 3 ,logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNDDyAut89ZfwNp8J_txibb6kvwoER9sNLQ&s'},
          ].map((item) => (
            <Link to={'/home/exam/details2'} state={{sub:item.subject,logo:item.logo}}>
            <li key={item.id} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex items-center">
              <div className="mr-4">
                {/* Add appropriate icons for each subject here */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">{item.subject}</p>
                <p className="text-gray-500">{item.chapters} Chapters, {item.questions} Qs</p>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExamDetails;
