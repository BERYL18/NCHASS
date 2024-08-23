import React from 'react';
import { GooglePlayButton } from "react-mobile-app-button";

const Header = () => {
  const APKUrl =
  "https://play.google.com/store/apps/details?id=com.nchass.fintech";
  return (
 
    <section id='home' className='bg-[#117C6F]'>
      <div className="bg-[url('./assets/images/headerImg.png')]  h-[92vh] md:bg-fit md:bg-no-repeat  md:bg-cover bg-no-repeat   mx-auto flex  items-start bg-cover bg-center  ">
         
           
          <div className=" container  h-[100%] flex flex-col justify-center items-center md:items-end mx-auto md:text-end text-center  text-white ">
              <h1 className=" font-bold mb-10 text-[#FFAF2E] md:text-8xl text-5xl"> 
                The Future Of 
                <br />
                <span className="">Money</span>
              </h1>
              <p className="text-2xl  mb-8">
                You don't need to worry  
                <br />
                about your change anymore.
                <br />
                Just trust the process! 
              </p>
              
              <GooglePlayButton
                url={APKUrl}
                theme={"light"}
                className={" bg-white text-black mt-10 "} 
              />
            </div>

            {/* Decorative circles */}
            

    </div>
    </section>
  );
}

export default Header;
