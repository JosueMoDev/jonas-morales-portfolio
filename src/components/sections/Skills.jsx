

import * as icons  from "@icons-pack/react-simple-icons";
import { SvgIcon } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useState } from "react"


const Skills = ({ contenfulSkills }) => {
 
  const { shownItems,techs } = contenfulSkills.edges[0].node.skills

  const [shownSkills, setShownSkills] = useState(shownItems)
  const iControls = useAnimation()
  const bControls = useAnimation()
  
  useEffect(() => {
    const sequence = async () => {
        await iControls.start(i => ({
          opacity: 1,
          scaleY: 1,
          transition: { delay: 0.5 },
        }))
        await bControls.start({ opacity: 1, scaleY: 1 })
    }
    sequence()
  }, [shownSkills, iControls, bControls])
  
  const showMoreItems = () => setShownSkills(shownSkills + techs.length)
  return (
    <section className="w-full h-auto mt-[4rem]" id="skills">
    {/* Wrapper */}
    {/*  */}
      <div className="flex m-[auto]  p-[1.25rem] md:p-[2.5rem] min-h-[100vh] mb-[6rem] font-mono flex-row justify-between w-full h-auto text-black dark:text-white md:flex-col">
        <div className="flex flex-wrap md:flex-nowrap xl:mt-[4rem] mt-[3rem] w-full  md:space-x-10">
          <div className="flex-col space-y-[1rem] w-max-[50%] w-full justify-start ">
            <p className="text-3xl md:text-4xl lg:text-6xl">Tech Stack</p>    
            <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 md:gap-3">
              {techs.slice(0, shownSkills).map(({ name, icon }, key) => (
                <motion.div
                key={key}
                custom={key}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={iControls}
                className="w-max-[20rem] h-[3rem] flex justify-center  items-center p-[1rem]  rounded-full"
                > 
                  <motion.div className="flex items-center justify-start w-full space-x-2 font-mono font-semibold capitalize text-start md:text-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                  <SvgIcon component={icons[`${icon}`]}  inheritViewBox />
                  <p>{name}</p>
                </motion.div>
                </motion.div>
              ))}
              {shownSkills < techs.length && (
                <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={bControls}>
                  <button
                    onClick={() => showMoreItems()}
                    type="button"
                    className="p-[1rem] flex justify-center items-center font-mono text-sm md:text-xl font-semibold text-white bg-black border-none rounded-full h-[3rem] w-max-[20rem] dark:bg-white dark:text-black"
                    >
                    + Load more
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
