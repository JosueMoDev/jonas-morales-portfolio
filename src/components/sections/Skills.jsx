

import * as icons  from "@icons-pack/react-simple-icons";
import { SvgIcon } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useState } from "react"
import config from "../../../config"

const Skills = () => {
  const { shownItems, skills } = config
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
  
  const showMoreItems = () => setShownSkills(shownSkills + skills.length)


  return (
    <section className="w-full h-auto mt-[4rem]" id="skills">
    {/* Wrapper */}
    {/*  */}
      <div className="flex m-[auto]  p-[1.25rem] md:p-[2.5rem] min-h-[100vh] mb-[6rem] font-mono flex-row justify-between w-full h-auto text-black dark:text-white md:flex-col">
        <div className="flex flex-wrap md:flex-nowrap xl:mt-[4rem] mt-[3rem] w-full  md:space-x-10">
          <p className="text-3xl md:text-4xl lg:text-6xl">Skills</p>
          <div className="grid-template-columns: repeat(1, minmax(0, 1fr));">
          {skills.slice(0, shownSkills).map(({ name, icon }, key) => (
            <motion.div
              key={key}
              custom={key}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={iControls}
            >
              <SvgIcon component={icons[`${icon}`]}  inheritViewBox />
              {name}
            </motion.div>
          ))}
          {shownSkills < skills.length && (
            <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={bControls}>
              <button
                onClick={() => showMoreItems()}
                type="button"
                textAlign="left"
              >
                + Load more
              </button>
            </motion.div>
          )}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
