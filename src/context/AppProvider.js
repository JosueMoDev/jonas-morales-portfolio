import { useReducer, useEffect} from 'react';
import { appReducer } from './appReducer';
import AppContext from '.';
import React from 'react';

const AppProvider = ({ children }) => {
    useEffect(() => { 
        const systemTheme = (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        if (localStorage.theme === 'dark' || systemTheme) {
            INITIAL_STATE.theme = 'dark'
            document.documentElement.classList.add('dark');
            dispatch({type:'toggleTheme', payload:{theme:'dark'}})
            if(systemTheme){ toggleTheme('dark')}
        } else {
            INITIAL_STATE.theme ='ligth'
            document.documentElement.classList.remove('dark')
            dispatch({type:'toggleTheme', payload:{theme:'light'}})
          }
    }, [])
    const systemTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'
    const themeSet = localStorage.theme
    const INITIAL_STATE = {
        isIntroDone: false,
        theme: themeSet || systemTheme,
        isDrawerOpen: false,
        isEnLanguage: true
    }
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

    return (
        <div className='flex-0'>
            <AppContext.Provider value={{ appState, toggleTheme, onIntroDone, onToggleDrawer, onToggleLanguage }}>{children}</AppContext.Provider>
        </div>
    )
}
export default AppProvider;