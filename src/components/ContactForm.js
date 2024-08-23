import React from 'react';

const ContactForm = () => {
  return (
    <section id='#contact' className=' my-12'>
    <div className="container  flex flex-col items-center justify-center min-h-screen ">
      <div className="text-start   mb-8">
        <h1 className="text-3xl bg-red-400 font-bold">Get in touch!</h1>
        <p>Contact us for a quote, help, or to join the team.</p>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-around w-full mb-8">
        <div className="flex items-center">
          <span className="material-icons-outlined">location_on</span>
          <p className="ml-2">102 Street 2714 Don</p>
        </div>
        <div className="flex items-center">
          <span className="material-icons-outlined">phone</span>
          <p className="ml-2">+02 1234 567</p>
        </div>
        <div className="flex items-center">
          <span className="material-icons-outlined">email</span>
          <p className="ml-2">hello@flowbase.com</p>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg shadow-lg p-8 w-full max-w-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Your Name</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Mail</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" type="email" id="email" placeholder="email@example.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">Phone</label>
            <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" type="text" id="phone" placeholder="Your Phone" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" id="message" placeholder="Your Message"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Services</label>
            <div className="flex flex-wrap">
              <button className="bg-red-400 text-white px-4 py-2 rounded-lg m-1">Web Design</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg m-1">Web Development</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg m-1">Logo Design</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg m-1">Other</button>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
