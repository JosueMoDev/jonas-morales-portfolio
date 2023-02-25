
import { Link } from 'gatsby';
import React from 'react'
import useUi from '../hooks/useUI';
import {Button, Icon} from '@mui/material';
import { LightMode, DarkMode, Translate,  Close } from '@mui/icons-material';


const SideBar = ({ navigation }) => {
  const { theme, setTheme , openSideBar } = useUi()
 
  return (
    <div className='fixed right-0 top-0 lg:hidden  bg-white shadow-gray-300  dark:bg-black dark:shadow-[#17202A]  rounded-l-lg shadow-md h-screen w-[80%] md:w-[50%] z-110 text-center  ml-auto'>
     
      <div className="grid grid-cols-1  divide-y-2 w-full  justify-center divide-black mb-[1rem] dark:divide-white divide-solid">
        <div className='grid w-full grid-cols-2 p-1 justify-items-stretch'>
          <div className='flex justify-start w-full justify-self-start'>
            <Button 
              onClick={setTheme} 
              size="small"
              className='flex-col justify-center  align-middle  w-[0.8rem] h-fit md:w-[1rem] md:h-fit hover:dark:bg-gray-900 hover:bg-gray-100'
              >
                <Icon className='text-black md:h-fit dark:text-white' component={(theme==='dark')? LightMode: DarkMode}  sx={{ width:'50%', height:'50%'}}  />
                <span className='font-mono text-xs text-black capitalize dark:text-white'>{ (theme==='dark')?'Light':'Dark' }</span>
            </Button>
          
          
            <Button 
              size="small"
              className='flex-col justify-center  align-middle  w-[0.8rem] h-fit md:w-[1rem] md:h-fit hover:dark:bg-gray-900 hover:bg-gray-100'
              >
                <Icon className='text-black md:h-fit dark:text-white' component={Translate}  sx={{ width:'50%', height:'50%'}}  />
                <span className='font-mono text-xs text-black capitalize dark:text-white'>Es</span>
            </Button>
          </div>
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
        </div>
       
      </div>
        
    </div>
  )
}

export default SideBar;
