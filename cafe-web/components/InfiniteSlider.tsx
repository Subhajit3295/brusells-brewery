import Image from "next/image";
import React from "react";
import FadeContent from "./Animations/FadeContent";

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
    <div className="slider max-h-[350px] w-full flex overflow-x-auto">
      {images.map((image, index) => (
        <FadeContent
          blur={true}
          duration={1000}
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
  );
};

export default InfiniteSlider;
