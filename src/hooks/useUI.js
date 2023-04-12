import { useContext } from "react";
import AppContext from "../context";
const useUi = () => {
  const {
    appState,
    toggleTheme,
    onToggleDrawer,
    onIntroDone,
    onToggleLanguage,
  } = useContext(AppContext);
  const { theme, isDrawerOpen, isIntroDone, isEnLanguage } = appState;
  const setTheme = () => {
    if (document.documentElement.classList.toggle("dark")) {
      localStorage.theme = "dark";
      toggleTheme("dark");
    } else {
      localStorage.theme = " light";
      toggleTheme("light");
    }
  };
  const toggleDrawer = () => {
    onToggleDrawer();
  };
  const toogleLanguage = () => {
    onToggleLanguage();
  };
  const doIntroDone = () => {
    onIntroDone();
  };
  return {
    theme,
    isDrawerOpen,
    isIntroDone,
    isEnLanguage,
    // ? Methods
    setTheme,
    toggleDrawer,
    doIntroDone,
    toogleLanguage,
  };
};
export default useUi;
