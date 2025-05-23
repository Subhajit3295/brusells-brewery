import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  className?: string;
  heading?: string;
  paragraph?: string;
  buttonText?: string;
}

const FeatureComponent = (props: Props) => {
  return (
    <div className={`h-1/2 w-full flex flex-col justify-center gap-3 flex-1 md:h-full ${props.className}`}>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{props.heading}</h1>
      <p className="md:text-lg lg:text-xl text-[#d2b7a1] my-5">
        {props.paragraph}
      </p>
      <button className="button border border-[#d2b7a1] w-fit px-5 py-3 rounded-lg flex justify-center items-center gap-3 hover:gap-5 duration-200 active:bg-[#d2b7a1] active:text-[#262324] active:scale-105">
        <p>{props.buttonText}</p> <IoIosArrowRoundForward className="text-2xl" />
      </button>
    </div>
  );
};

export default FeatureComponent;
