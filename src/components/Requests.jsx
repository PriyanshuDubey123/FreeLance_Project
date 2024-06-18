import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaAngleRight, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Requests = () => {
  const [activeTab, setActiveTab] = useState('Ongoing');
  const [showModal, setShowModal] = useState(false);
  const [newRequest, setNewRequest] = useState({ category: '', description: '' });
  const [ongoingRequests, setOngoingRequests] = useState([
    { id: 1, name: 'Request 1', description: 'This is an ongoing request.' },
    { id: 2, name: 'Request 2', description: 'This is another ongoing request.' },
  ]);

  const completedRequests = [
    { id: 1, name: 'Request 3', description: 'This request has been completed.' },
    { id: 2, name: 'Request 4', description: 'This is another completed request.' },
  ];

  const handleAddRequest = () => {
    setShowModal(true);
  };

  const handleSubmitRequest = () => {
    setOngoingRequests([...ongoingRequests, { id: Date.now(), ...newRequest }]);
    setShowModal(false);
    setNewRequest({ category: '', description: '' });
  };

  const handleDeleteRequest = (id) => {
    setOngoingRequests(ongoingRequests.filter(request => request.id !== id));
  };


const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 w-[100vw]">
      <div className="max-w-md mx-auto">
        <button className="text-xl mb-4 bg-gray-100 text-black" onClick={()=>navigate('/home')}>
          <AiOutlineArrowLeft />
        </button>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Requests</h1>
          <button onClick={handleAddRequest} className="text-blue-500 font-semibold bg-blue-100">New Request</button>
        </div>
        <p className="text-gray-600 mb-4">
          The faster a request gets the votes, the faster it goes LIVE. Ask your friends to vote. Power to you!
        </p>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab('Ongoing')}
            className={`px-4 py-2 rounded-l-full ${activeTab === 'Ongoing' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Ongoing
          </button>
          <button
            onClick={() => setActiveTab('Completed')}
            className={`px-4 py-2 rounded-r-full ${activeTab === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Completed
          </button>
        </div>
        <div>
          {activeTab === 'Ongoing' && (
            <div>
              {ongoingRequests.length > 0 ? (
                ongoingRequests.map((request) => (
                  <div key={request.id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold text-black">{request.category}</h2>
                      <p className="text-gray-600">{request.description}</p>
                    </div>
                    <button onClick={() => handleDeleteRequest(request.id)} className="text-red-500 bg-gray-100">
                      <FaTimes />
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <img width={100} height={100} src="https://static.vecteezy.com/system/resources/thumbnails/012/903/861/small_2x/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg" alt="No requests" className="mx-auto mb-4" />
                  <p className="text-gray-600">No requests here. Have something in mind? Submit a request below.</p>
                </div>
              )}
            </div>
          )}
          {activeTab === 'Completed' && (
            <div>
              {completedRequests.length > 0 ? (
                completedRequests.map((request) => (
                  <div key={request.id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-black">{request.name}</h2>
                    <p className="text-gray-600">{request.description}</p>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <img src="path/to/empty-image.png" alt="No requests" className="mx-auto mb-4" />
                  <p className="text-gray-600">No requests here. Have something in mind? Submit a request below.</p>
                </div>
              )}
            </div>
          )}
        </div>
        <button onClick={handleAddRequest} className="mt-6 w-full bg-blue-500 text-white py-2 rounded-full">Add Request</button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Request</h2>
              <button onClick={() => setShowModal(false)} className=" text-red-500 bg-gray-100">
                <FaTimes  />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              You can create a max. of 3 requests per week. Please choose your request category and describe it below.
            </p>
            <div className="mb-4">
              <select
                value={newRequest.category}
                onChange={(e) => setNewRequest({ ...newRequest, category: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded text-black"
              >
                <option value="" disabled>Choose Request Category</option>
                <option value="Add New Exam Category">Add New Exam Category</option>
                <option value="Add New Feature">Add New Feature</option>
                <option value="Update Existing Feature">Update Existing Feature</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                value={newRequest.description}
                onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Describe your request here.."
              />
            </div>
            <button onClick={handleSubmitRequest} className="w-full bg-blue-500 text-white py-2 rounded-full">
              Submit Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Requests;
