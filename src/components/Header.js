import React from 'react';
import { GooglePlayButton } from "react-mobile-app-button";
import headerImg from "../assets/images/headerImg.png"
import Playstore from "../assets/images/playstore.png"

const Header = () => {
  const APKUrl =
  "https://play.google.com/store/apps/details?id=com.nchass.fintech";
  return (
 
    <section id='home'>
      <div className="bg-teal-500   mx-auto flex md:flex-row items-start ">
        <div className=" relative img-container   ">
           
           {/* Right Image Section */}
        
          <img 
            src={headerImg}
            alt="Two women using a phone"
           
          />
          
          </div>
          <div className=" absolute right-0 main-text mx-auto text-end   float-end  md:float-none  text-white p-10">
              <h1 className=" font-bold mb-4 text-yellow-400">
                The Future Of 
                <br />
                <span className="">Money</span>
              </h1>
              <p className="text-lg md:text-xl  mb-8">
                You don't need to worry  
                <br />
                about your change anymore.
                <br />
                Just trust the process!
              </p>
              
              <GooglePlayButton
                url={APKUrl}
                theme={"light"}
                className={"custom-style"} 
              />
            </div>

            {/* Decorative circles */}
            

    </div>
    </section>
  );
}

export default Header;
