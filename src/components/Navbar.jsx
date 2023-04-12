import { Link } from "gatsby";
import React from "react";
import useUi from "../hooks/useUI";
import { Icon, Button } from "@mui/material";
import { LightMode, DarkMode, Menu, Translate } from "@mui/icons-material";
import SideDrawerComponent from "./SideDrawerComponent";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Navbar = ({ navigationUtilis }) => {
  // , buttonsLabelMainEn, buttonsLabelMainEs
  const { logos, navigation } = navigationUtilis;
  const { theme, isDrawerOpen, setTheme, toggleDrawer, toogleLanguage, isEnLanguage  } = useUi();
  const logo = theme === "dark" ? logos.darkLogo : logos.lightLogo;
  return (
    <>
      <nav className="flex items-center justify-between px-5 py-2 text-black bg-white rounded-b-sm shadow-sm md:py-5 md:px-10 h-fit dark:bg-black dark:text-white">
        <div className="w-fit h-fit">
          <Link className="w-fit h-fit" to="/#about">
          <GatsbyImage
              className="z-[1] pointer-events-none rounded-md w-12 h-12"
              image={getImage(logo)}
              loading="lazy"
              alt="logo"
          />
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-10 ">
          <div className="hidden space-x-10 lg:flex">
            {navigation.menuEn.map(({ name, url }) => (
              <Link
                key={url}
                className="font-mono text-base text-center text-black md:text-xl dark:text-white"
                to={url}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex justify-between space-x-1">
            <div className="flex lg:hidden">
              <Button
                onClick={toggleDrawer}
                size="small"
                className="flex-col justify-center  align-middle  w-[0.8rem] h-fit md:w-[1rem] md:h-fit hover:dark:bg-gray-900 hover:bg-gray-100"
              >
                <Icon
                  className="text-black md:h-fit dark:text-white"
                  component={Menu}
                  sx={{ width: "50%", height: "50%" }}
                />
                <span className="font-mono text-sm text-black capitalize dark:text-white">
                  menu
                </span>
              </Button>
            </div>
            <div className="hidden lg:flex">
              <Button
                onClick={setTheme}
                size="small"
                className="flex-col justify-center  align-middle  w-[0.8rem] h-fit md:w-[1rem] md:h-fit hover:dark:bg-gray-900 hover:bg-gray-100"
              >
                <Icon
                  className="text-black md:h-fit dark:text-white"
                  component={theme === "dark" ? LightMode : DarkMode}
                  sx={{ width: "50%", height: "50%" }}
                />
                <span className="font-mono text-sm text-black capitalize dark:text-white">
                  {theme === "dark" ? "Light" : "Dark"}
                </span>
              </Button>
            </div>
            <div className="hidden lg:flex">
              <Button
                onClick={toogleLanguage}
                size="small"
                className="flex-col justify-center  align-middle  w-[0.8rem] h-fit md:w-[1rem] md:h-fit hover:dark:bg-gray-900 hover:bg-gray-100"
              >
                <Icon
                  className="text-black md:h-fit dark:text-white"
                  component={Translate}
                  sx={{ width: "50%", height: "50%" }}
                />
                <span className="font-mono text-sm text-black capitalize dark:text-white">
                {(isEnLanguage)?'En':'Es'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {isDrawerOpen ? <SideDrawerComponent navigation={navigation} /> : null}
    </>
  );
};

export default Navbar;
