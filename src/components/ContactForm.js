import React from 'react';

const ContactForm = () => {
  return (
    <section id='#contact2' className='my-12'>
    <div className="container  flex flex-col items-center justify-center min-h-screen ">
      <div className="text-start   mb-8">
        <h1 className="md:text-5xl text-teal-600 text-4xl  font-bold">Get in touch now</h1>
        <p className='text-center'>Contact Nchass customer service.</p>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-around w-full mb-8">
        <div className="flex items-center">
          <span className="material-icons-outlined font-bold">Location:</span>
          <p className="ml-2">Yaounde, Cameroon</p>
        </div>
        <div className="flex items-center">
          <span className="material-icons-outlined font-bold">Phone:</span>
          <p className="ml-2">(+237) 682-192-833</p>
        </div>
        <div className="flex items-center">
          <span className="material-icons-outlined font-bold">Email:</span>
          <p className="ml-2">nchassinfo@gmail.com</p>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg shadow-lg p-8 w-full max-w-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Your Name</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#117C6F]" type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Mail</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#117C6F]" type="email" id="email" placeholder="email@example.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">Phone</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#117C6F]" type="text" id="phone" placeholder="Your Phone" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#117C6F]" id="message" placeholder="Your Message"></textarea>
          </div>
         
          <div className="text-center">
            <button className="bg-[#117C6F] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#117C6F]">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
