import React, { useEffect } from "react";
import useUi from "../hooks/useUI";
import Navbar from "./Navbar";

import { motion, useAnimation } from "framer-motion";
import IntroScreen from "./IntroScreen";

const Layout = ({ children, contentfulMain }) => {
  const { navigation, logos, buttonsLabelMainEn, buttonsLabelMainEs } = contentfulMain;
  const { isIntroDone, doIntroDone, theme } = useUi();
  const logo = theme === "dark" ? logos.darkLogo : logos.lightLogo;
  const gControls = useAnimation();
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (!isIntroDone) {
        setTimeout(() => doIntroDone(), 1500);
      }
      if (isIntroDone) {
        await gControls.start({
          opacity: 4,
          y: 0,
          transition: { delay: 0.4 },
        });
      }
    };
    pageLoadSequence();
  }, [isIntroDone, gControls, doIntroDone]);
  return (
    <>
      {!isIntroDone ? (
        <IntroScreen logo={logo} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gControls}
          className="grid w-full min-h-screen grid-cols-1 grid-rows-1 m-0 auto-rows-auto scroll-p-0"
        >
          <header className="sticky top-0 w-full px-2 z-[2]">
            <Navbar
              navigationUtilis={{
                logos,
                navigation,
                buttonsLabelMainEn,
                buttonsLabelMainEs,
              }}
            />
          </header>
          <main id="main-container">{children}</main>
          <footer></footer>
        </motion.div>
      )}
    </>
  );
};
export default Layout;
