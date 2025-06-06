import React from "react";
import { Heading } from "./Heading";
import Image from "next/image";
import AnimatedContent from "./Animations/AnimatedContent";
import Head from "next/head";

const Hero = () => {
  return (
    <>
     <Head>
      <title>Brusells Brewery | Brewed To Perfection, Served With Love</title>
      <meta name="description" content="Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere in Brussels." />
      <link rel="canonical" href="https://brusells-brewery.vercel.app/" />
      <meta property="og:title" content="Brusells Brewery – Brewed To Perfection" />
      <meta property="og:description" content="Visit our café in Brussels for the best coffee and pastries." />
      <meta property="og:url" content="https://brusells-brewery.vercel.app" />
      <meta property="og:image" content="https://brusells-brewery.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <section className="bg-primary relative top-0 h-[100svh] px-5 md:px-8 lg:px-10 xl:px-0">
      <main className="h-full max-w-7xl mx-auto flex md:flex-col lg:flex-row relative">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          className="lg:w-1/2 md:w-full md:z-10 h-full flex justify-center gap-10 flex-col relative"
        >
          
            <Heading
              heading="Brewed To Perfection, Served With Love"
              subheading="Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere designed to inspire and unwind."
            />
            <div className="w-full flex gap-5">
              <button className="bg-dark px-6 py-2 rounded-md text-white hover:cursor-pointer hover:bg-[#3d302c] active:bg-[#2b211f] active:scale-105 duration-300">
                Visit Cafe
              </button>
              <button className="hover:bg-dark border-2 hover:text-white border-dark px-6 py-2 rounded-md text-dark hover:cursor-pointer active:bg-[#2b211f] active:scale-105 duration-300">
                Find a location
              </button>
            </div>
          
        </AnimatedContent>

        <div className="lg:w-1/2 h-full hidden md:flex justify-center flex-col md:absolute lg:relative z-0 top-0">
          <Image
            src="/images/cofee-cup.png"
            alt="hero"
            width={774}
            height={774}
            className="w-auto"
          />
        </div>
      </main>
    </section>
    </>
  );
};

export default Hero;
