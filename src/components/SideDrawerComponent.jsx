import { Link } from "gatsby";
import React from "react";
import useUi from "../hooks/useUI";
import {
  Box,
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  SwipeableDrawer,
} from "@mui/material";
import { LightMode, DarkMode, Translate, Close } from "@mui/icons-material";
import { motion } from "framer-motion";

const SideDrawerComponent = ({ navigation }) => {
  const { theme,  isDrawerOpen, setTheme,  toggleDrawer, isEnLanguage, toogleLanguage } = useUi();
  const buttons = (isEnLanguage) ? navigation.buttonsLabelMainEn : navigation.buttonsLabelMainEs;
  return (
    <div className="w-full w-min-[70%]  h-full">
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
        onOpen={() => toggleDrawer()}
      >
        <Box
          sx={{ width: "320px", height: "100%" }}
          className="text-black bg-white dark:text-white dark:bg-black"
        >
          <div className="flex justify-end w-full grid-cols-2 p-1 justify-items-stretch">
            <Button
              onClick={toggleDrawer}
              size="small"
              className="cursor-pointer  flex-col w-[0.8rem] h-fit md:w-[1rem] md:h-fit justify-self-end hover:dark:bg-gray-900 hover:bg-gray-100"
            >
              <Icon
                className="text-black md:h-fit dark:text-white"
                component={Close}
                sx={{ width: "50%", height: "50%" }}
              />
              <span className="font-mono text-xs text-black capitalize dark:text-white">
                {buttons.close}
              </span>
            </Button>
          </div>

          <Divider className="bg-black dark:bg-white" />
          <List>
            {navigation.navigationBar.map(({ name, url }) => (
              <ListItem key={url} disablePadding>
                <Link
                  onClick={toggleDrawer}
                  className="w-full p-5 font-mono text-2xl text-right text-black cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 md:text-4xl dark:text-white"
                  to={url}
                >
                  {name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <div className="absolute flex items-center justify-center w-full pr-3 space-x-3 bottom-1 lg:bottom-3">
          <motion.a
            size="small"
            className=" flex float-left justify-center rounded-full py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 px-2 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ stiffness: 400, damping: 10 }}
            onClick={setTheme}
          >
            <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
              <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                  <Icon
                    component={theme === "dark" ? LightMode : DarkMode}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="w-full font-mono text-base">
                  {theme === "dark"?buttons.setDark:buttons.setLight}
                </p>
              </div>
            </div>
          </motion.a>
          <motion.a
            onClick={toogleLanguage}
            size="small"
            className=" flex justify-center rounded-full float-right py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 px-2 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ stiffness: 400, damping: 10 }}
          >
            <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
              <div className="flex items-center justify-start space-x-2 align-middle rounded-full">
                <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                  <Icon
                    component={Translate}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p className="font-mono text-base">{(isEnLanguage)?'En':'Es'}</p>
              </div>
            </div>
          </motion.a>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default SideDrawerComponent;
