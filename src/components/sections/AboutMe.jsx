import React from "react";
import { motion } from "framer-motion";
import {  Chip, Divider, Icon } from "@mui/material";
import { Download } from "@mui/icons-material";
import ContactMeSocialNetworks from "../ContactMeSocialNetworks";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import useUi from "../../hooks/useUI";

const AboutMe = ({ contentfulAboutMe }) => {
  const { isEnLanguage } = useUi();
  const { aboutMeData, socialNetworks, localEn, localEs } = contentfulAboutMe;
  const aboutMe = isEnLanguage ? { ...aboutMeData, ...localEn } : { ...aboutMeData, ...localEs };
  return (
    <section className="w-full h-auto " id="about">
      {/* Wrapper */}
      <div className="flex items-center justify-center w-full space-y-1 font-mono text-2xl font-semibold md:space-y-3 md:text-3xl lg:text-4xl xl:text-5xl ">
        <div className="grid items-center justify-center space-x-0 md:space-x-5 md:flex">
          <div className="flex justify-center w-full space-x-5 text-center md:w-fit">
            <p className="text-3xl font-semibold text-black dark:text-white md:text-4xl lg:text-6xl">
              {aboutMe.greeting}
            </p>
            <motion.div
              animate={{
                opacity: 100,
                rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
              }}
              transition={{
                duration: 1.8,
                loop: 4,
                repeatDelay: 1,
                delay: 2,
              }}
              style={{ originX: 0.7, originY: 0.7 }}
            >
              <p className="text-3xl md:text-4xl lg:text-6xl">👋🏻</p>
            </motion.div>
          </div>
          <div className="grid w-full md:flex md:w-fit">
            <p className="text-3xl font-semibold text-black dark:text-white md:text-4xl lg:text-6xl">
              {aboutMe.person} {aboutMe.shortName}
            </p>
          </div>
        </div>
      </div>
      <div className=" text-black dark:text-white m-[auto]  p-[1.25rem] md:p-[2.5rem] w-full h-auto min-h-[100vh]   flex flex-col justify-start mb-[1rem]">
        <div className="flex flex-wrap items-center md:flex-nowrap md:space-x-10">
          <motion.div
            animate={{ opacity: 100 }}
            transition={{
              opacity: 100,
              duration: 0.3,
              delay: 1,
            }}
            className="md:max-w-[50%]"
          >
            <div className="mb-0  md:mb-[1.5rem]">
              <p className="flex items-center my-10 space-y-1 font-mono text-lg tracking-wide text-center md:text-start md:space-y-3 md:text-2xl ">
                {aboutMe.description}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="  md:max-w-[50%] flex items-center max-h-[50%] h-full w-full justify-center align-middle overflow-hidden "
            initial={{ opacity: 0, x: 20, z: 0 }}
            animate={{ opacity: 100, x: 0, z: 0, transition: { delay: 0.7 } }}
          >
            <GatsbyImage
              className="z-[1] pointer-events-none rounded-md"
              image={getImage(aboutMe.photo)}
              loading="lazy"
              alt="me profile"
              width={"100%"}
              height={"100%"}
            />
          </motion.div>
        </div>
        <div className=" items-center   w-full mt-[2rem] ">
          <p className="flex justify-center w-full font-mono text-xl font-bold text-center md:text-2xl">
            {aboutMe.contact}
          </p>

          <div className="flex flex-wrap items-center justify-center h-full align-middle md:space-x-1 md:flex-nowrap">
            <div className=" w-fit mx-2  grid justify-center  mb-[3rem] md:mb-0  mt-[1rem] space-y-5">
              <ContactMeSocialNetworks socialNetworks={socialNetworks} />
              </div>
              <div className="hidden lg:flex">
                <Divider  orientation="vertical"  variant="middle" flexItem><Chip className="text-white bg-black dark:bg-white dark:text-black" label={'or'} /></Divider>
              </div>
              <div className="w-full lg:hidden">
               <Divider  variant="middle" flexItem><Chip className="text-white bg-black dark:bg-white dark:text-black" label={'or'} /></Divider>
              </div>
              
            <motion.a
              size="small"
              className=" flex justify-center rounded-md mt-5 lg:mt-0 float-right py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 md:px-4 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href={aboutMe.buttons.value}
              download
              target="_blank"
            >
              <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                  <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                    <Icon
                      component={Download}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <p className="font-mono text-base">{aboutMe.buttons.label}</p>
                </div>
              </div>
              </motion.a>
          </div>
        </div>
      </div>
      {/* Wrapper */}
    </section>
  );
};

export default AboutMe;
