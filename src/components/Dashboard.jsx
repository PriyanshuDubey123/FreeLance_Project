import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { ArrowBack } from '@mui/icons-material';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Modal from 'react-modal';


const daysData = [
  { day: 'Mon', percentage: '0%', isActive: true },
  { day: 'Tue', percentage: '0%', isActive: true },
  { day: 'Wed', percentage: 'NA', isActive: false },
  { day: 'Thu', percentage: 'NA', isActive: false },
  { day: 'Fri', percentage: 'NA', isActive: false },
  { day: 'Sat', percentage: 'NA', isActive: false },
];


const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  content: {
    position: 'relative',
    background: 'white',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    zIndex: 1001,
  },
};

const DashBoard = () => {


  const [selectedSubject, setSelectedSubject] = useState('Physics');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subjects = [
    { name: 'Physics', emoji: '🧬' },
    { name: 'Chemistry', emoji: '🧪' },
    { name: 'Mathematics', emoji: '🔢' },
  ];

  const chapters = {
    Physics: [
      { name: 'Current Electricity', emoji: '⚡', count: 39 ,color:'#3B82F6'},
      { name: 'Semiconductors', emoji: '📱', count: 51 ,color:'#ff8c1a'},
      { name: 'Alternating Current', emoji: '🔄', count: 27 ,color:' #00cc44'},
    ],
    Chemistry: [
      { name: 'Organic Chemistry', emoji: '🧫', count: 42 ,color:'#3B82F6'},
      { name: 'Inorganic Chemistry', emoji: '⚗️', count: 36 ,color:'#ff8c1a'},
      { name: 'Physical Chemistry', emoji: '🧬', count: 30 ,color:' #00cc44'},
    ],
    Mathematics: [
      { name: 'Calculus', emoji: '📐', count: 44 ,color:'#3B82F6'},
      { name: 'Algebra', emoji: '🔢', count: 33 ,color:'#ff8c1a'},
      { name: 'Geometry', emoji: '📏', count: 29 ,color:' #00cc44'},
    ],
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleViewAllClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [selectedSubject1, setSelectedSubject1] = useState(null);

  const subjects1 = [
    { name: 'Physics', color: '#FFEDD5', emoji: '🧬' },
    { name: 'Chemistry', color: '#D1FAE5', emoji: '🧪' },
    { name: 'Mathematics', color: '#DBEAFE', emoji: '🔢' },
  ];

  const handleSubjectClick1 = (subject) => {
    setSelectedSubject1(subject);
  };

  return (
    <div className="min-h-screen w-[100vw]  bg-gray-100 text-gray-900">
      <Header  />
      <main className="p-4 md:px-8 lg:px-16 w-full font-semibold">
        <section className="mb-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Your daily goal (0/10 Qs)</h2>
          <p className="text-xs  md:text-md  md:text-base lg:text-lg text-gray-500 ">Start solving those questions <span className="text-yellow-500">💪</span></p>
        </section>

        <section className="mb-4">
          <p className="text-xs  md:text-md  md:text-base lg:text-lg text-gray-500 ">Solve questions daily to maintain streak</p>
          <div className="flex justify-between items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="w-1/5 h-1 bg-gray-300  rounded-full p-1">{idx + 1}</div>
            ))}
          </div>
        </section>


<DaysCarousel/>


      <section className="mb-4">
  <div className="flex justify-between items-center">
    <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Study Resources</h2>
    <Link to="/resources" className="text-blue-500 text-xs  md:text-md lg:text-lg md:text-base lg:text-lg">View all</Link>
  </div>
  <div className="flex space-x-4 mt-2 pb-4 overflow-x-auto ">
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
      <Link to="https://book.mathongo.com/book/637e6197bee57281bd56ba42?disableHeader=true" target="_blank" className="block w-full">
        <div className="flex flex-col text-center justify-center items-center bg-blue-200 text-blue-700 p-4 rounded-lg h-full">
          <img width={80} height={80} src="https://media.umangapp.in/app/ico/service/ugcnta.png" alt="" />
          <p className="mt-2">Printed PYQ Book JEE Main Math</p>
        </div>
      </Link>
    </div>
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
      <Link to="/home/formula" className="block w-full">
        <div className="flex flex-col text-center justify-center items-center bg-red-200 text-red-700 p-4 rounded-lg h-full">
          <img width={80} height={80} src="https://media.umangapp.in/app/ico/service/ugcnta.png" alt="" />
          <p className="mt-2">JEE Main Formula Sheets</p>
        </div>
      </Link>
    </div>
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
      <Link to="/home/notes" className="block w-full">
        <div className="flex flex-col text-center justify-center items-center bg-purple-200 text-purple-700 p-4 rounded-lg h-full">
          <img width={80} height={80} src="https://media.umangapp.in/app/ico/service/ugcnta.png" alt="" />
          <p className="mt-2">JEE Main Revision</p>
        </div>
      </Link>
    </div>
  </div>
