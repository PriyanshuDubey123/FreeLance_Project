import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Step1 = ({ onNext }) => (
  <div className="text-center">
    <h2 className="text-xl font-bold">Step 1: Choose Your Exam</h2>
    <p>Select the exam for the test (you can select only one)</p>
    <div className="flex justify-center mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2">JEE Main</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2">NEET</button>
    </div>
    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg" onClick={onNext}>Next</button>
  </div>
);

const Step2 = ({ onNext, onPrevious }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 className="text-xl font-bold text-center mb-4">Generate Custom Test</h2>
      <div className="border-b border-gray-300 mb-6">
        <ul className="flex justify-center">
          <li className="mr-4 pb-2 border-b-2 border-blue-500">Step 2: Choose Your Subjects</li>
        </ul>
      </div>
      <p className="text-center text-gray-700 mb-4">Select atleast 1 subject</p>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-100">
          <span className="text-orange-500">&#x1F4D2; Physics</span>
        </button>
        <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-100">
          <span className="text-green-500">&#x1F9EA; Chemistry</span>
        </button>
        <button className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-100">
          <span className="text-blue-500">&#x1F4D1; Mathematics</span>
        </button>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={onPrevious}>Back</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={onNext}>Next</button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600">Test Preview</p>
        <p className="text-gray-500">JEE Main</p>
      </div>
    </div>
  </div>
);

const Step3 = ({onPrevious, onNext}) => {
    const [selectedQuestions, setSelectedQuestions] = useState(15);
    const [testDuration, setTestDuration] = useState(5);
  
    const handleQuestionsChange = (questions) => {
      setSelectedQuestions(questions);
    };
  
    const handleDurationChange = (delta) => {
      setTestDuration((prevDuration) => {
        const newDuration = prevDuration + delta;
        if (newDuration < 5) return 5;
        if (newDuration > 120) return 120;
        return newDuration;
      });
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <h2 className="text-xl font-bold text-center mb-4">Generate Custom Test</h2>
          <div className="border-b border-gray-300 mb-6">
            <ul className="flex justify-center">
              <li className="mr-4 pb-2 border-b-2 border-blue-500">Step 3: Questions and Time</li>
            </ul>
          </div>
          <p className="text-center text-gray-700 mb-4">Select questions per subject and duration of your test</p>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 mb-2">Questions per subject:</p>
            <div className="grid grid-cols-3 gap-4">
              {[5, 10, 15].map((questions) => (
                <button
                  key={questions}
                  className={`p-3 border rounded-lg text-center ${selectedQuestions === questions ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'}`}
                  onClick={() => handleQuestionsChange(questions)}
                >
                  <span className="text-blue-500">&#x2753; {questions} Qs</span>
                </button>
              ))}
            </div>
            <p className="mt-4 text-gray-700">Total Questions: {selectedQuestions}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-700 mb-2">Test Duration: <span className="text-sm text-gray-500">(Choose b/w 5 and 120)</span></p>
            <div className="flex items-center justify-between">
              <button
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={() => handleDurationChange(-1)}
              >
                &#x2796;
              </button>
              <span className="text-lg font-semibold text-gray-700 mx-4">{testDuration}</span>
              <button
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={() => handleDurationChange(1)}
              >
                &#x2795;
              </button>
            </div>
            <p className="mt-4 text-gray-700">Total Time in Minutes: {testDuration}</p>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={onPrevious}>Back</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={onNext}>Next</button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Test Preview</p>
            <p className="text-gray-500">JEE Main</p>
            <p className="text-gray-500">Mathematics</p>
          </div>
        </div>
      </div>
    );
  };

const Step4 = ({ onNext, onPrevious }) => {
    const [selectedChapters, setSelectedChapters] = useState(['Algebra']);
  
    const toggleChapter = (chapter) => {
      setSelectedChapters(prevState =>
        prevState.includes(chapter)
          ? prevState.filter(item => item !== chapter)
          : [...prevState, chapter]
      );
    };
  
    const chapters = [
      'Calculus',
      'Miscellaneous Mathematics',
      'Algebra',
      'Coordinate Geometry',
      'Trigonometry',
      'Vector'
    ];
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <h2 className="text-xl font-bold text-center mb-4">Generate Custom Test</h2>
          <div className="border-b border-gray-300 mb-6">
            <ul className="flex justify-center">
              <li className="mr-4 pb-2 border-b-2 border-blue-500">Step 4: Add Chapters</li>
            </ul>
          </div>
          <p className="text-center text-gray-700 mb-4">Select chapters to be added for each subject</p>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-500">Mathematics</h3>
              <button className="text-blue-500 text-sm">Hide Units &#x25B2;</button>
            </div>
            <p className="text-sm text-gray-600 mb-4">Select atleast 1 chapter</p>
            <div className="space-y-2">
              {chapters.map((chapter) => (
                <div
                  key={chapter}
                  className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => toggleChapter(chapter)}
                >
                  <input
                    type="checkbox"
                    checked={selectedChapters.includes(chapter)}
                    readOnly
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">{chapter}</span>
                  <span className="ml-auto">&#x25BC;</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={onPrevious}>Back</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={onNext}>Next</button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Test Preview</p>
            <p className="text-gray-500">JEE Main</p>
            <p className="text-gray-500">Mathematics</p>
            <p className="text-gray-500">5 Qs &#x25CF; 10 Mins</p>
          </div>
        </div>
      </div>
    );
  };

const Step5 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleGenerate = () => {
    setShowModal(true);
  };

  const handleLater = () => {
    setShowModal(false);
    // Handle the "Later" action here
  };

  const handleAttemptNow = () => {
    setShowModal(false);
    // Handle the "Attempt Now" action here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Generate Custom Test</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Step 5: Review and Generate</h3>
          <p className="text-gray-600">Review test details and generate the test</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4M4 7h16M4 7v4a1 1 0 001 1h3m10-4v4a1 1 0 01-1 1h-3m4-10H4m4 0a4 4 0 018 0z" />
            </svg>
            <span className="font-semibold">JEE Main</span>
          </div>
          <p className="text-gray-600">5 Questions • 10 Mins</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h4 className="font-medium">Mathematics</h4>
          <p className="text-gray-600">Binomial Theorem • Complex Number • Determinants • Linear Programming • Mathematical Induction • Mathematical Reasoning • Matrices • Permutation Combination • Probability • Quadratic Equation • Sequences and Series • Statistics</p>
        </div>
        <div className="text-gray-600 mb-4">
          <p>- Correct Answer: 4 Marks</p>
          <p>- Incorrect Answer: -1 Marks</p>
          <p>- Question Unattempted: 0 Marks</p>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Back</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={handleGenerate}>Generate</button>
        </div>
      </div>
      {showModal && <ConfirmationModal onLater={handleLater} onAttemptNow={handleAttemptNow} />}
    </div>
  );
};


