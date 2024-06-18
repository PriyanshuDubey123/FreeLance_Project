import React, { useState } from 'react';

const ExamInformation = () => {
  const [trackedExam, setTrackedExam] = useState(null);
  const [trackedExams, setTrackedExams] = useState({});

  const handleTrackExam = (exam) => {
    const randomDaysLeft = Math.floor(Math.random() * 10) + 1; // Generate random days left
    setTrackedExam({ ...exam, daysLeft: randomDaysLeft });
    setTrackedExams({
      ...trackedExams,
      [exam.id]: { ...exam, daysLeft: randomDaysLeft, tracked: true }
    });
  };

  const handleUpdateExam = (exam) => {
   setTrackedExam(null);
   setTrackedExams({
    ...trackedExams,
    [exam.id]: {}
  });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center w-[100vw]">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <button className="text-blue-500 text-sm mb-4 bg-blue-100">How to Add Widget?</button>
        <h1 className="text-2xl font-bold mb-4 text-black">📋 Exam Information</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-black">Exams You’re Preparing For</h2>
          {trackedExam ? (
            <div className="flex items-center justify-center bg-orange-100 rounded-lg p-4 mb-4">
              <div className="text-center text-gray-800">
                <p className="text-4xl font-bold">{trackedExam.daysLeft}</p>
                <p className="text-sm">Days Left</p>
                <p className="text-xl font-semibold mt-2">{trackedExam.name}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
              <div className="text-center text-gray-500">
                <img width={20} height={20} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuEq7uVyLIyTz_WhATaLTRnTvuHszskM6RA&s" alt="Empty" className="mx-auto mb-2" />
                <p>It’s quite empty here. Please track one or more exams from All Exams section for the date widget.</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2 text-black">All Exams</h2>
          <ul>
            {[
              { name: 'SRMJEE 2024', date: '21 Jun - 23 Jun', id: 1 },
              { name: 'NDA 2024', date: '1 Sep', id: 2 },
              { name: 'BITSAT 2024', date: '22 Jun - 28 Jun', id: 3 },
              { name: 'JEE Main 2024', date: '', id: 4 },
            ].map((exam) => (
              <li key={exam.id} className="mb-4 flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                <div>
                  <p className="font-semibold text-gray-800">{exam.name}</p>
                  <p className="text-gray-500">{exam.date}</p>
                  <button className="text-blue-500 text-sm mt-1 bg-blue-100">View Details</button>
                </div>
                {trackedExams[exam.id] && trackedExams[exam.id].tracked ? (
                  <button
                    onClick={() => handleUpdateExam(exam)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => handleTrackExam(exam)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Track
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExamInformation;
