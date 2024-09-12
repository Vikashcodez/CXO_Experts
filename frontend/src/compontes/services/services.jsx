import React from 'react';

const services = [
  {
    title: "Periscope by McKinsey",
    description: "The Periscope platform combines world-class intellectual property, prescriptive analytics, and cloud-based tools with expert support and training to drive revenue growth now and into the future.",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    link: "#"
  },
  {
    title: "CustomerOne",
    description: "We combine human understanding with AI-powered analytics to reveal customer insights, identify opportunities for growth, and deliver lasting impact at speed.",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    link: "#"
  },
  {
    title: "Experience DNA",
    description: "A data and analytics platform to maximize the value of customer experience management and design.",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    link: "#"
  },
  {
    title: "Marketing Solutions",
    description: "Get cutting-edge insights into consumer behavior, brand perception, and innovation opportunities and make data-driven decisions to optimize marketing spend and personalize customer communication.",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    link: "#"
  },
  {
    title: "Consumer Marketing Analytics Center",
    description: "We accelerate your company's ability using advanced analytics to translate insights from big data into actions for your consumer-facing marketing organization.",
    imageUrl: "https://via.placeholder.com/400x300", // Replace with actual image URL
    link: "#"
  },
  // Add more services here up to 13 total
];

const Capabilities = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <a href={service.link} className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800">
                Learn more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
