import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_fa2y8at', // Replace with your EmailJS service ID
        'template_8ea0ntu', // Replace with your EmailJS template ID
        formData,
        'XtsE5q4p92yGgveZe' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message, please try again later.');
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Contact Form */}
        <div>
          
          <form onSubmit={sendEmail} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-700">Better yet, see us in person!</p>
          <p className="mt-2 text-gray-700">
            We love our customers, so feel free to visit during normal business hours.
          </p>

          <div className="mt-4 text-gray-700">
            <p className="font-bold">Virtual CXO Experts Private Limited</p>
            <p># 2-2-1118/1/3, S2, 2nd Floor Siddartha Castle,</p>
            <p>Shivam Road, New Nallakunta, Hyderabad - 500007, Telangana, India.</p>
            <p>Office: 040-42704356, 040-27565676</p>
            <p>Email ID: <a href="mailto:Admin@efin-corp.com" className="text-blue-600">Admin@efin-corp.com</a></p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
