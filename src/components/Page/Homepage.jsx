import React from "react";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 ">Welcome to the Home page</h1>
        <p className="text-gray-700 mb-6 ">
          This is the starting point of my application
        </p>

        <div className="space-x-4">
          <a
            href="/login"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple transition duration-300"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple transition duration-300"
          >
            Sigup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
