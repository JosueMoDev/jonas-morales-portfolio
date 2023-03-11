import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { KeyboardArrowLeft, KeyboardArrowRight, Launch } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import TechStack from '../TechStack';
import {Github}  from "@icons-pack/react-simple-icons";
import { motion } from 'framer-motion';
import { Icon } from '@mui/material';


const projects = [
  {
    label: 'The Clinic App',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      techs: [
        {
          "name": "Angular",
          "icon": "Angular"
        },
        {    
          "name": "TailWind",
          "icon": "Tailwindcss"
        },
        {
          "name": "Node",
            "icon": "Nodedotjs"
        },
        {
          "name": "JavaScript",
          "icon": "Javascript"
        },
        {
          "name": "MongoDB",
          "icon": "Mongodb"
        },
        {
          "name": "RxJs",
          "icon": "Reactivex"
        },
        {
          "name": "TypeScript",
          "icon": "Typescript"
        },
      ],
      demo: 'https://giphy-clone-4gb3d92fl-josuemodev.vercel.app/#',
      repository:'https://github.com/JosueMoDev/gifsApp-GIPHY-API-react'
    
  },
  {
    label: 'Giphy-Clone',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      techs: [
        {
          "name": "React",
          "icon": "ReactJs"
        },
        {    
          "name": "TailWind",
          "icon": "Tailwindcss"
        },
        {
          "name": "Redux",
          "icon": "Redux"
        },
        {
          "name": "JavaScript",
          "icon": "Javascript"
        }
      ],
      demo: 'https://giphy-clone-4gb3d92fl-josuemodev.vercel.app/#',
      repository:'https://github.com/JosueMoDev/gifsApp-GIPHY-API-react'
  }
];


const Projects = () => {
  const theme = useTheme();
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
          <div  className="felx-col w-max-[50%] w-full">
            <p className="text-3xl font-semibold md:text-4xl lg:text-6xl">Projects</p>
            <Box sx={{ maxWidth:'100%', flexGrow: 1 }}>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {projects.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <div className='w-full h-full p-0 md:p-5 '>
                        <p className='flex justify-center font-mono text-2xl font-semibold text-center text-black dark:text-white'>{ step.label }</p>
                        <div className='flex-col w-full h-full p-5 columns-1 md:columns-2 '>
                          <div className=''>
                            <img className='w-full h-full rounded-lg' src={step.imgPath} alt={step.label} />
                          </div>
                          <div className='space-y-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti, possimus dignissimos harum distinctio ut repellendus dolore similique blanditiis perspiciatis. Corporis unde et deserunt nulla nemo labore! Ducimus, quisquam dicta.</p>
                            <TechStack techs={step.techs} />
                            <div className="flex flex-wrap md:flex-nowrap items-center justify-center pt-[2rem] w-full"> 
                              <motion.a 
                                size="small"
                                className=" flex float-left justify-center rounded-full py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 md:px-4 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
                                whileHover={{ scale: 1.05 }}
                                transition={{  stiffness: 400, damping: 10 }}
                                href={step.repository}
                                target="_blank"
                                rel="noreferrer"
                              >
                              <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                                <div className='flex items-center justify-start space-x-2 align-middle rounded-full'>
                                  <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                                    <Icon  component={Github}  sx={{ width:'100%', height:'100%'}}  />
                                  </div>
                                  <p className="font-mono text-base">Repository</p>
                                </div>
                              </div>
                              </motion.a>    
                              <motion.a 
                                size="small"
                                className=" flex justify-center rounded-full float-right py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 md:px-4 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
                                whileHover={{ scale: 1.05 }}
                                transition={{  stiffness: 400, damping: 10 }}
                                href={step.demo}
                                target="_blank"
                                rel="noreferrer"
                              >
                              <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                                <div className='flex items-center justify-start space-x-2 align-middle rounded-full'>
                                  <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                                    <Icon  component={Launch}  sx={{ width:'100%', height:'100%'}}  />
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
              {(activeStep !== maxSteps - 1 )?
              <Button
                className='float-right font-mono text-white bg-black dark:bg-white dark:text-black hover:bg-black'
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1 }
                    
              >
                Next {theme.direction === 'rtl' ? (<KeyboardArrowLeft />) : (<KeyboardArrowRight />)}
              </Button>:null}
                
              {(activeStep !== 0 )?
              <Button
                className='float-left font-mono text-white bg-black dark:bg-white dark:text-black hover:bg-black' 
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (<KeyboardArrowRight />) : (<KeyboardArrowLeft />)} Back
              </Button>:null}
            </Box>
   
          </div>
        </div>
      </div>
   </section>
  )
}
export default Projects





  