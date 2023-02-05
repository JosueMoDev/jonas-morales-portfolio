import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react'
import useUi from '../hooks/useUI';

const SideBar = () => {
    const { openSideBar} = useUi()
  return (
    <div className='flex py-[5%] lg:hidden flex-col bg-white shadow-gray-300  dark:bg-black dark:shadow-[#17202A] justify-start rounded-l-lg shadow-md h-screen w-[50%]  text-center p-5 md:p-[2rem] fixed right-0 ml-auto'>
        <div className='grid w-full py-5'>
            <div className='fixed right-[2%] top-8'>
              <IconButton 
                onClick={openSideBar} 
                size="small"
                className='rounded-full hover:dark:bg-gray-700 hover:bg-gray-300'
                >
                <FontAwesomeIcon
                    className='w-5 h-5 text-black dark:text-white'
                    icon={ faClose } />
                </IconButton>
            </div> 
            <div className='w-full'>
                <hr className='w-full h-1 my-10 bg-black sm:my-5 dark:bg-white'/>
            </div> 
            <div className='grid justify-end space-y-5 text-right w-12/12'>
                <Link
                    className="font-mono text-base font-semibold text-black dark:text-white"
                    to="/#about"
                    >
                    About Me
                </Link>
                <Link
                    className="font-mono text-base font-semibold text-black dark:text-white"
                    to="/#contact">
                    Conctat Me
                </Link>
                <Link
                    className="font-mono text-base font-semibold text-black dark:text-white"
                    to="/#skills">
                    skill
                </Link>
                <Link
                    className="font-mono text-base font-semibold text-black dark:text-white"
                    to="/#projects">
                    Projects
                </Link>
            </div> 
        </div>
    </div>
  )
}

export default SideBar;
