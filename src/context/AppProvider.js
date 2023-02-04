import { useReducer, useEffect} from 'react';
import { appReducer } from './appReducer';
import AppContext from '.';
import React from 'react';


const INITIAL_STATE = {
    isIntroDone:false,
    theme: localStorage.theme
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

    console.log(appState)
    useEffect(() => { 
        if (localStorage.theme === 'dark' || systemTheme ) {
            document.documentElement.classList.add('dark');
            if(systemTheme){ toggleTheme('dark')}
          } else {
            document.documentElement.classList.remove('dark')
          }
    },[])
    return (<AppContext.Provider value={{ appState, toggleTheme, onIntroDone }}>{ children }</AppContext.Provider>)
}
export default AppProvider;