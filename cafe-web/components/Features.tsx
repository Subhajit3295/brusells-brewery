import Image from "next/image";
import React from "react";
import AnimatedContent from "./Animations/AnimatedContent";
import FeatureComponent from "./FeatureComponent";

const Features = () => {
  return (
    <section className="bg-[#262324] text-[#d2b7a1] h-auto lg:h-full w-full p-5">
      <div className="h-full w-full max-w-7xl mx-auto flex flex-col gap-10">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.0}
          threshold={0.2}
        >
          <div className="h-1/2 w-full flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            <div className="img h-1/2 md:h-full w-full rounded-2xl overflow-hidden flex-1">
              <Image
                src="/images/cofee-beans.jpg"
                alt="Coffee Beans"
                width={1500}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <FeatureComponent
              className=""
              heading="Handmade Just for you"
              paragraph="Our organically grown coffee beans are roasted over an open flame in a
        one-of-a-kind, brick roaster. There's nothing quite like a cup of
        Brussels Brewery coffee."
              buttonText="View our menu"
            />
          </div>
        </AnimatedContent>
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
          <div className="h-1/2 w-full flex flex-col gap-5 md:flex-row-reverse md:items-center">
            <div className="img h-1/2 md:h-full w-full rounded-2xl overflow-hidden flex-1">
              <Image
                src="/images/cafe-bar.jpg"
                alt="Cafe Bar"
                width={1500}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>

            <FeatureComponent
              className=""
              heading="Made In Brussels"
              paragraph="Welcome to Brussels Brewery, where the charm of Brussels meets the aroma of freshly brewed coffee. Our café is a cozy haven where friends gather, ideas spark, and every sip tells a story."
              buttonText="Learn More"
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Features;
