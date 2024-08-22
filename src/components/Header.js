import React from "react";
import { GooglePlayButton } from "react-mobile-app-button";

const Header = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.nchass.fintech";
  return (
    <section id="home" className="bg-[#117C6F]">
      <div className=" bg-[url('./assets/images/headerImg.png')]   mx-auto flex md:flex-row items-start h-[93vh]">
        <div className=" container      mx-auto text-end      text-white  ">
          <h1 className="text font-bold mb-4 text-yellow-400">
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
};

export default Header;
