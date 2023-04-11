import * as React from "react";
import Box from "@mui/material/Box";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Launch,
} from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import TechStack from "../TechStack";
import { Github } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { Icon } from "@mui/material";
import ImagenCarrousel from "./ImagenCarrousel";

const Projects = ({ contenfulProjects }) => {
  const allProjects = [...contenfulProjects.edges]
  const projects = allProjects.map(project => ({
    name: project.node.name,
    photos: project.node.photos,
    techs: project.node.techs,
    descriptionEn: project.node.descriptionEn.descriptionEn,
    repository: project.node.assets.repositoryGithub,
    deployDemo: project.node.assets.deployDemo
  }))
  
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projects.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <section className="w-full h-auto mt-[4rem]" id="projects">
      <div className="flex m-[auto]  p-[1.25rem] md:p-[2.5rem] min-h-[100vh] mb-[6rem] font-mono flex-row justify-between w-full h-auto text-black dark:text-white md:flex-col">
        <div className="flex flex-wrap md:flex-nowrap xl:mt-[4rem] mt-[3rem] w-full  md:space-x-10">
          <div className="felx-col w-max-[50%] w-full">
            <p className="text-3xl font-semibold md:text-4xl lg:text-6xl">
              Projects
            </p>
            <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
              <SwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {projects.map((project, index) => (
                  <div key={project.name}>
                    {Math.abs(activeStep - index) <= maxSteps ? (
                      <div className="w-full h-full p-0 md:p-5 ">
                        <p className="flex justify-center font-mono text-2xl font-semibold text-center text-black dark:text-white">
                          {project.name}
                        </p>
                        <div className="flex-col w-full h-full p-0 md:p-5 columns-1 md:columns-2 ">
                          <div className="">
                            <ImagenCarrousel images={project.photos} />
                          </div>
                          <div className="space-y-4">
                            <p>
                             {project.descriptionEn}
                            </p>
                            <TechStack techs={project.techs} />
                            <div className="flex flex-wrap md:flex-nowrap items-center justify-center pt-[2rem] w-full">
                              <motion.a
                                size="small"
                                className=" flex float-left justify-center rounded-full py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 md:px-4 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
                                whileHover={{ scale: 1.05 }}
                                transition={{ stiffness: 400, damping: 10 }}
                                href={project.repository}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                                  <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                                    <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                                      <Icon
                                        component={Github}
                                        sx={{ width: "100%", height: "100%" }}
                                      />
                                    </div>
                                    <p className="font-mono text-base">
                                      Repository
                                    </p>
                                  </div>
                                </div>
                              </motion.a>
                              <motion.a
                                size="small"
                                className=" flex justify-center rounded-full float-right py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 md:px-4 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
                                whileHover={{ scale: 1.05 }}
                                transition={{ stiffness: 400, damping: 10 }}
                                href={project.deployDemo}
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
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </SwipeableViews>
              {activeStep !== maxSteps - 1 ? (
                <button
                  className="float-right px-2 py-1 font-mono text-white bg-black rounded-md dark:bg-white dark:text-black hover:bg-black"
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next <KeyboardArrowRight />
                </button>
              ) : null}

              {activeStep !== 0 ? (
                <button
                  className="float-left px-2 py-1 font-mono text-white bg-black rounded-md dark:bg-white dark:text-black hover:bg-black"
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  <KeyboardArrowLeft /> Back
                </button>
              ) : null}
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
