import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@mui/material";
import * as icons from "@icons-pack/react-simple-icons";

const ContactMeSocialNetworks = ({ socialNetworks }) => {
  const { socialnetwoksdata } = socialNetworks.edges[0].node.socialnetworks;
  return (
    <div className="flex items-center content-center justify-center h-full space-x-5 text-center md:space-x-8 w-fit ">
      {socialnetwoksdata.map(({ name, icon, url }) => (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.5,
          }}
          key={name}
          className="flex items-center  justify-center w-[3.5rem]  h-[3.5rem] md:w-[5rem]  md:h-[5rem]"
        >
          <a
            className="text-black grid w-[4rem]  h-[4rem] md:w-[5rem]  md:h-[5rem] cursor-pointer dark:text-white "
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="w-[4rem]  h-[4rem] md:w-[5rem]  md:h-[5rem]">
              <Icon
                className="w-full h-auto p-2 hover:dark:text-black hover:text-white rounded-xl hover:dark:bg-white hover:bg-black"
                sx={{ height: "100%", width: "100%" }}
                component={icons[`${icon}`]}
              />
              <span className="font-mono text-xs font-thin md:text-base ">
                {name}
              </span>
            </span>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactMeSocialNetworks;
