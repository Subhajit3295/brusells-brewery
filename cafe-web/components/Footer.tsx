import Image from "next/image";
import React from "react";

const address = [
  {
    title: "Brussels",
    address: "Rue du Midi 45",
    country: "Belgium",
    state: "Bruxelles",
    zip: "1000",
  },
  {
    title: "Anderlecht",
    address: "PI. De Linde 27",
    country: "Belgium",
    state: "Anderlecht",
    zip: "1070",
  },
  {
    title: "Machelen",
    address: "Dorpsplein 2",
    country: "Belgium",
    state: "Machelen",
    zip: "1830",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#262324] text-primary min-h-fit w-full">
      <div className="max-w-7xl p-8 flex flex-col items-center mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-8">
          Locations
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-around  gap-10">
          {/* Add your location cards/content here */}
          {address.map((location, index) => (
            <div className="p-4  rounded-lg w-full" key={index}>
              <h3 className="text-xl font-semibold mb-2">{location.title}</h3>
              <div className="w-1/3 mb-2 border border-primary"></div>
              <p>{location.address}</p>
              <p>
                {location.state}, {location.country}, {location.zip}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row h-auto mt-20 gap-10 lg:gap-20">
          <div className="w-full h-fit flex flex-col">
          <div className="h-full w-full flex items-center">

            <Image
              src="/images/logo-light.png"
              alt=""
              width={1000}
              height={1000}
              className="h-20 aspect-square w-auto"
            />
            <p className="uppercase text-2xl">brusells brewery</p>
          </div>
          <p className="font-bold">Brewed To Perfection, Served With Love</p>
          </div>
          <div className="w-full h-fit flex flex-col gap-5">
            <p className="text-2xl lg:text-3xl">Join our newsletter to receive exclusive updates, and news!</p>
            <form className="flex flex-row gap-3 md:gap-8">
                <input 
                    type="email" 
                    className="flex-1 rounded-xl bg-transparent py-2 px-5 border-primary border-2 focus:border-primary focus:ring-0 focus:ring-primary focus:outline-none placeholder:text-primary"
                    placeholder="Enter your email"
                />
                <button type="submit"  className="bg-primary text-dark py-2 px-5 rounded-lg font-bold flex-2 hover:text-primary hover:bg-dark active:bg-[#262324] duration-200">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
