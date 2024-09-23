import React from 'react';
import Logo from '../../assets/Images/x2.png';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      {/* Glossy effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-center text-white px-4">
        {/* Left side: Company Logo */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img src={Logo} alt="Company Logo" className="w-1/3 md:w-full" />
        </div>

        {/* Right side: Company Name, Tagline, Description, and Button */}
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8 md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">CXO VIRTUAL EXPERTS</h1>
          <p className="mt-2 text-xl md:text-2xl italic">Yours CXO Experts.</p>
          <p className="mt-4 text-lg md:text-xl">
            Unlock the full potential of your business with our comprehensive digital solutions. 
            Our team of seasoned experts delivers insights and strategies to drive innovation.
          </p>
          <a href="#" className="mt-6 inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-lg">
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
