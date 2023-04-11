import React from "react";
import useUi from "../hooks/useUI";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IntroScreen = ({ logos }) => {
  const { theme } = useUi();
  const logo = theme === "dark" ? logos.darkLogo : logos.lightLogo;
  return (
    <div className="flex fixed top-0 left-[0%] z-[900] justify-center w-full h-full  p-10 overflow-hidden items-center">
      <GatsbyImage
        className="z-[1] pointer-events-none rounded-md w-[500px] h-[500px]"
        image={getImage(logo)}
        loading="lazy"
        alt="logo"
      />
    </div>
  );
};

export default IntroScreen;
