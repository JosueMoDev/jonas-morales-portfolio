import React from 'react'
import useDarkMode from '../hooks/useDarkMode';

const Layout = () => {
    const {theme, setTheme} = useDarkMode()
  return (
     <div className=' bg-white dark:bg-black text-black dark:text-white text-center font-mono font-black text-2xl'>
        index page
      
          <button className='bg-red-500 w-fit text-sm h-5 m-2 py-0 px-2 text-center grid' onClick={setTheme}>{ theme }</button>
      </div>
   
  )
}
export default Layout;