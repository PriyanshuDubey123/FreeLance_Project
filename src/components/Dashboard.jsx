import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const DashBoard = () => {


  return (
    <div className="min-h-screen w-[100vw]  bg-gray-100 text-gray-900">
      <Header  />
      <main className="p-4 md:px-8 lg:px-16 w-full font-semibold">
        <section className="mb-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Your daily goal (0/10 Qs)</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 ">Start solving those questions <span className="text-yellow-500">💪</span></p>
        </section>

        <section className="mb-4">
          <p className="text-sm md:text-base lg:text-lg text-gray-500 ">Solve questions daily to maintain streak</p>
          <div className="flex justify-between items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="w-1/5 h-1 bg-gray-300  rounded-full p-1">{idx + 1}</div>
            ))}
          </div>
        </section>


      <section className="mb-4">
  <div className="flex justify-between items-center">
    <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Study Resources</h2>
    <Link to="/resources" className="text-blue-500 text-sm md:text-base lg:text-lg">View all</Link>
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
            <p className="text-sm md:text-base lg:text-lg">50% off for first 100 students of the day.</p>
            <p className="text-sm md:text-base lg:text-lg mt-2 bg-yellow-200 w-fit text-black p-2 rounded-md border-2 border-yellow-300">₹990 <span className="line-through">₹2000</span></p>
          </div>
        </section>

        <section className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Chapter-wise Previous Year Questions</h2>
            <Link to="/chapter-wise-questions" className="text-blue-500 text-sm md:text-base lg:text-lg">View all</Link>
          </div>
        </section>

        <section className="mb-20 ">
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
              { title: "KCET", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4O_lC9dxCrZpRgfkzGj9m1eEbrQU7kIP-MQ&s" },
              { title: "AP EAMCET", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYMFFHaPK-h-yFThHB83NHmEWgHtmTvb89IYAYDOzCc9h-ouGG-WN2gCsMj1G46RksRo&usqp=CAU" },
              { title: "TS EAMCET", bg: "border", text: "text-gray-900", source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCwIv0dVxmft9ooFXGg8Hyk6MAkTXEzRCKg&s" },
              { title: "NEET", bg: "border", text: "text-gray-900" }
            ].map((item, idx) => (
              <div key={idx} className="text-center ">
                <div className={`${item.bg} ${item.text} rounded-t-lg p-2`}>{item.title}</div>
                <div className="border p-4 rounded-b-lg">
                  <img width={200} height={120} src={item.source||"https://bsmedia.business-standard.com/_media/bs/img/about-page/1562840189.jpg"} alt={item.title} className="mx-auto"/>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className=" fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around p-2">
        <button className="text-center bg-white">
          <span className="block text-xl">🏠</span>
          <p className="text-sm">Home</p>
        </button>
        <Link to={'/home/test'}>
          <button className="text-center bg-white">
            <span className="block text-xl">📝</span>
            <p className="text-sm">Create Test</p>
          </button>
        </Link>
        <Link to={'/home/book'}>
          <button className="text-center bg-white">
            <span className="block text-xl">📓</span>
            <p className="text-sm">Notebook</p>
          </button>
        </Link>
        <button className="text-center bg-white">
          <span className="block text-xl">📊</span>
          <p className="text-sm">Exam Info</p>
        </button>
        <button className="text-center bg-white">
          <span className="block text-xl">🎥</span>
          <p className="text-sm">Video</p>
        </button>
      </footer>
    </div>
  );
};

export default DashBoard;
