import React, { useEffect } from "react"

import useUi from "../../hooks/useUI";
import { motion, useAnimation } from "framer-motion"



const Gretting = () => {
  const { isIntroDone } = useUi();

  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()
  const iControls = useAnimation() 

  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 3.8, loop: 4, repeatDelay: 2 },
        })
        await iControls.start({ opacity: 1, x: 0, transition: { delay: 1 }, })
        await gControls.start({ opacity: 1, y: 0, transition: { delay: 1  },})
        await sControls.start({ opacity: 1, x: 0,})
      }
    }
    pageLoadSequence()
  }, [isIntroDone,  eControls, gControls, sControls, uControls])
  return (
    <section className="w-full h-auto " id="greeting">
      {/* Wrapper */}
      <div  className=" text-black dark:text-white m-[auto]  p-[1.25rem] md:p-[2.5rem] w-full h-auto min-h-[100vh]   flex flex-col justify-start mb-[6rem]">
        <div className="flex flex-wrap md:flex-nowrap xl:mt-[4rem] mt-[3rem] md:space-x-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={gControls}
              className="md:max-w-[50%]"
              >
            <div className="mb-0  md:mb-[1.5rem]">
              <div className="grid items-center space-y-1 font-mono text-2xl font-semibold md:space-y-3 md:text-3xl lg:text-4xl xl:text-5xl ">
                <div className="flex justify-center space-x-5 text-center md:justify-start md:text-start">
                  <p className="" >Hello</p>
                  <motion.div
                    animate={eControls}
                    style={{ originX: 0.7, originY: 0.7 }}
                    >
                  <p>👋🏻</p>
                  </motion.div>
                </div>
                <p className="text-center md:text-start">I'm Jonas Morales</p>
              </div>
              
              <p className="flex items-center my-5 space-y-1 font-mono text-lg text-center md:text-start md:space-y-3 md:text-xl lg:text-2xl xl:text-3xl" t>I build Progresive Web application using PERN, MERN and MEAN stack Also I build mobile applications using React Native and Ionic
              I build Progresive Web application using PERN, MERN and MEAN stack Also I build mobile applications using React Native and Ionic
              </p>
            </div>
          </motion.div>
          <motion.div
              // width: 100%;
              // max-width: 18rem;
              // margin-top:7rem;
              // margin-left: 0;
              className=" md:max-w-[50%] w-full h-auto "
              initial={{ opacity: 0, x: 20 }}
              animate={iControls}
              >
            <img className="rounded-lg hover:sepia-[.25]" src="/images/me.JPG" alt="Me" />
          </motion.div>
        </div>
      </div>
      {/* Wrapper */}
    </section>
  )
}

export default Gretting
