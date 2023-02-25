import { Link } from 'gatsby';
import React from 'react'
import useUi from '../hooks/useUI';
import { Icon, Button} from '@mui/material';
import { LightMode, DarkMode, Menu, Translate  } from '@mui/icons-material';
import SideBar from './SideBar';

const Navbar = ({ items }) => {
  const { logos, navigation } = items;
  const {theme, isSideBarOpen, setTheme , openSideBar} = useUi()

  return (
    <>
    <nav className=" flex justify-between py-2  md:py-5 px-5 md:px-10 items-center  text-black bg-white rounded-b-lg shadow-md h-fit shadow-gray-300  dark:bg-black dark:shadow-[#17202A] dark:text-white"> 
        <div className='w-fit h-fit'>
          <Link
            className="w-fit h-fit"
            to="/#about"
          >
            <div className='w-14 h-14'> 
             <img className='bg-transparent ' src={`http:${(theme === 'dark') ? logos[1].file.url :logos[0].file.url}`} alt="logo" />
            </div>
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
        <div className='flex justify-between space-x-1' >
          <div className='flex lg:hidden'>
            <Button 
              onClick={openSideBar} 
              size="small"
              className='flex-col justify-center  align-middle  w-[0.8rem] h-fit md:w-[1rem] md:h-fit hover:dark:bg-gray-900 hover:bg-gray-100'
              >
                <Icon className='text-black md:h-fit dark:text-white' component={Menu}  sx={{ width:'50%', height:'50%'}}  />
                <span className='font-mono text-sm text-black capitalize dark:text-white'>menu</span>
            </Button>
          </div>
          <div className='hidden lg:flex'>
            <Button 
              onClick={setTheme} 
              size="small"
              className='flex-col justify-center  align-middle  w-[0.8rem] h-fit md:w-[1rem] md:h-fit hover:dark:bg-gray-900 hover:bg-gray-100'
              >
                <Icon className='text-black md:h-fit dark:text-white' component={(theme==='dark')? LightMode: DarkMode}  sx={{ width:'50%', height:'50%'}}  />
                <span className='font-mono text-sm text-black capitalize dark:text-white'>{ (theme==='dark')?'Light':'Dark' }</span>
            </Button>
            </div>  
            <div className='hidden lg:flex'>
            <Button 
              size="small"
              className='flex-col justify-center  align-middle  w-[0.8rem] h-fit md:w-[1rem] md:h-fit hover:dark:bg-gray-900 hover:bg-gray-100'
              >
                <Icon className='text-black md:h-fit dark:text-white' component={Translate}  sx={{ width:'50%', height:'50%'}}  />
                <span className='font-mono text-sm text-black capitalize dark:text-white'>Es</span>
            </Button>
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


