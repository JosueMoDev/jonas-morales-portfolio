import { motion } from "framer-motion"
import React from "react"
import pdf from "../../../static/pdf/CV Jonas Morales.pdf"
const About = () => {
  
    return (
      <section className="w-full h-auto mt-[4rem]" id="about">
        {/* Wrapper */}
        {/*  */}
        <div className="flex m-[auto]  p-[1.25rem] md:p-[2.5rem] min-h-[100vh] mb-[6rem] font-mono flex-row justify-between w-full h-auto text-black dark:text-white md:flex-col">
          <div className="flex flex-wrap md:flex-nowrap xl:mt-[4rem] mt-[3rem] w-full  md:space-x-10">
          <div  className=" w-max-[50%] w-full">
            <div className="">
              <p className="text-3xl md:text-4xl lg:text-6xl">About Me</p>
      
              <p className="flex items-center my-10 space-y-1 font-mono tracking-wide text-justify whitespace-normal text-normal md:text-start md:space-y-3 md:text-lg lg:text-xl xl:text-2xl">Born in 1995, I grew up in the midst of the digital rise. As a teenager I
                              started building my first websites and got more and more
                              interested in the digital economy.

                              After school, I started to study e-commerce as a bachelor's degree at the University of Applied Sciences Wedel. There, I learnt everything
                              about how to launch, develop, and market a digital business. Moreover, I was lucky enough to work as a cooperative student for several companies of the Otto Group, such as OTTO and ABOUT YOU.

                              After my studies, I continued working at OTTO as a product manager, being responsible for the product detail page on 

                              Currently, I do web development and design on a freelance basis.
                </p>
            <div className="flex justify-center w-full"> 
              <motion.a
                className=" m-2 w-fit mb-[1.5rem] p-2 px-4 text-lg text-white uppercase bg-black rounded-full cursor-pointer dark:text-black dark:bg-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href={pdf}
                download
                >    
                download cv
              </motion.a>
            </div>
            </div>
          </div>
          <div className=" w-max-[50%] w-full" >
           <img className="rounded-lg " src="/images/me.JPG" alt="me" />
          </div>
        </div>
        </div>
      </section>
    )
  }
  
  export default About