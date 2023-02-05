import { Link } from 'gatsby';
import React from 'react'
import useUi from '../hooks/useUI';
import {IconButton} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons'
import SideBar from './SideBar';
const Navbar = () => {
    const {theme, isSideBarOpen, setTheme , openSideBar} = useUi()

  return (
    <>
    <nav className="fixed flex justify-between px-5 md:px-10 lg:px-20   py-8 md:py-10  top-0 items-center w-full text-black bg-white rounded-lg shadow-md h-[8%] shadow-gray-300  dark:bg-black dark:shadow-[#17202A] dark:text-white"> 
      <div className='space-x-10'>
          <Link
            className="font-mono text-base font-semibold text-center text-black dark:text-white"
            to="/#greeting"
            >
          { '< Jonas />'}
        </Link>
      </div>
      <div className='flex justify-end space-x-10 '>
        <div className='hidden space-x-10 lg:flex'>
          <Link
            className="font-mono text-base font-semibold text-center text-black dark:text-white"
            to="/#about"
            >
            About Me
          </Link>
          <Link
            className="font-mono text-base font-semibold text-center text-black dark:text-white"
            to="/#contact">
            Conctat Me
          </Link>
          <Link
            className="font-mono text-base font-semibold text-center text-black dark:text-white"
            to="/#skills">
            skill
          </Link>
          <Link
            className="font-mono text-base font-semibold text-center text-black dark:text-white"
            to="/#projects">
            Projects
          </Link>
        </div>
        <div className='flex justify-between space-x-2 md:space-x-5'>
          <IconButton 
            onClick={openSideBar} 
            size="small"
            className='rounded-full lg:hidden hover:dark:bg-gray-700 hover:bg-gray-300'
            >
            <FontAwesomeIcon
              className='w-4 h-4 text-black lg:hidden dark:text-white'
              icon={ faBars } />
          </IconButton>
          <IconButton 
            onClick={setTheme} 
            size="small"
            className='rounded-full hover:dark:bg-gray-700 hover:bg-gray-300'
            >
            <FontAwesomeIcon
              className='w-4 h-4 text-black dark:text-white' 
              icon={(theme === 'dark') ? faSun : faMoon} />
          </IconButton>
        </div>
      </div>
      </nav>
      {

      (isSideBarOpen)?<SideBar/>:null
      }
      
    </>
  )
}

export default Navbar;