import React, { useState } from 'react';

const UserProfileComponent = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(10);
  const [currentGoal, setCurrentGoal] = useState(0);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleGoalChange = (e) => {
    setCurrentGoal(e.target.value);
  };

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    if(currentGoal>=0 && currentGoal<=10)
    setDailyGoal(currentGoal);
    setCurrentGoal(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 w-[100vw]">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&s" // replace with actual image URL
            alt="User"
            className="w-16 h-16 rounded-full object-cover border-2"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Hello User</h2>
            <p className="text-gray-600">Class 12, Engineering Student</p>
            <p className="text-gray-600">Target Year: 2025</p>
            <p className="text-gray-600">user@gmail.com</p>
          </div>
        </div>
        <div className="mb-6">
          <button
            className="w-full flex items-center justify-between p-4 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200"
            onClick={toggleDropdown}
          >
            <span>View My Purchases</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4">
              <ul className="space-y-2">
                <li className="p-2 bg-gray-100 text-gray-700 rounded-lg">Purchase 1: JEE Main Math Book</li>
                <li className="p-2 bg-gray-100 text-gray-700 rounded-lg">Purchase 2: Physics Formula Sheet</li>
                <li className="p-2 bg-gray-100 text-gray-700 rounded-lg">Purchase 3: Chemistry Revision Notes</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">My Learning Activity</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800">My Daily Goal</h4>
              <button className=" bg-white text-blue-500 hover:underline" onClick={() => setDailyGoal(0)}>Edit</button>
            </div>
            <p className="text-gray-700 mb-2">Let's start with the first question for the day!</p>
            <div className="h-2 bg-gray-300 rounded-full mb-2">
              <div className="w-0 bg-blue-500 h-full rounded-full" style={{ width: `${(dailyGoal / 10) * 100}%` }}></div>
            </div>
            <p className="text-gray-700">{dailyGoal}/10 Qs</p>
            {dailyGoal === 0 && (
              <form onSubmit={handleGoalSubmit} className="flex space-x-2 mt-4">
                <input
                  type="number"
                  value={currentGoal}
                  onChange={handleGoalChange}
                  className="w-1/2 p-2 border rounded-lg text-black"
                  placeholder="Set your goal"
                />
                <button type="submit" className="w-1/2 p-2 bg-blue-500 text-white rounded-lg">Set Goal</button>
              </form>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">My Weekly Activity</h3>
            <p className="text-gray-500 mb-4">Showing for 27 May - 02 Jun</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-blue-800 mb-2">0</h4>
                <p className="text-gray-600">Question Solved</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-green-800 mb-2">0</h4>
                <p className="text-gray-600">Correct Questions</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-yellow-800 mb-2">N/A</h4>
                <p className="text-gray-600">Accuracy</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-red-800 mb-2">0</h4>
                <p className="text-gray-600">Challenges Taken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;
