import { useContext } from 'react';
import AppContext from '../context';
const useUi = () => {
  const { appState, toggleTheme, onToggleDrawer, onIntroDone } = useContext(AppContext);
  const { theme, isDrawerOpen, isIntroDone  } = appState
  const setTheme = () => {
    if (document.documentElement.classList.toggle('dark')) { 
      localStorage.theme = 'dark'
      toggleTheme('dark')
    } else {
      localStorage.theme =' light'
      toggleTheme('light')
    }
  }
  const toggleDrawer = () => {
    onToggleDrawer()
  }

  const doIntroDone = () => {
    onIntroDone()
  }
  return {
    theme,
    isDrawerOpen,
    setTheme,
    toggleDrawer,
    isIntroDone,
    doIntroDone

  }

}
export default useUi;