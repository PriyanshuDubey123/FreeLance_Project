import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';


const Status = () => {


    const location = useLocation();

    const {topic} = location.state;
    
    const slides = [
      {
        title: topic,
        subtitle: 'Open Chain and closed chain',
        content: (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Organic Compounds</h2>
              <p>
                Chemical compounds in which two or more C atoms are covalently bound to other atoms, commonly H, O, and N.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Classes based on Nature of C skeleton</h3>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-md font-semibold">Acyclic</h4>
                  <p>Open chain</p>
                </div>
                <div>
                  <h4 className="text-md font-semibold">Cyclic</h4>
                  <p>Closed chain</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-md font-semibold">Open Chain</h4>
              <p>
                Has open chain of C atoms, branched and unbranched also called as acyclic or aliphatic.
              </p>
              <p>Eg. Butane: CH₃-CH₂-CH₂-CH₃</p>
            </div>
            <div>
              <h4 className="text-md font-semibold">Closed Chain</h4>
              <p>
                Has closed chain of C and other atom called cyclic or ring compounds.
              </p>
              <p>
                Class based on constitution of the ring:
                <br />
                - Homocyclic compounds
                <br />
                - Heterocyclic compounds
              </p>
            </div>
          </>
        ),
      },
      {
        title: topic,
        subtitle: 'More Formulas',
        content: <>
         <div className="mb-4">
            <h2 className="text-xl font-bold">Formulas</h2>
            <p>
              Chemical compounds in which two or more C atoms are covalently bound to other atoms, commonly H, O, and N.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Important for Exam point of view</h3>
            <div className="mb-4">
              <h4 className="text-md font-semibold">Open Chain</h4>
              <p>
                Has open chain of C atoms, branched and unbranched also called as acyclic or aliphatic.
              </p>
              <p>Eg. Butane: CH₃-CH₂-CH₂-CH₃</p>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold">Detailed Information</h4>
            <p>
                Class based on constitution of the ring:
                <br />
                - Homocyclic compounds
                <br />
                - Heterocyclic compounds
              </p>
          </div></>,
      },
    ];
    


  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-[100vw]">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevSlide} className="text-2xl bg-gray-100 text-black">
            <AiOutlineArrowLeft />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-black">{slides[currentSlide].title}</h1>
            <h2 className="text-lg font-semibold text-gray-600">{slides[currentSlide].subtitle}</h2>
          </div>
          <button onClick={nextSlide} className="text-2xl bg-gray-100 text-black">
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="text-gray-800">{slides[currentSlide].content}</div>
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Status;
