import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
  return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-[#372aac] text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;