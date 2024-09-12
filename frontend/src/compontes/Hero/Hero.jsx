import React from 'react';
import Logo from '../../assets/Images/x2.png';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-green-900">
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-900"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-center text-white px-4">
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img src={Logo} alt="Robots" className="w-1/3 md:w-full" />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8 md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">CXO VIRTUALS EXPERTS</h1>
          <p className="mt-4 text-lg md:text-xl">Essential reading on topics that matter.</p>
          <a href="#" className="mt-6 inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md">Get up to speed &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
