import React from 'react';
import { FaFacebook, FaTwitter} from 'react-icons/fa';
import { GooglePlayButton } from "react-mobile-app-button";
const Footer = () => {
  const APKUrl =
  "https://play.google.com/store/apps/details?id=com.nchass.fintech";
  return (
    <footer className="bg-teal-950 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex md:flex-row flex-col justify-between w-[90vw]  ">
          <div>
          <h2 className="text-xl font-semibold text-blue-400">CAMETRONIX</h2>
          <p className='text-[#FFAF2E] '>The Future Of Money</p>
          </div>
          <div className=" ">
          <GooglePlayButton
                url={APKUrl}
                theme={"light"}
                className={" bg-white text-black my-10 md:my-0 "} 
              />

           
          </div>
          <div className='flex justify-between w-24 '>
            <a href="https://x.com/NCHASS_App?t=w_Q5l326JQzIc8QjHSTqdA&s=09" className='text-white text-2xl'><FaFacebook/></a>
            <a href="https://www.facebook.com/share/GWjKuazPWf1ufjje/?mibextid=qi2Omg"  className='text-white text-2xl'><FaTwitter/></a>
            </div>
        </div>
       
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between text-sm">
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <p>©2024 Cametronix All Rights Reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
