import React from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="w-full flex  md:flex-row justify-center items-center gap-5 md:gap-20 bg-[#4f3e38] py-5 text-[#d2b7a1]">
      <div className="flex gap-2 md:gap-5 items-center">
        <FaInstagram className=" text-3xl lg:text-8xl"/>
        <div className="flex flex-col">
          <p className="text-xl lg:text-4xl">#Brusselscoffee</p>
          <p className="text-sm lg:text-xl">@Brusselsbrewery</p>
        </div>
      </div>
      <div className="flex gap-2 md:gap-5 items-center">
        <FaFacebookSquare className=" text-3xl lg:text-8xl"/>
        <div className="flex flex-col">
          <p className="text-xl lg:text-4xl">Follow Us</p>
          <p className="text-sm lg:text-xl">Brusselsbrewery</p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
