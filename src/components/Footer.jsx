import React from 'react';
// import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="flex justify-around p-4 bg-white dark:bg-gray-800 shadow-md">
      {/* <Link to="/" className="text-center"> */}
        <span className="block text-xl">🏠</span>
        <p className="text-sm">Home</p>
      {/* </Link> */}
      {/* <Link to="/create-test" className="text-center"> */}
        <span className="block text-xl">📝</span>
        <p className="text-sm">Create Test</p>
      {/* </Link> */}
      {/* <Link to="/notebook" className="text-center"> */}
        <span className="block text-xl">📓</span>
        <p className="text-sm">Notebook</p>
      {/* </Link> */}
      {/* <Link to="/exam-info" className="text-center"> */}
        <span className="block text-xl">📊</span>
        <p className="text-sm">Exam Info</p>
      {/* </Link> */}
      {/* <Link to="/video" className="text-center"> */}
        <span className="block text-xl">🎥</span>
        <p className="text-sm">Video</p>
      {/* </Link> */}
    </footer>
  );
};

export default Footer;
