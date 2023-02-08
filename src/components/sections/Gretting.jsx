import React, { useEffect } from "react"

import useUi from "../../hooks/useUI";

import { motion, useAnimation } from "framer-motion"


const Gretting = () => {
  const { isIntroDone } = useUi();
  console.log(isIntroDone)
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()

  useEffect(() => {
    const pageLoadSequence = async () => {
      if (!isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone,  eControls, gControls, sControls, uControls])
  return (
    <div className="flex w-full h-full font-mono text-xl font-black text-center text-black bg-orange-500 dark:text-white " id="greeting">
     <div className="grid w-full px-10 m-2 bg-orange-800 pt-36 justify-self-center">
     <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gControls}
          data-testid="animated-heading"
        >
          <div className="mb-6 font-mono text-2xl font-black text-black sm:text-5xl text-start dark:text-white">
            <div className="flex items-center justify-start">
              <div className="flex">
                Hello
              <motion.div
                animate={eControls}
                style={{ originX:0.5, originY:0.7, originZ:0.6 }}
                >
                <p
                  className="mx-10 text-2xl text-center sm:text-5xl w-9 h-9"
                  >
                👋🏻  
                </p>
              </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <p className="mb-6 font-mono text-2xl font-black text-black sm:text-5xl text-start dark:text-white"> I'm Jonas Morales</p>
      </div>
    </div>
  )
}

export default Gretting
