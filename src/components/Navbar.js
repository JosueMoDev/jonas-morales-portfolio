import { Link } from 'gatsby';
import React from 'react'
import useDarkMode from '../hooks/useDarkMode';
import {IconButton} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const {theme, setTheme} = useDarkMode()

  return (
    <nav className="fixed top-0 flex items-center justify-end w-screen px-20 py-2 space-x-10 text-black bg-white rounded-lg shadow-lg shadow-gray-300 z-110 dark:bg-black dark:shadow-gray-900 dark:text-white">
      
        <Link className="text-white nav-link"  to="/#about">
            About Me
          </Link>
          <Link className="text-white nav-link"  to="/#contact">
            Conctat Me
          </Link>
          <Link className="text-white nav-link"  to="/#skills">
            skill
          </Link>
          <Link className="text-white nav-link"  to="/#projects">
            Projects
          </Link>
          <IconButton 
            onClick={setTheme} 
            size="small"
            className='rounded-full hover:dark:bg-gray-700 hover:bg-gray-300'
          >
            <FontAwesomeIcon
              className='w-5 h-5 text-black dark:text-white' 
              icon={(theme === 'dark') ? faSun : faMoon} />
          </IconButton>
          
          
    </nav>
  )
}

export default Navbar;