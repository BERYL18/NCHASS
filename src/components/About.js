import React from 'react';
import phone1 from "../assets/images/phone1.png";
import phone2 from "../assets/images/phone2.png";
import phone3 from "../assets/images/phone3.png";
import Carousel from './Carousel';

const About = () => {
  const images = [
    
    phone3,
    phone2,
    phone1,
    
];
  return (
    <section id='about' className="  py-12 ">
      <div className=" container mx-auto flex flex-col md:flex-row md:justify-between ">
        {/* Text Section */}
        <div className=" h-full md:w-1/2">
          <h2 className="text-teal-600 text-3xl md:text-4xl font-bold mb-4">
            Never heard of NCHASS?
          </h2>
          <p className="text-gray-700 md:text-xl text-lg text-justify ">
            Nchass is a Cameroonian peer-to-peer (P2P)
            payment mobile app designed to revolutionize how             individuals exchange money in their daily lives.
            By seamlessly integrating into our daily lives,
            Nchass aims to simplify financial interactions, making 
            them more accessible, secure, and user-friendly.
          </p>
        </div>
        {/* Image Section */}
        <div className=" h-full md:w-1/2 md:ml-24 mt-10 md:mt-0">
          <div className="flex items-center">
            
          <Carousel images={images} />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
