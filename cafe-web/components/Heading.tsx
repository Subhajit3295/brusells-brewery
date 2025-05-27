import React from "react";
import AnimatedContent from "./Animations/AnimatedContent";
import { playfairDisplay, merriweather } from "./Fonts/fonts";

interface HeadingProps {
  heading: string;
  subheading: string;
}
export const Heading = (props: HeadingProps) => {
  return (
    <AnimatedContent
      distance={150}
      direction="horizontal"
      reverse={true}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.0}
      threshold={0.2}
    >
      <div className={`text-dark`}>
        <h1 className={`text-7xl font-bold ${playfairDisplay.className}`}>{props.heading}</h1>
        <p className={`text-lg mt-5 ${merriweather.className}`}>{props.subheading}</p>
      </div>
    </AnimatedContent>
  );
};
