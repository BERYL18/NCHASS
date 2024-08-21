import React, { useState } from 'react';

const Contact= () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
  };

  return (
    <section id='contact' className="py-10 md:py-20">
      <div className="container mx-auto  px-4">
        <h2 className="text-teal-700 text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Contact NCHASS Now
        </h2>
        <div className="flex flex-col md:flex-row justify-between  p-10 items-start">

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="md:w-1/2 mb-6 md:mb-0 "
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send us a message"
              className="w-full h-60 p-4  border border-gray-300 rounded-lg "
            />
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-600 text-white py-2 px-6 rounded-lg shadow-lg"
            >
              submit
            </button>
          </form>


          {/* Contact Details */}
          <div className="md:w-1/2 space-y-4 pl-10 ">
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-gray-700 font-semibold">Phone:</p>
              <p>(+237) 6</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-gray-700 font-semibold">Email:</p>
              <p>nchassinfo@gmail.com</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-gray-700 font-semibold">Location:</p>
              <p>Yaounde, Cameroon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
