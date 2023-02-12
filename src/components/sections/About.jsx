import { motion } from "framer-motion"
import React from "react"
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const About = ({ contentfulAbout }) => {
  const { aboutMePhoto, aboutText, cvPdf } = contentfulAbout.edges[0].node
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
                  {aboutText.aboutText}
                </p>
                <div className="flex justify-center w-full"> 
                  <motion.a
                    className=" flex justify-center space-x-2 items-center m-2 w-fit mb-[1.5rem] p-2 px-4 text-xl  text-white  bg-black rounded-full cursor-pointer dark:text-black dark:bg-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href={`https:${cvPdf.file.url}`}
                    download
                    >   
                    <p>Download CV</p>
                    <FontAwesomeIcon className='text-white dark:text-black' icon={faDownload} />
                  </motion.a>
                </div>
              </div>
            </div>
            <div className=" w-max-[50%] w-full" >
              <img className="rounded-lg " src={`https:${aboutMePhoto.file.url}`} alt="me" />
            </div>
          </div>
        </div>
      </section>
    )
}
  
  export default About