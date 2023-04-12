import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IntroScreen = ({ logo }) => {
  return (
    <div className="flex fixed top-0 left-[0%] z-[900] justify-center w-full h-full  p-10 overflow-hidden items-center">
      <GatsbyImage
        className="z-[1] pointer-events-none rounded-md w-[250px] h-[250px] md:w-[500px] md:h-[500px]"
        image={getImage(logo)}
        loading="lazy"
        alt="logo"
      />
    </div>
  );
};

export default IntroScreen;
