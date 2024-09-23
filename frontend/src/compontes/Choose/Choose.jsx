import React from 'react';
import 'tailwindcss/tailwind.css';

const Choose = () => {
  return (
    <div className="relative bg-white py-20 overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"></div> {/* Subtle gradient background */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold tracking-wide text-indigo-600 uppercase animate-fade-in">
            Why Choose Us
          </h2>
          <p className="mt-2 text-4xl leading-9 font-bold tracking-tight text-gray-900 sm:text-5xl animate-fade-in">
            Excellence in Consultancy Services
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-500 lg:mx-auto animate-fade-in">
            We provide professional consultancy services to help businesses reach their potential. Here's why clients trust us:
          </p>
        </div>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-12">
            <div className="relative animate-fade-in bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 choose-option">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4-4h-4v4h4m4 4h-4v4h4M3 4h18m-6 12h6" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Expert Team</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our team consists of seasoned professionals who are specialists in their respective fields.
              </dd>
            </div>
            <div className="relative animate-fade-in bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 choose-option">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v3.5l4 4.5M4 4h16v16H4z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Tailored Solutions</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We customize our services to meet the unique needs and goals of every client.
              </dd>
            </div>
            <div className="relative animate-fade-in bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 choose-option">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-3-3h-3m6-6V4h-4m-6 6H4v4m0 4h16m-6 2h6" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Proven Track Record</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We have a history of delivering successful projects and ensuring client satisfaction.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Choose;
