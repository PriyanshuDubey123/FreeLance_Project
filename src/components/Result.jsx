import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedAnswers, questions } = location.state || { selectedAnswers: {}, questions: [] };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 w-[100vw]">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Result</h2>
        <p className="text-lg mb-4">Your Score: {score} / {questions.length}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={() => navigate('/home')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ResultComponent;
