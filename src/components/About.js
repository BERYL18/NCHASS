import React from 'react';
import phone from "../assets/images/phone .png"

const About = () => {
  return (
    <section id='about' className="  md:py-10 ">
      <div className="container mx-auto px-20 flex flex-col md:flex-row items-center ">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-teal-600 text-3xl md:text-4xl font-bold mb-4">
            Never heard of NCHASS?
          </h2>
          <p className="text-gray-700 text-lg mb-6 pl-2  ">
            Nchass is a Cameroonian peer-to-peer (P2P)
             payment mobile app designed to revolutionize how 
             individuals exchange money in their daily lives.
              By seamlessly integrating into our daily lives,
               Nchass aims to simplify financial interactions, making 
               them more accessible, secure, and user-friendly.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
          <div className="flex items-center">
            
            <img src={phone} alt="NCHASS app on phone" className="h-64 md:h-80" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
