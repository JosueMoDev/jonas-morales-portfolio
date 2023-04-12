import { useReducer, useEffect} from 'react';
import { appReducer } from './appReducer';
import AppContext from '.';
import React from 'react';


const INITIAL_STATE = {
    isIntroDone: false,
    theme: null,
    isDrawerOpen: false,
    isEnLanguage: true
}


const AppProvider = ({ children }) => {
    const [appState, dispatch] = useReducer(appReducer, INITIAL_STATE)
    const system =(window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'
    appState.theme = localStorage.theme || system;
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
        const systemTheme = (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
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