const ConfirmationModal = ({ onLater, onAttemptNow }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">Do you want to start the test?</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-md mb-4 flex justify-center items-center">
          <svg className="w-6 h-6 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4M4 7h16M4 7v4a1 1 0 001 1h3m10-4v4a1 1 0 01-1 1h-3m4-10H4m4 0a4 4 0 018 0z" />
          </svg>
          <span className="font-semibold">JEE Main</span>
          <span className="ml-2">• 5 Qs • 10 Mins</span>
        </div>
        <p className="text-gray-600 text-center mb-4">
          You can also attempt this test later from your Subject Tests section.
        </p>
        <div className="flex justify-between">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            onClick={onLater}
          >
            Later
          </button>
          <Link to={"questions"}>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={onAttemptNow}
            >
            Attempt now
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};


const questions = [
  {
    question: "If (27)<sup>999</sup> is divided by 7, then the remainder is",
    options: ["1", "2", "3", "6"],
    correctAnswer: "1",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: "Jupiter",
  },
  // Add more questions as needed
];

export const QuestionComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes timer
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          navigate('/home/result', { state: { selectedAnswers, questions } });
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate, selectedAnswers]);

  const handleOptionClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/result', { state: { selectedAnswers, questions } });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} min ${secs < 10 ? '0' : ''}${secs} s`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 w-[100vw]">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-500 font-semibold">{formatTime(timeRemaining)}</span>
          <div className="flex space-x-2">
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 7h16M4 7v4a1 1 0 001 1h3m10-4v4a1 1 0 01-1 1h-3m4-10H4m4 0a4 4 0 018 0z" />
              </svg>
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium">Q{currentQuestionIndex + 1} (Single Correct)</span>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="review" className="form-checkbox h-5 w-5" />
            <label htmlFor="review" className="text-gray-700">Review</label>
          </div>
        </div>
        <p className="text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`border rounded-lg p-2 flex items-center cursor-pointer ${
                selectedAnswers[currentQuestionIndex] === option ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${
                  selectedAnswers[currentQuestionIndex] === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-800">{option}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          >
            Prev
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const CreateTest = () => {
  const [showMultiStepForm, setShowMultiStepForm] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);
  const startMultiStepForm = () => setShowMultiStepForm(true);

  if (showMultiStepForm) {
    return (
      <div className="min-h-screen bg-blue-100 p-4 w-[100vw]">
        <header className="text-center mb-6">
          <Link to="/home" className="text-black text-lg">←</Link>
          <h1 className="text-2xl font-bold">Custom Tests</h1>
          <p className="text-gray-500">Create your own personalized test in just few steps and practice!</p>
        </header>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          {step === 1 && <Step1 onNext={nextStep} />}
          {step === 2 && <Step2 onNext={nextStep} onPrevious={previousStep} />}
          {step === 3 && <Step3 onNext={nextStep} onPrevious={previousStep} />}
          {step === 4 && <Step4 onNext={nextStep} onPrevious={previousStep} />}
          {step === 5 && <Step5 onPrevious={previousStep} />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100 p-4 w-[100vw]">
      <header className="text-center mb-6">
        <Link to="/home" className="text-black text-lg">←</Link>
        <h1 className="text-2xl font-bold">Custom Tests</h1>
        <p className="text-gray-500">Create your own personalized test in just few steps and practice!</p>
      </header>
      <div className="text-center mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={startMultiStepForm}>
          Create Test
        </button>
      </div>
      <section className="mb-4">
        <h2 className="text-lg font-bold">🔥 Your custom tests</h2>
        <div className="mt-2">
          <div className="bg-white p-4 rounded-lg shadow-md mb-2">
            <h3 className="font-bold">Chapter Tests</h3>
            <p>No tests generated</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-2">
            <h3 className="font-bold">Subject Tests</h3>
            <p>1 test generated</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-2">
            <h3 className="font-bold">Part Tests</h3>
            <p>No tests generated</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateTest;
