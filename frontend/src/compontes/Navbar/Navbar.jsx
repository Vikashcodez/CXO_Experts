import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Globe, Menu, X } from 'react-feather';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Logo from '../../assets/Images/x3.png';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Destructure t and i18n
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/book-appointment');
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Change language globally
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-green-500 via-green-300 to-blue-500 backdrop-blur-lg bg-opacity-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} alt="Company Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-white font-bold hover:text-gray-200 px-3 py-2 rounded-md text-sm">{t('home')}</Link>
            <Link to="/services" className="text-white font-bold hover:text-gray-200 px-3 py-2 rounded-md text-sm">{t('services')}</Link>
            <Link to="/about-us" className="text-white font-bold hover:text-gray-200 px-3 py-2 rounded-md text-sm">{t('aboutUs')}</Link>
            <Link to="/newsletters" className="text-white font-bold hover:text-gray-200 px-3 py-2 rounded-md text-sm">{t('newsletters')}</Link>
          </div>

          {/* Language & Button */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center mr-4">
              <Globe className="text-white mr-2" size={16} />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-transparent border border-white rounded-md text-white font-bold focus:outline-none"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
            </div>
            <button
              onClick={handleBookAppointment}
              className="bg-white text-blue-500 font-bold hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md text-sm flex items-center"
            >
              <Calendar size={16} className="mr-2" />
              {t('bookAppointment')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 bg-blue-500 py-2 px-4 rounded-md">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-bold hover:text-gray-200 px-3 py-2 rounded-md"
              >
                {t('home')}
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-bold hover:text-gray-200 px-3 py-2 rounded-md"
              >
                {t('services')}
              </Link>
              <Link
                to="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-bold hover:text-gray-200 px-3 py-2 rounded-md"
              >
                {t('aboutUs')}
              </Link>
              <Link
                to="/newsletters"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-bold hover:text-gray-200 px-3 py-2 rounded-md"
              >
                {t('newsletters')}
              </Link>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Globe className="text-white mr-2" size={16} />
                  <select
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-transparent border border-white rounded-md text-white font-bold focus:outline-none"
                  >
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                  </select>
                </div>
                <button
                  onClick={handleBookAppointment}
                  className="bg-white text-blue-500 font-bold hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md text-sm flex items-center"
                >
                  <Calendar size={16} className="mr-2" />
                  {t('bookAppointment')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
