import { useReducer, useEffect} from 'react';
import { appReducer } from './appReducer';
import AppContext from '.';
import React from 'react';


const INITIAL_STATE = {
    isIntroDone:false,
    theme: localStorage.theme,
    isSideBarOpen: false,
}

const systemTheme = (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

const AppProvider = ({ children }) => {
    const [appState, dispatch] = useReducer( appReducer, INITIAL_STATE)
    const toggleTheme = (theme) => {
        dispatch({type:'toggleTheme', payload:{theme}})
    }
    const onIntroDone = () => { 
        dispatch({type:'onIntroDone'})
    }
    const onOpenSideBar = () => { 
        dispatch({type:'onOpenSideBar'})
    }
    useEffect(() => { 
        if (localStorage.theme === 'dark' || systemTheme ) {
            document.documentElement.classList.add('dark');
            if(systemTheme){ toggleTheme('dark')}
          } else {
            document.documentElement.classList.remove('dark')
          }
    },[])
    return (
        <div className='flex-0'>
            
            <AppContext.Provider value={{ appState, toggleTheme, onIntroDone, onOpenSideBar }}>{children}</AppContext.Provider>
        </div>
    )
}
export default AppProvider;