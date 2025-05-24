import React from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
import Head from "next/head";

const SocialMedia = () => {
  return (
    <>
      <Head>
        <title>Brusells Brewery | Brewed To Perfection, Served With Love</title>
        <meta
          name="description"
          content="Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere in Brussels."
        />
        <link rel="canonical" href="https://brusells-brewery.vercel.app/" />
        <meta
          property="og:title"
          content="Brusells Brewery – Brewed To Perfection"
        />
        <meta
          property="og:description"
          content="Visit our café in Brussels for the best coffee and pastries."
        />
        <meta property="og:url" content="https://brusells-brewery.vercel.app" />
        <meta
          property="og:image"
          content="https://brusells-brewery.vercel.app"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className="w-full flex  md:flex-row justify-center items-center gap-5 md:gap-20 bg-[#4f3e38] py-5 text-[#d2b7a1]">
        <div className="flex gap-2 md:gap-5 items-center">
          <FaInstagram className=" text-3xl lg:text-8xl" />
          <div className="flex flex-col">
            <p className="text-xl lg:text-4xl">#Brusselscoffee</p>
            <p className="text-sm lg:text-xl">@Brusselsbrewery</p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-5 items-center">
          <FaFacebookSquare className=" text-3xl lg:text-8xl" />
          <div className="flex flex-col">
            <p className="text-xl lg:text-4xl">Follow Us</p>
            <p className="text-sm lg:text-xl">Brusselsbrewery</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
