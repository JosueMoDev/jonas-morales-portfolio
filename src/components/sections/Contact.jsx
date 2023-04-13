import React from "react";
import { motion } from "framer-motion";
import ContactMeSocialNetworks from "../ContactMeSocialNetworks";
import { Chip, Divider, Icon } from "@mui/material";
import { Gmail } from "@icons-pack/react-simple-icons";
import { Phone } from "@mui/icons-material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Contact = ({ contentfulContactMe }) => {
  const { contactMe, socialNetworks } = contentfulContactMe;
  return (
    <section className="w-full h-auto " id="contact">
      {/* Wrapper */}
      <div className=" text-black dark:text-white m-[auto]  font-mono p-[1.25rem] md:p-[2.5rem] w-full h-auto min-h-[100vh]   flex flex-col justify-start mb-[1rem]">
        <div className="flex-col xl:mt-[4rem] mt-[3rem] md:space-x-10">
          <p className="text-xl font-semibold md:text-3xl lg:text-4xl xl:text-6xl">
            Would you like contact me ?
          </p>
          <div className="flex flex-row items-center md:items-start lg:flex-col justify-start mt-[3rem] mb-[2rem] ">
            <div className="flex flex-wrap items-center justify-center w-full lg:flex-nowrap">
              <GatsbyImage
                className="z-[1] pointer-events-none rounded-md w-[400px] h-[400px]  "
                image={getImage(contactMe.photo)}
                loading="lazy"
                alt="me profile"
              />

              <div className="flex-col items-center justify-center w-full px-2 text-xl md:px-5">
                <div className="flex items-center justify-center w-full ">
                  <div className="flex-row justify-start w-full">
                    <p className="text-xl font-semibold text-center md:text-2xl lg:text-3xl">
                      {contactMe.name}
                    </p>
                    <p className="font-thin text-center text-basic">
                      {contactMe.profession}👨🏻‍💻
                    </p>

                    <div className="flex-col columns-1 py-4  divide-y-2 w-full   justify-center divide-black mb-[1rem] dark:divide-white divide-solid">
                      <div className="flex flex-wrap md:flex-nowrap items-center justify-center pt-[2rem] w-full">
                        <motion.a
                          size="small"
                          className=" flex justify-center rounded-md py-4 items-center md:m-2 w-full mb-[1.5rem] p-2 md:px-4 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
                          whileHover={{ scale: 1.05 }}
                          transition={{ stiffness: 400, damping: 10 }}
                          href={`mailto:${contactMe.email}`}
                          download
                          target="_blank"
                        >
                          <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                            <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                              <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                                <Icon
                                  className="text-[#EA4335]"
                                  component={Gmail}
                                  sx={{ width: "100%", height: "100%" }}
                                />
                              </div>
                              <p className="text-base">{contactMe.email}</p>
                            </div>
                          </div>
                        </motion.a>
                        <motion.a
                          size="small"
                          className=" flex justify-center rounded-md py-4 items-center md:m-2 w-full mb-[1.5rem] p-2 md:px-4 text-lg  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
                          whileHover={{ scale: 1.05 }}
                          transition={{ stiffness: 400, damping: 10 }}
                          href={`tel:+503 ${contactMe.telephone}`}
                        >
                          <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                            <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                              <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                                <Icon
                                  className="text-[#5bb15c]"
                                  component={Phone}
                                  sx={{ width: "100%", height: "100%" }}
                                />
                              </div>
                              <p className="font-mono text-base">
                                +503 {contactMe.telephone}
                              </p>
                            </div>
                          </div>
                        </motion.a>
                      </div>
                    </div>
                    <Divider color={'rgb(75 85 99 / 0.5)'} flexItem><Chip label={'or'} sx={{ backgroundColor:'rgb(75 85 99 / 0.5)', color:'currentcolor'}} /></Divider>
                    <div className="w-full  grid justify-center   pt-[2rem] space-y-5">
                        <p className="font-mono text-xl font-bold text-center md:text-2xl ">
                          Contact me here 👇🏻
                        </p>
                        <ContactMeSocialNetworks
                          socialNetworks={socialNetworks}
                        />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
