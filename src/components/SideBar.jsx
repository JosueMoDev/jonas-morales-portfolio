import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react'
import useUi from '../hooks/useUI';
import { navLinks } from '../../config';

const SideBar = () => {
    const { openSideBar} = useUi()
  return (
    <div className='fixed right-0 top-0 lg:hidden  bg-white shadow-gray-300  dark:bg-black dark:shadow-[#17202A]  rounded-l-lg shadow-md h-screen w-[60%] md:w-[50%] z-110 text-center p-5 md:p-[2rem]   ml-auto'>
        <div className='grid w-full justify-items-stretch'>
            <IconButton 
            onClick={openSideBar} 
            size="small"
            className=' justify-self-end hover:dark:bg-gray-700 hover:bg-gray-300'
            >
            <FontAwesomeIcon
                className='w-5 h-5 text-black dark:text-white'
                icon={ faClose } />
            </IconButton>
        </div> 
        <div className='grid w-full'>
            <div className='w-full'>
                <hr className='w-full h-1 my-5 bg-black sm:my-5 dark:bg-white'/>
            </div> 
            <div className='grid justify-end space-y-5 text-right lg:space-y-12 w-12/12'>
            {navLinks.menu.map(({name, url }) => (
              <Link
              key={url}
              className="font-mono text-base font-semibold text-right text-black md:text-4xl dark:text-white"
              to={url}
              >
                { name}
              </Link>
          ))}
            </div> 
        </div>
    </div>
  )
}

export default SideBar;
