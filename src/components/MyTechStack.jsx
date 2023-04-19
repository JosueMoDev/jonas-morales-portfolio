import React, { useEffect, useState } from "react";
import * as icons from "@icons-pack/react-simple-icons";
import { Icon, SvgIcon } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useUi from "../hooks/useUI";
const MyTechStack = ({ stackData }) => {
  const { isEnLanguage } = useUi()
  const { techs, shownItems } = stackData;
  const [shownSkills, setShownSkills] = useState(shownItems);
  const [isAllSkillsLoaded, loadAllSkills] = useState(false);
  const iControls = useAnimation();
  const bControls = useAnimation();
  useEffect(() => {
    const sequence = async () => {
      await iControls.start((i) => ({
        opacity: 1,
        scaleY: 1,
        transition: { delay: 0.5 },
      }));
      await bControls.start({ opacity: 1, scaleY: 1 });
    };
    sequence();
  }, [shownSkills, iControls, bControls]);

  const showMoreItems = () => {
    loadAllSkills(true);
    setShownSkills(shownSkills + techs.length);
  };
  const showLessItems = () => {
    loadAllSkills(false);
    setShownSkills(shownItems);
  };
  return (
    <>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-x-3">
        {techs.slice(0, shownSkills).map(({ name, icon }, key) => (
          <motion.div
            key={key}
            custom={key}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={iControls}
            className="w-max-[20rem] h-[3rem] mt-8 flex justify-center  items-center p-[1rem]  rounded-full"
          >
            <motion.div
              className="flex-col items-center w-full space-x-2 font-mono text-center capitalize md:text-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SvgIcon
                sx={{ width: "4rem", height: "4rem" }}
                component={icons[`${icon}`]}
                inheritViewBox
              />
              <p className="font-mono">{name}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {shownSkills && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={bControls}
          className="flex justify-center w-full pt-5 text-center"
        >
          {!isAllSkillsLoaded ? (
            <button
              onClick={() => showMoreItems()}
              type="button"
              className=" flex justify-center rounded-md float-right py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 md:px-4 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
            >
              <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                  <p className="font-mono text-base">
                    {isEnLanguage ? "Show More" : "Mostrar Más"}
                  </p>
                  <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                    <Icon
                      component={ExpandMore}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <button
              onClick={() => showLessItems()}
              type="button"
              className=" flex justify-center rounded-md float-right py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 md:px-4 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
            >
              <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                  <p className="font-mono text-base">
                    {isEnLanguage ? "Show Less" : "Mostrar Menos"}
                  </p>
                  <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                    <Icon
                      component={ExpandLess}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </button>
          )}
        </motion.div>
      )}
    </>
  );
};

export default MyTechStack;
