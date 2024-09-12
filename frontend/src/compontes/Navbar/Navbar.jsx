import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar, Globe } from 'react-feather';
import Logo from '../../assets/Images/x2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  const services = [
    'Service 1', 'Service 2', 'Service 3', 'Service 4', 'Service 5',
    'Service 6', 'Service 7', 'Service 8', 'Service 9', 'Service 10',
    'Service 11', 'Service 12', 'Service 13'
  ];

  const handleBookAppointment = () => {
    navigate('/book-appointment');
  };

  return (
    <nav className="fixed w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <img src={Logo} alt="Company Logo" className="h-8 w-auto ml-4" />
          </div>

          {!isMenuOpen && (
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/services" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/about-us" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              <Link to="/newsletters" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Newsletters</Link>
            </div>
          )}

          {!isMenuOpen && (
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <Globe className="text-gray-800 mr-2" size={16} />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent border border-gray-300 rounded-md text-gray-800 focus:outline-none"
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                </select>
              </div>
              <button
                onClick={handleBookAppointment}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Calendar size={16} className="mr-2" />
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 flex">
            {/* Sidebar */}
            <div className="bg-gray-900 text-white w-64 p-4 flex flex-col space-y-6 transition-transform duration-300 ease-in-out transform translate-x-0">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <X size={24} />
              </button>
              <nav className="flex flex-col space-y-4">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Home</Link>
                <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Services</Link>
                <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">About Us</Link>
                <Link to="/newsletters" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300">Newsletters</Link>
              </nav>

              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Globe className="text-white mr-2" size={16} />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent border border-gray-300 rounded-md text-white focus:outline-none"
                  >
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                  </select>
                </div>
                <button
                  onClick={handleBookAppointment}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <Calendar size={16} className="mr-2" />
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white flex-1 p-6 mt-16 overflow-auto">
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <div className="grid grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <a key={index} href="#" className="text-gray-800 hover:text-gray-600 block">
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-30"
          />
        </>
      )}
    </nav>
  );
};

export default Navbar;
