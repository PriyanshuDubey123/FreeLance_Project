import React from 'react';
import { useLocation } from 'react-router-dom';

const Question = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const handleEvaluation = () => {
    // Implement your evaluation logic here
    console.log('Evaluating results...');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-center mb-4">Test Questions</h2>
        <div className="mb-6">
          {/* Render the questions based on formData */}
          <p className="text-lg">Exam: {formData?.exam}</p>
          <p className="text-lg">Subjects: {formData?.subjects.join(', ')}</p>
          <p className="text-lg">Questions per Subject: {formData?.questions}</p>
          <p className="text-lg">Duration: {formData?.duration} minutes</p>
          <p className="text-lg">Chapters: {formData?.chapters.join(', ')}</p>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={handleEvaluation}
        >
          Evaluate
        </button>
      </div>
    </div>
  );
};

export default Question;
