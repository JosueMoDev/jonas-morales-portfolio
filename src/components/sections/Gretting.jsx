import React from "react"
import { motion } from "framer-motion"
import ContactMeSocialNetworks from "../ContactMeSocialNetworks";

const Gretting = ({ contentfulGreeting }) => {
  const { greeting, greetingPicture, name } = contentfulGreeting.edges[0].node
 
  return (
    <section className="w-full h-auto " id="greeting">
      {/* Wrapper */}
      <div  className=" text-black dark:text-white m-[auto]  p-[1.25rem] md:p-[2.5rem] w-full h-auto min-h-[100vh]   flex flex-col justify-start mb-[1rem]">
        <div className="flex flex-wrap md:flex-nowrap xl:mt-[4rem] mt-[3rem] md:space-x-10">
          <motion.div
               animate={{ opacity: 100 }}
               transition={{
                 opacity: 100,
                 duration: 0.3,
                 delay:1
               }}
              className="md:max-w-[50%]"
              >
            <div className="mb-0  md:mb-[1.5rem]">
              <div className="grid items-center space-y-1 font-mono text-2xl font-semibold md:space-y-3 md:text-3xl lg:text-4xl xl:text-5xl ">
                <div className="flex justify-center space-x-5 text-center md:justify-start md:text-start">
                  <p className="text-3xl md:text-4xl lg:text-6xl" >Hello</p>
                  <motion.div
                    animate={{
                      opacity: 100, 
                      rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
                    }}
                    transition={{ duration: 1.8, loop: 4, repeatDelay: 1, delay:2 }}
                    style={{ originX: 0.7, originY: 0.7 }}
                    >
                    <p className="text-3xl md:text-4xl lg:text-6xl">👋🏻</p>
                  </motion.div>
                </div>
                <p className="text-center md:text-start">I'm { name }</p>
              </div>
              
              <p className="flex items-center my-10 space-y-1 font-mono text-lg tracking-wide text-center md:text-start md:space-y-3 md:text-xl lg:text-2xl xl:text-3xl">
                {greeting}
              </p>
            </div>
            <div className="w-full  grid justify-center md:justify-start  mt-[1rem] space-y-5">
              <p className="text-xl font-bold text-center md:text-2xl md:text-start ">Contact me here 👇🏻</p>
              <ContactMeSocialNetworks/>
            </div>
          </motion.div>
          <motion.div
              className=" md:max-w-[50%]  max-h-[50%] h-full w-full overflow-hidden "
              initial={{ opacity: 0, x: 20, z:0 }}
              animate={{ opacity: 100, x: 0, z:0, transition: { delay: 0.7 }, }}
              >
            <img className="rounded-lg " src={`https:${greetingPicture.file.url}` } alt="Me" />
          </motion.div>
        </div>
      </div>
      {/* Wrapper */}
    </section>
  )
}

export default Gretting
