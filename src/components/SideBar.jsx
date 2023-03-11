
import { Link } from 'gatsby';
import React from 'react'
import useUi from '../hooks/useUI';
import {Button, Icon} from '@mui/material';
import { LightMode, DarkMode, Translate,  Close } from '@mui/icons-material';
import { motion } from 'framer-motion';

const SideBar = ({ navigation }) => {
  const { theme, setTheme , openSideBar } = useUi()
 
  return (
    <div className='fixed right-0 top-0 lg:hidden  bg-white shadow-gray-300  dark:bg-black dark:shadow-[#17202A]  rounded-l-lg shadow-md h-screen w-[80%] md:w-[50%] z-110 text-center  ml-auto'>
     
      <div className="grid grid-cols-1  divide-y-2 w-full  justify-center divide-black mb-[1rem] dark:divide-white divide-solid">
        <div className='flex justify-end w-full grid-cols-2 p-1 justify-items-stretch'>
        
          <Button 
            onClick={openSideBar} 
            size="small"
            className='cursor-pointer  flex-col w-[0.8rem] h-fit md:w-[1rem] md:h-fit justify-self-end hover:dark:bg-gray-900 hover:bg-gray-100'
            >
            <Icon className='text-black md:h-fit dark:text-white' component={Close}  sx={{ width:'50%', height:'50%'}}  />
            <span className='font-mono text-xs text-black capitalize dark:text-white'>Close</span>
          </Button>
        </div>
        
        <div className='grid w-full px-4 '>
          <div className='grid justify-end space-y-5 mt-[2rem] text-right lg:space-y-12 w-12/12'>
            {navigation.menu.map(({name, url }) => (
              <Link
              key={url}
              className="font-mono text-xl text-right text-black cursor-pointer md:text-4xl dark:text-white"
              to={url}
              >
                { name}
              </Link>
            ))}
          </div> 
          <div className='absolute flex items-center justify-center w-full pr-3 space-x-1 bottom-1 lg:bottom-3'>
            <motion.a 
              size="small"
              className=" flex float-left justify-center rounded-full py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 px-2 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ stiffness: 400, damping: 10 }}
              onClick={setTheme}
            >
              <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                <div className='flex items-center justify-start space-x-2 align-middle rounded-full'>
                  <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                    <Icon  component={(theme==='dark')? LightMode: DarkMode}  sx={{ width:'100%', height:'100%'}}  />
                  </div>
                  <p className="font-mono text-base">Set {(theme==='dark')?'Light':'Dark'} Mode</p>
                </div>
              </div>
            </motion.a>    
            <motion.a 
              size="small"
              className=" flex justify-center rounded-full float-right py-2 items-center md:m-2 w-fit mb-[1.5rem] p-2 px-2 text-xl  text-white  cursor-pointer dark:text-black  bg-black dark:bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{  stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center justify-center w-full h-full align-middle md:justify-start">
                <div className='flex items-center justify-start space-x-2 align-middle rounded-full'>
                  <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                    <Icon  component={Translate}  sx={{ width:'100%', height:'100%'}}  />
                  </div>
                  <p className="font-mono text-base">Es</p>
                </div>
              </div>
            </motion.a>  
          </div>
        </div>
      </div>      
    </div>
  )
}

export default SideBar;
