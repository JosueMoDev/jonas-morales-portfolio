import { useReducer, useEffect} from 'react';
import { appReducer } from './appReducer';
import AppContext from '.';
import React from 'react';
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
const systemTheModo = (systemPreference)?'dark':'light'
const themeSet = localStorage.theme || systemTheModo
const INITIAL_STATE = {
    isIntroDone: false,
    theme: themeSet ,
    isDrawerOpen: false,
    isEnLanguage: true
}


const AppProvider = ({ children }) => {
    const [appState, dispatch] = useReducer( appReducer, INITIAL_STATE)
    const toggleTheme = (theme) => {
        dispatch({type:'toggleTheme', payload:{theme}})
    }
    const onIntroDone = () => { 
        dispatch({type:'onIntroDone'})
    }
    const onToggleDrawer = () => { 
        dispatch({type:'onToggleDrawer'})
    }
    const onToggleLanguage = () => { 
        dispatch({type:'onToggleLanguage'})
    }
    useEffect(() => { 
        
        const systemTheme = (!('theme' in localStorage) && systemPreference )
        if (localStorage.theme === 'dark' || systemTheme ) {
            document.documentElement.classList.add('dark');
            dispatch({type:'toggleTheme', payload:{theme:'dark'}})
            if(systemTheme){ toggleTheme('dark')}
          } else {
            document.documentElement.classList.remove('dark')
            dispatch({type:'toggleTheme', payload:{theme:'light'}})
          }
    },[])
    return (
        <div className='flex-0'>
            <AppContext.Provider value={{ appState, toggleTheme, onIntroDone, onToggleDrawer, onToggleLanguage }}>{children}</AppContext.Provider>
        </div>
    )
}
export default AppProvider;