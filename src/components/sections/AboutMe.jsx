import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@mui/material";
import { Download } from "@mui/icons-material";
import ContactMeSocialNetworks from "../ContactMeSocialNetworks";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const AboutMe = ({ contentfulGreeting }) => {
  const { allContentfulGreeting, allContentfulSocialNetwork } =
    contentfulGreeting;
  const { greeting, greetingPicture, name } =
    allContentfulGreeting.edges[0].node;
  const image = getImage(greetingPicture);
  return (
    <section className="w-full h-auto " id="about">
      {/* Wrapper */}
      <div className=" text-black dark:text-white m-[auto]  p-[1.25rem] md:p-[2.5rem] w-full h-auto min-h-[100vh]   flex flex-col justify-start mb-[1rem]">
        <div className="flex flex-wrap items-center md:flex-nowrap mt-[4rem] md:space-x-10">
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
              <div className="grid items-center space-y-1 font-mono text-2xl font-semibold md:space-y-3 md:text-3xl lg:text-4xl xl:text-5xl ">
                <div className="flex justify-center space-x-5 text-center md:justify-start md:text-start">
                  <p className="text-3xl font-semibold md:text-4xl lg:text-6xl">
                    Hello
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
                <p className="text-center md:text-start">I'm {name}</p>
              </div>

              <p className="flex items-center my-10 space-y-1 font-mono text-lg tracking-wide text-center md:text-start md:space-y-3 md:text-xl lg:text-2xl xl:text-3xl">
                {greeting}
              </p>
            </div>
            <div className="w-full  grid justify-center  mb-[3rem] md:mb-0  mt-[1rem] space-y-5">
              <p className="font-mono text-xl font-bold text-center md:text-2xl">
                Contact me here 👇🏻
              </p>
              <ContactMeSocialNetworks
                socialNetworks={allContentfulSocialNetwork}
              />
            </div>
          </motion.div>
          <motion.div
            className="  md:max-w-[50%] flex items-center  max-h-[50%] h-full w-full justify-center align-middle overflow-hidden "
            initial={{ opacity: 0, x: 20, z: 0 }}
            animate={{ opacity: 100, x: 0, z: 0, transition: { delay: 0.7 } }}
          >
            <GatsbyImage
              className="z-[1] pointer-events-none rounded-md"
              image={image}
              loading="lazy"
              alt="me profile"
              width={"100%"}
              height={"100%"}
            />
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-full md:mt-[3rem] ">
          <motion.a
            size="small"
            className=" flex justify-center  space-x-2 items-center m-2 w-fit mb-[1.5rem] p-2 px-4 text-xl  text-white  bg-black rounded-full cursor-pointer dark:text-black dark:bg-white"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href={
              "https://drive.google.com/file/d/1xLZREEzI-4nfsx9N-rWwYHUFZLzvHR-p/view"
            }
            download
            target="_blank"
          >
            <div className="flex items-center justify-center w-full h-full align-middle">
              <button className="flex rounded-full">
                <p className="font-mono text-xl text-center">Download CV</p>
                <div className="w-[1.5rem] h-[1.5rem] ">
                  <Icon
                    component={Download}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </div>
              </button>
            </div>
          </motion.a>
        </div>
      </div>
      {/* Wrapper */}
    </section>
  );
};

export default AboutMe;
