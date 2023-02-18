
import { Link } from 'gatsby';
import React from 'react'
import useUi from '../hooks/useUI';
import {IconButton, Icon} from '@mui/material';
import { Close } from '@mui/icons-material';


const SideBar = ({ navigation }) => {
    const { openSideBar} = useUi()
  return (
    <div className='fixed right-0 top-0 lg:hidden  bg-white shadow-gray-300  dark:bg-black dark:shadow-[#17202A]  rounded-l-lg shadow-md h-screen w-[60%] md:w-[50%] z-110 text-center p-5 md:p-[2rem]   ml-auto'>
        <div className='grid w-full justify-items-stretch'>
            <IconButton 
            onClick={openSideBar} 
            size="small"
            className='cursor-pointer justify-self-end hover:dark:bg-gray-700 hover:bg-gray-300'
            >
            <div className='rounded-full flex justify-center align-middle w-[1.2rem] h-[1.rem] md:w-[1.5rem] md:h-[1.5rem] hover:dark:bg-gray-700 hover:bg-gray-300'>
              <Icon className='text-black cursor-pointer dark:text-white' component={Close}  sx={{ width:'100%', height:'100%'}}  />
            </div>
            </IconButton>
        </div> 
        <div className='grid w-full'>
            <div className='w-full'>
                <hr className='w-full h-1 my-5 bg-black sm:my-5 dark:bg-white'/>
            </div> 
            <div className='grid justify-end space-y-5 text-right lg:space-y-12 w-12/12'>
            {navigation.menu.map(({name, url }) => (
              <Link
              key={url}
              className="font-mono text-base text-right text-black cursor-pointer md:text-4xl dark:text-white"
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
