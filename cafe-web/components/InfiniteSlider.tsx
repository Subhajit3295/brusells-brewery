import Image from "next/image";
import React from "react";
import FadeContent from "./Animations/FadeContent";
import Head from "next/head";

const images = [
  {
    src: "/images/cofee-1.webp",
    width: 500,
    height: 749,
  },
  {
    src: "/images/cofee-2.jpg",
    width: 500,
    height: 749,
  },
  {
    src: "/images/cofee-3.jpg",
    width: 500,
    height: 749,
  },
  {
    src: "/images/cofee-5.jpg",
    width: 500,
    height: 749,
  },
  {
    src: "/images/cofee-4.jpg",
    width: 500,
    height: 749,
  },
];

const InfiniteSlider = () => {
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
      <div className="slider max-h-[350px] w-full flex overflow-x-auto">
        {images.map((image, index) => (
          <FadeContent
            blur={false}
            duration={300}
            easing="linear"
            initialOpacity={0}
            key={index}
            className="h-full aspect-square slide-child flex-1"
          >
            <Image
              src={image.src}
              width={500}
              height={749}
              alt=""
              className="object-cover h-full w-full"
            />
          </FadeContent>
        ))}
      </div>
    </>
  );
};

export default InfiniteSlider;
