import { useContext } from 'react';
import AppContext from '../context';
const useUi = () => {
  const { appState, toggleTheme, onOpenSideBar } = useContext(AppContext);
  const { theme, isSideBarOpen, isIntroDone  } = appState
  const setTheme = () => {
    if (document.documentElement.classList.toggle('dark')) { 
      localStorage.theme = 'dark'
      toggleTheme('dark')
    } else {
      localStorage.theme ='light'
      toggleTheme('light')
    }
  }
  const openSideBar = () => {
    onOpenSideBar()
  }
  return {
    theme,
    isSideBarOpen,
    setTheme,
    openSideBar,
    isIntroDone

  }

}
export default useUi;