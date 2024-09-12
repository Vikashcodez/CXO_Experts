import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    mobileNo: '',
    service: '',
    date: '',
    time: '',
    termsAgreed: false,
  });
  const [showTermsModal, setShowTermsModal] = useState(false);

  const services = [
    'Service 1', 'Service 2', 'Service 3', 'Service 4', 'Service 5',
    'Service 6', 'Service 7', 'Service 8', 'Service 9', 'Service 10',
    'Service 11', 'Service 12', 'Service 13'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.termsAgreed) {
      alert('You must agree to the terms and conditions');
      return;
    }

    // Send email
    emailjs.sendForm('service_cafeacj', 'template_74uv7qz', e.target, 'zju17tWDRF35C4Jii')
      .then((result) => {
        console.log(result.text);
        alert('Appointment booked successfully!');
        setFormData({
          name: '',
          email: '',
          address: '',
          mobileNo: '',
          service: '',
          date: '',
          time: '',
          termsAgreed: false,
        });
      }, (error) => {
        console.log(error.text);
        alert('Failed to book appointment');
      });
  };

  return (
    <div className="pt-16 p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm"
          required
        />
        <input
          type="tel"
          name="mobileNo"
          placeholder="Mobile Number"
          value={formData.mobileNo}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm"
          required
        >
          <option value="">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm"
          required
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="termsAgreed" className="cursor-pointer text-gray-700" onClick={() => setShowTermsModal(true)}>
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700" disabled={!formData.termsAgreed}>
          Book Appointment
        </button>
      </form>

      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md mx-auto shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
            <p>
              {/* Insert your terms and conditions text here */}
              Terms and conditions of the consultancy company.
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, termsAgreed: true }));
                  setShowTermsModal(false);
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
