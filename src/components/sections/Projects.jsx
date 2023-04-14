import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useUi from "../../hooks/useUI";
import Box from "@mui/material/Box";
import { Launch } from "@mui/icons-material";
import { Pagination, Navigation } from "swiper";
import TechStack from "../TechStack";
import { Github } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { Icon } from "@mui/material";
import PhotosSwiperComponent from "./PhotosSwiperComponent";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Projects = ({ contenfulProjects }) => {
  const { isEnLanguage } = useUi();
  return (
    <section className="w-full h-auto mt-[4rem]" id="projects">
      <div className="flex m-[auto]  p-[1.25rem] md:p-[2.5rem] min-h-full mb-[3rem] font-mono flex-row justify-between w-full h-auto text-black dark:text-white md:flex-col">
        <div className="flex flex-wrap md:flex-nowrap xl:mt-[4rem] mt-[3rem] w-full  md:space-x-10">
          <div className="felx-col w-max-[50%] w-full">
            <p className="text-3xl font-semibold md:text-4xl lg:text-6xl">
              {(isEnLanguage)?"Projects":"Proyectos"}
            </p>
            <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {contenfulProjects.map(
                  (
                    {
                      projectDetails,
                      buttonsLabelEn,
                      projectPhotos,
                      buttonsLabelEs,
                      buttonsValue,
                    },
                    index
                  ) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-full p-0 md:p-5 ">
                        <p className="flex justify-center font-mono text-3xl font-semibold text-center text-black dark:text-white">
                          {projectDetails.name}
                        </p>
                        <div className="flex-col w-full h-full p-0 md:p-5 columns-1 md:columns-2 ">
                          <div className="w-full h-full mb-10">
                            <PhotosSwiperComponent images={projectPhotos} />
                          </div>
                          <div className="w-full h-full space-y-4">
                            <p className="w-full h-full text-justify ">{(isEnLanguage)?projectDetails.descriptionEn:projectDetails.descriptionEs}</p>
                            <TechStack techs={projectDetails.techs} />
                            <div className="flex flex-wrap items-center justify-center w-full py-5 space-x-5 md:flex-nowrap">
                              <motion.a
                                size="small"
                                className="flex items-center justify-center float-left p-2 py-2 mb-5 text-xl text-white bg-black rounded-md cursor-pointer  md:m-2 w-fit md:px-4 dark:text-black dark:bg-white"
                                whileHover={{ scale: 1.05 }}
                                transition={{ stiffness: 400, damping: 10 }}
                                href={buttonsValue.repository}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                                  <div className="flex items-center justify-start space-x-2 align-middle">
                                    <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                                      <Icon
                                        component={Github}
                                        sx={{ width: "100%", height: "100%" }}
                                      />
                                    </div>
                                    <p className="font-mono text-base">
                                      {(isEnLanguage)?buttonsLabelEn:buttonsLabelEs}
                                    </p>
                                  </div>
                                </div>
                              </motion.a>
                              {(buttonsValue.deploy)&&(<motion.a
                                size="small"
                                className="flex items-center justify-center float-right p-2 py-2 mb-5 text-xl text-white bg-black rounded-md cursor-pointer md:m-2 w-fit md:px-4 dark:text-black dark:bg-white"
                                whileHover={{ scale: 1.05 }}
                                transition={{ stiffness: 400, damping: 10 }}
                                href={buttonsValue.deploy}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                                  <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                                    <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                                      <Icon
                                        component={Launch}
                                        sx={{ width: "100%", height: "100%" }}
                                      />
                                    </div>
                                    <p className="font-mono text-base">Demo</p>
                                  </div>
                                </div>
                              </motion.a>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
