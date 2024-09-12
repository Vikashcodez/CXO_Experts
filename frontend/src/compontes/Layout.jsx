// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main> {/* Corrected closing tag */}
      <Footer />
    </div>
  );
};

export default Layout;
