// src/AboutPage.js
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">About Screen Recording Project</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is a simple screen recording project built with React and Tailwind CSS. 
          The goal of this project is to provide a seamless experience for users 
          to record their screen, capture high-quality video, and save it for later use.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Features Section */}
        <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900">Key Features</h2>
          <ul className="mt-4 text-gray-700 space-y-2">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              High-quality screen recording
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Easy-to-use interface
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Option to save and share recordings
            </li>
          </ul>
        </div>

        {/* Technology Stack Section */}
        <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900">Technology Stack</h2>
          <ul className="mt-4 text-gray-700 space-y-2">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              React for front-end development
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Tailwind CSS for styling
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              WebRTC for screen capture
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">How to Use</h2>
        <p className="mt-4 text-lg text-gray-700">
          Simply click on the "Start Recording" button, select the area you want to capture, 
          and the screen recording will begin. Once done, you can save or share the recording.
        </p>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
        <p className="mt-4 text-lg text-gray-700">
          For any questions or feedback, feel free to contact us at: <strong>contact@screenrecorder.com</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

