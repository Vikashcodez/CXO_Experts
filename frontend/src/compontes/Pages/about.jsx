import React from 'react';
import 'tailwindcss/tailwind.css';

import logo from '../../assets/Images/x3.png'; 

const AboutUs = () => {
  return (
    <div className="relative bg-white py-16">
      <div className="absolute inset-0">
        <div className="bg-gray-50 h-full w-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-6">
            About Virtual CXO Experts
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Empowering businesses with C-level expertise to drive growth and success.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              At Virtual CXO Experts, we provide specialized C-suite consultancy services to help businesses navigate their most critical challenges. From strategy development to operational efficiency, our team of seasoned experts brings a wealth of experience to ensure sustainable success.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-10">
            <img
              className="rounded-lg shadow-lg"
              src={logo}
              alt="Consultancy Image"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
            Our Core Values
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-indigo-600 rounded-full text-white">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3 3v3m0-6V9m-3 3V9m6 3V9" />
                </svg>
              </div>
              <h4 className="mt-6 text-lg font-medium text-gray-900">Integrity</h4>
              <p className="mt-2 text-base text-gray-500">
                We maintain the highest standards of integrity and ethics in all our operations.
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-indigo-600 rounded-full text-white">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7m0 0l-4 4-4 4" />
                </svg>
              </div>
              <h4 className="mt-6 text-lg font-medium text-gray-900">Excellence</h4>
              <p className="mt-2 text-base text-gray-500">
                We are committed to delivering outstanding service and superior results in every project.
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-indigo-600 rounded-full text-white">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-3-3H9" />
                </svg>
              </div>
              <h4 className="mt-6 text-lg font-medium text-gray-900">Innovation</h4>
              <p className="mt-2 text-base text-gray-500">
                We drive innovation by providing forward-thinking solutions to complex business challenges.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Ready to Transform Your Business?
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            Contact us today to schedule a consultation and explore how Virtual CXO Experts can support your business.
          </p>
          <a href="/contact" className="mt-8 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
