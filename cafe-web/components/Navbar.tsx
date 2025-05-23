import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-20 fixed z-50 bg-transparent backdrop-blur-sm">
      <nav className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <div className="h-full w-fit flex items-center">
          <Image
            src="/images/logo.png"
            alt=""
            width={1000}
            height={1000}
            className="h-full aspect-square w-auto"
          />
          <p className="uppercase text-md">brusells brewery</p>
        </div>

        <div className="md:flex hidden items-center gap-8 h-full">
          <a href="" className="e">
            Home
          </a>
          <a href="" className="e">
            About
          </a>
          <a href="" className="e">
            Blog
          </a>
          <a href="" className="e">
            Locations
          </a>
          <a href="" className="e">
            Contact
          </a>
          <button className="bg-primary px-6 py-2 rounded-xl text-white hover:cursor-pointer hover:bg-[#3d302c] active:bg-[#2b211f]">
            Visit Cafe
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
