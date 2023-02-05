import { Link } from 'gatsby';
import React from 'react'
import useDarkMode from '../hooks/useDarkMode';

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
      <button className='grid h-5 px-2 py-0 m-2 text-sm text-center bg-red-500 w-fit' onClick={setTheme}>{theme}</button>
          
    </nav>
  )
}

export default Navbar;