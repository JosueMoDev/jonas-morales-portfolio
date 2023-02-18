import { Link } from 'gatsby';
import React from 'react'
import useUi from '../hooks/useUI';
import {IconButton, Icon} from '@mui/material';
import { LightMode, DarkMode, Menu, Translate  } from '@mui/icons-material';
import SideBar from './SideBar';

const Navbar = ({ items }) => {
  const { logos, navigation } = items;
  const {theme, isSideBarOpen, setTheme , openSideBar} = useUi()

  return (
    <>
    <nav className=" flex justify-between py-5 px-5 md:px-10 items-center  text-black bg-white rounded-b-lg shadow-md h-[8%] shadow-gray-300  dark:bg-black dark:shadow-[#17202A] dark:text-white"> 
        <div className='space-x-10 '>
          <Link
            className="font-mono text-base text-center text-black md:text-xl dark:text-white"
            to="/#greeting"
            >
            <img className='w-12 h-12' src={`http:${(theme === 'dark') ? logos[1].file.url :logos[0].file.url}`} alt="logo" />
        </Link>
      </div>
      <div className='flex items-center justify-end space-x-10 '>
        <div className='hidden space-x-10 lg:flex'>
          
        {navigation.menu.map(({name, url }) => (
              <Link
              key={url}
              className="font-mono text-base text-center text-black md:text-xl dark:text-white"
              to={url}
              >
                { name}
              </Link>
          ))}
         
        </div>
        <div className='flex justify-between space-x-2 md:space-x-5' >
          <div className='flex lg:hidden'>
            <IconButton 
              onClick={openSideBar} 
              size="small"
              className='w-full h-full rounded-full hover:dark:bg-gray-700 hover:bg-gray-300'
              >
              <div className='rounded-full flex justify-center align-middle w-[1.2rem] h-[1.rem] md:w-[1.5rem] md:h-[1.5rem] hover:dark:bg-gray-700 hover:bg-gray-300'>
                <Icon className='text-black dark:text-white' component={Menu}  sx={{ width:'100%', height:'100%'}}  />
              </div>
            </IconButton>
          </div>
          <div className='flex'>
            <IconButton 
              onClick={setTheme} 
              size="small"
              className='w-full h-full rounded-full hover:dark:bg-gray-700 hover:bg-gray-300'
              >
              <div className='rounded-full flex justify-center align-middle w-[1.2rem] h-[1.rem] md:w-[1.5rem] md:h-[1.5rem] hover:dark:bg-gray-700 hover:bg-gray-300'>
                <Icon className='text-black dark:text-white' component={(theme==='dark')? LightMode: DarkMode}  sx={{ width:'100%', height:'100%'}}  />
              </div>
            </IconButton>
            </div>  
            <div className='flex'>
              <IconButton 
                size="small"
                className='w-full h-full rounded-full hover:dark:bg-gray-700 hover:bg-gray-300'
                >
                <div className='rounded-full flex justify-center align-middle w-[1.2rem] h-[1.rem] md:w-[1.5rem] md:h-[1.5rem] hover:dark:bg-gray-700 hover:bg-gray-300'>
                  <Icon className='text-black dark:text-white' component={Translate}  sx={{ width:'100%', height:'100%'}}  />
                </div>
              </IconButton>
            </div>  
        </div>
      </div>
      </nav>
      {

        (isSideBarOpen) ? <SideBar navigation={ navigation } />:null
      }
      
    </>
  )
}

  
export default Navbar;