</section>



        <section className="mb-4 bg-yellow-200  rounded-lg text-yellow-700 border-2 border-yellow-400">
          <div className="w-full flex justify-center items-center bg-yellow-100 p-2 text-center">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Topic Wise PYQs + Video Solutions</h2>
          </div>
          <div className="bg-orange-400 text-white flex flex-col items-center text-center justify-center p-4">
            <p className="font-bold text-lg md:text-base lg:text-2xl">Unlock with Marks Premium</p>
            <p className="text-xs  md:text-md lg:text-lg md:text-base lg:text-lg">50% off for first 100 students of the day.</p>
            <p className="text-xs  md:text-md lg:text-lg md:text-base lg:text-lg mt-2 bg-yellow-200 w-fit text-black p-2 rounded-md border-2 border-yellow-300">₹990 <span className="line-through">₹2000</span></p>
          </div>
        </section>

        <section className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Chapter-wise Previous Year Questions</h2>
            <Link to="/chapter-wise-questions" className="text-blue-500 text-xs  md:text-md lg:text-lg md:text-base lg:text-lg">View all</Link>
          </div>
        </section>

        <section className="mb-10  ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { title: "Updated Syllabus", bg: "bg-red-500", text: "text-white", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpN1ImdGgH8O2sbZYLUtEYngWlC3p6F3wzw&s" },
              { title: "JEE Advanced", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSt2u8gJun_8xR6X2_oPgJWVcXvvAzlKRaug&s" },
              { title: "WBJEE", bg: "border", text: "text-gray-900 ", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtAG59_1wXSFGPRws_Ve1-9_1FftW1XQx9w&s"},
              { title: "KVPY", bg: "border", text: "text-gray-900 ", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3q3w80PZn0LA4IJlZyFDRp9Bu23orycoTw&s" },
              { title: "NDA", bg: "border", text: "text-gray-900 ", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxitV848WSRWoWaXDx530xxWo5J7yTfcDqng&s" },
              { title: "BITSAT", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhHxC4rYnGYasFQEXSCDDEUUEQFUuNN2_JA&s" },
              { title: "VITEEE", bg: "border", text: "text-gray-900 ", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rP75x2yM5VFpH8cD3C_PX6DOdwmrmp1yrA&s"},
              { title: "MHT CET", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxf6LuToAy_SL0LRod4m9uU0frNp3mPw7zw&s" },
              { title: "COMEDK", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMeJ18-ohELYN98PkXBqIoCrEYmVnmW6cIA&s" },
              { title: "AP EAMCET", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYMFFHaPK-h-yFThHB83NHmEWgHtmTvb89IYAYDOzCc9h-ouGG-WN2gCsMj1G46RksRo&usqp=CAU" },
              { title: "TS EAMCET", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCwIv0dVxmft9ooFXGg8Hyk6MAkTXEzRCKg&s" },
              { title: "NEET", bg: "border", text: "text-gray-900" }
            ].map((item, idx) => (
              <Link to={'/home/exam/details'} state={{name:item.title, logo:item.source}}>
              <div key={idx} className="text-center ">
                <div className={`${item.bg} ${item.text} rounded-t-lg p-2`}>{item.title}</div>
                <div className="border p-4 rounded-b-lg">
                  <img width={120} height={140} src={item.source||"https://bsmedia.business-standard.com/_media/bs/img/about-page/1562840189.jpg"} alt={item.title} className="mx-auto"/>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </section>




        
        <div className=" bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-xl font-semibold mb-4 text-center">NTA Abhyas Questions for JEE Main</h1>
        <div className="flex justify-start md:justify-center lg:justify-center mb-6 overflow-x-auto space-x-4 w-full">
          {subjects1.map((subject) => (
            <Link to="/home/exam/details2" state={{ sub: subject.name }} key={subject.name}>
              <div
                className={`text-black text-center cursor-pointer border ${
                  selectedSubject1 === subject.name ? 'border-blue-500' : 'border-transparent'
                } rounded-lg p-3 w-32 flex-shrink-0`}
                style={{ backgroundColor: subject.color }}
                onClick={() => handleSubjectClick1(subject.name)}
              >
                <div className="p-3 rounded-full">
                  <span role="img" aria-label={subject.name} className="text-3xl">
                    {subject.emoji}
                  </span>
                </div>
                <p className="mt-2">{subject.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <a className="text-blue-500 text-sm md:text-md lg:text-lg underline text-center block mb-6" href="#">
          View NTA Abhyas for NEET
        </a>
        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 text-center">NCERT Toolbox</h2>
          <p className="text-md font-semibold mb-6 text-center">For future Doctors & Engineers</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="text-inherit" to="/home/exam/details" state={{ name: 'Diagram Based Questions', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/1200px-Diagrams.net_Logo.svg.png' }}>
              <div className="bg-pink-100 p-4 rounded-lg text-center">
                <span role="img" aria-label="Diagram Based Questions" className="text-3xl">
                  🖼️
                </span>
                <p className="mt-2">Diagram Based Questions</p>
              </div>
            </Link>
            <Link className="text-inherit" to="/home/exam/details" state={{ name: 'NCERT Back Problems', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEj_9N1LdfOSjxBrSIAwPLZzG7_G1LosfXQ&s' }}>
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <span role="img" aria-label="NCERT Back Problems" className="text-3xl">
                  📘
                </span>
                <p className="mt-2">NCERT Back Problems</p>
              </div>
            </Link>
            <Link className="text-inherit" to="/home/exam/details" state={{ name: 'NCERT Line by Line Questions', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEj_9N1LdfOSjxBrSIAwPLZzG7_G1LosfXQ&s' }}>
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <span role="img" aria-label="NCERT Line by Line Questions" className="text-3xl">
                  📄
                </span>
                <p className="mt-2">NCERT Line by Line Questions</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
      



    <div className="min-h-screen bg-gray-100 flex flex-col items-center mt-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Formula Card</h1>
          <button className="bg-white text-blue-500" onClick={handleViewAllClick}>
            View All
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-4 mb-6 ">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className={`text-center cursor-pointer p-3 rounded-lg border ${
                selectedSubject === subject.name ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => handleSubjectClick(subject.name)}
            >
              <div className="bg-gray-100 p-3 rounded-full">
                <span role="img" aria-label={subject.name} className="text-2xl">
                  {subject.emoji}
                </span>
              </div>
              <p className="mt-2">{subject.name}</p>
            </div>
          ))}
        </div>
        {selectedSubject && (
          <>
            <h2 className="text-xl font-bold mb-4">{selectedSubject} Chapters</h2>
            <div className="flex overflow-x-auto space-x-4">
              {chapters[selectedSubject].slice(0, 3).map((chapter, index) => (
                <Link
                  key={index}
                  to={'/home/formula/card'}
                  state={{ sub: selectedSubject, chapterData: chapter.name }}
                  className="bg-white rounded-lg p-4 flex flex-col justify-between shadow-md w-40 flex-shrink-0"
                  style={{ backgroundColor: chapter.color, color: 'white' }}
                >
                  <div>
                    <p>{chapter.name}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="bg-red-500 rounded-full p-2">{chapter.count}</span>
                      <span role="img" aria-label={chapter.name} className="text-2xl">
                        {chapter.emoji}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="bg-pink-100 rounded-lg shadow-lg p-6 w-11/12 max-w-4xl mt-5">
        <h2 className="text-xl font-bold">Preparation Tracker</h2>
        <p className="text-md mt-2">Track your progress for upcoming exams</p>
        <div className="flex justify-end mt-4">
          <Link
            to={'/home/preparation/tracker'}
            className="bg-orange-500 text-white rounded-full p-3 flex items-center justify-center"
          >
            <AiOutlineArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
      <Modal className=' m-auto'
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="View All Chapters"
        style={modalStyles}
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-black text-2xl font-bold mb-4">{selectedSubject} Chapters</h2>
          <button className="bg-white text-blue-500 mb-4" onClick={closeModal}>
            Close
          </button>
          <div className="grid grid-cols-1 gap-4">
            {selectedSubject &&
              chapters[selectedSubject].map((chapter, index) => (
                <div
                  key={index}
                  className="font-bold bg-white rounded-lg p-4 text-center"
                  style={{ backgroundColor: chapter.color, color: 'black' }}
                >
                  <p>{chapter.name}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="bg-red-500 p-2 rounded-full text-white">{chapter.count}</span>
                    <span role="img" aria-label={chapter.name} className="text-2xl">
                      {chapter.emoji}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </div>


    <div className=" bg-gray-100 flex flex-col items-center  md:mt-5 lg:mt-5">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white rounded-full p-2">
              <span role="img" aria-label="Logo" className="text-2xl">📘</span>
            </div>
            <h1 className="text-2xl font-bold ml-2">MARKS Selected</h1>
          </div>
          <div className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-center text-xs  md:text-md lg:text-lg flex items-center justify-center">Revision Special</div>
        </div>
        <p className="text-gray-600 mb-6">Revision special modules</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Link className=' text-inherit ' to={'/home/exam/details'} state={{name:'Must Do Questions of JEE Main 2024 (Jan)',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/1200px-Diagrams.net_Logo.svg.png'}}>
          <div className="bg-white border rounded-lg p-4 text-center">
            <div className="bg-orange-100 text-orange-500 rounded-full p-1 w-6 h-6 inline-flex items-center justify-center mb-2">📙</div>
            <p>Must Do Questions of JEE Main 2024 (Jan)</p>
          </div>
          </Link>
        <Link className=' text-inherit ' to={'/home/exam/details'} state={{name:'Top 100 PYQs of JEE Main 2023',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/1200px-Diagrams.net_Logo.svg.png'}}>

          <div className="bg-white border rounded-lg p-4 text-center">
            <div className="bg-red-100 text-red-500 rounded-full p-1 w-6 h-6 inline-flex items-center justify-center mb-2">📕</div>
            <p>Top 100 PYQs of JEE Main 2023</p>
          </div>
          </Link>
          <Link className=' text-inherit ' to={'/home/exam/details'} state={{name:'Top 100 Numericals of JEE Main 2020 - 2022',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/1200px-Diagrams.net_Logo.svg.png'}}>

          <div className="bg-white border rounded-lg p-4 text-center">
            <div className="bg-yellow-100 text-yellow-500 rounded-full p-1 w-6 h-6 inline-flex items-center justify-center mb-2">📒</div>
            <p>Top 100 Numericals of JEE Main 2020 - 2022</p>
          </div>
          </Link>
          <Link className=' text-inherit ' to={'/home/exam/details'} state={{name:'Top 150 MCQs of JEE Main 2020 - 2022',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/1200px-Diagrams.net_Logo.svg.png'}}>
          <div className="bg-white border rounded-lg p-4 text-center">
            <div className="bg-purple-100 text-purple-500 rounded-full p-1 w-6 h-6 inline-flex items-center justify-center mb-2">📘</div>
            <p>Top 150 MCQs of JEE Main 2020 - 2022</p>
          </div>
          </Link>
        </div>
      </div>
      <div className="bg-blue-100 rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-lg lg:text-2xl font-bold text-blue-700">Create custom tests</h2>
        <p className="mt-2 text-blue-700 text-xs  md:text-md lg:text-lg">Create your own personalized test in just few steps and practice!</p>

        <div className="mt-4 flex justify-center">
          <Link to={'/home/test'}>
          <button className="bg-blue-500 text-white rounded-full px-4 py-2">Create Custom Test</button>
          </Link>
        </div>
        <div className="mt-4 text-center text-blue-700">
          <span role="img" aria-label="Fire">🔥</span> 533 students took a test in last 1 hour!
        </div>
      </div>
    </div>

<div className=" bg-white flex flex-col items-center py-6 mx-4 rounded-md mt-10">
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Shortcuts</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <span role="img" aria-label="switch to medical" className="text-2xl">🩺</span>
            </div>
            <span>Switch to Medical</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <span role="img" aria-label="requests" className="text-2xl">🖐️</span>
            </div>
            <span>Requests</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg border-2 border-gray-200">
        <h3 className="text-lg font-bold">Requests</h3>
        <p className=' text-xs  md:text-md lg:text-lg'>Looking for specific exam's question bank or a new learning feature? Raise a request.</p>
        <Link to={'/home/requests'}>
          <span role="img" aria-label="request now" className="text-xl">🖐️</span>
          <span className="ml-2">Request Now</span>
        </Link>
      </div>
    </div>
    </div>

    <div className="p-4 space-y-6 mt-5">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">🥰 Share karo apne doston ke sath!</h2>
        <p className=' text-xs  md:text-md lg:text-lg'>MARKS is a free app without any disturbing ads. We would love to keep it free. But for this we need your love & support. Share the app among your friends and ask them to download the app.</p>
        <div className="flex items-center mt-4 space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Invite Friends</button>
          <div className="flex items-center bg-gray-200 p-2 rounded-lg">
            <span>C2EPN</span>
            <button className="ml-2 text-gray-500 bg-white">📋</button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">😍 Enjoying MARKS?</h2>
        <p className=' text-xs  md:text-md lg:text-lg'>Please provide 5 star rating and your review. It will help us bring you new features quickly</p>
        <div className="flex items-center mt-4">
          <div className="flex space-x-1 text-yellow-500">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <button className="ml-auto bg-blue-500 text-white py-2 px-4 rounded-lg">Rate us on Play store</button>
        </div>
        <p className="mt-2 text-center text-gray-500 ">Already Rated</p>
      </div>
    </div>




    <div className="p-4 mb-20">
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold mb-2">We’re on Social Media</h2>
        <p className="mb-4 text-xs  md:text-md lg:text-lg">Follow us & share with your friends. It motivates us to keep working hard for you to bring new features & keep the app FREE.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-red-400 p-4 rounded-lg">
              <img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="YouTube" className="w-8 h-8"/>
            </div>
            <span className="mt-2">YouTube</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-400 p-4 rounded-lg">
              <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-8 h-8"/>
            </div>
            <span className="mt-2">Instagram</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 p-4 rounded-lg">
              <img src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png" alt="Telegram" className="w-8 h-8"/>
            </div>
            <span className="mt-2">Telegram</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-lg">
              <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" className="w-8 h-8"/>
            </div>
            <span className="mt-2">Twitter</span>
          </div>
        </div>
      </div>
    </div>




    </main>



    <footer className=" fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around p-2">
        <button className="text-center bg-white">
          <span className="block text-xl">🏠</span>
          <p className="text-xs  md:text-md lg:text-lg">Home</p>
        </button>
        <Link to={'/home/test'}>
          <button className="text-center bg-white">
            <span className="block text-xl">📝</span>
            <p className="text-xs  md:text-md lg:text-lg">Create Test</p>
          </button>
        </Link>
        <Link to={'/home/book'}>
          <button className="text-center bg-white">
            <span className="block text-xl">📓</span>
            <p className="text-xs  md:text-md lg:text-lg">Notebook</p>
          </button>
        </Link>
        <Link to={'/home/exam/information'}>
        <button className="text-center bg-white">
          <span className="block text-xl">📊</span>
          <p className="text-xs  md:text-md lg:text-lg">Exam Info</p>
        </button>
        </Link>
        <Link to={'/home/videos'}>
        <button className="text-center bg-white">
          <span className="block text-xl">🎥</span>
          <p className="text-xs  md:text-md lg:text-lg">Video</p>
        </button>
        </Link>
      </footer>

    </div>
  );
};

export default DashBoard;




const DaysCarousel = () => {
  const [selectedDay, setSelectedDay] = useState(daysData[0].day);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDay = () => {
    if (currentIndex < daysData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedDay(daysData[currentIndex + 1].day);
    }
  };

  const prevDay = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedDay(daysData[currentIndex - 1].day);
    }
  };

  const selectDay = (day, index) => {
    setSelectedDay(day);
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center space-x-2 p-4">
      <button
        className={`p-2 bg-white text-gray-400 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={prevDay}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <div className="flex space-x-2 overflow-x-auto">
        {daysData.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-2 rounded-lg border 
              ${selectedDay === day.day ? 'border-orange-500 bg-orange-100' : 'border-gray-300 bg-gray-100'} 
              cursor-pointer`}
            onClick={() => selectDay(day.day, index)}
          >
            <span className={`font-bold ${selectedDay === day.day ? 'text-orange-500' : 'text-gray-500'}`}>{day.day}</span>
            <span className={`${selectedDay === day.day ? 'text-orange-500' : 'text-gray-500'}`}>{day.percentage}</span>
          </div>
        ))}
      </div>
      <button
        className={`p-2 bg-white text-gray-400 ${currentIndex === daysData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={nextDay}
        disabled={currentIndex === daysData.length - 1}
      >
        &gt;
      </button>
    </div>
  );
};
