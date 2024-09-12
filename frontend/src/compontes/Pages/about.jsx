// src/components/AboutUs.js

import React from 'react';
import logo from '../../assets/Images/x2.png'; // Adjust path as per your file structure

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-[#fff] mt-20">
      <h1 className="text-4xl font-bold mb-7 text-center">About Us</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src={logo} alt="Company Logo" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Our Consultancy</h2>
          <p className="mb-4">Description of our consultancy services and what we offer.</p>
          <p className="mb-4">Additional information about our expertise and services.</p>
          <p className="mb-4">More details about how we can help you and our value proposition.</p>
          <p>Contact us for more information and to get started with our services.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
