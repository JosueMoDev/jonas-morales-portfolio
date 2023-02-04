import { useContext } from 'react';
import AppContext from '../context';
const useDarkMode = () => {
  const { appState, toggleTheme } = useContext(AppContext);
  const { theme} = appState
  const setTheme = () => {
    if (document.documentElement.classList.toggle('dark')) { 
      localStorage.theme = 'dark'
      toggleTheme('dark')
    } else {
      localStorage.theme ='light'
      toggleTheme('light')
    }
  }
  
  return {
    theme,
    setTheme
  }

}
export default useDarkMode;