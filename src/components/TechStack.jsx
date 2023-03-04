import React from 'react'
import { Icon } from '@mui/material'
import * as icons  from "@icons-pack/react-simple-icons";
const TechStack = ({techs}) => {
  return (

        <div className='flex col-span-1 gap-1 px-3 py-3 xl:grid xl:grid-cols-4 w-fit w-max-full h-fit '>
          {techs.map(({ name, icon }) => (
                <div key={name} className='flex items-center justify-center px-2 py-1 space-x-2 align-middle bg-black rounded-full dark:bg-white w-fit'>
                    <div className='flex items-center justify-center align-middle w-[1.2rem]  h-[1.2rem]  '> 
                      <i className='w-[1.2rem]  h-[1.2rem] flex items-center justify-center align-middle'>
                        <Icon className='flex  w-[1.2rem]  h-[1.2rem]  text-white dark:text-black' sx={{height:'100%', width:'100%'}} component={icons[`${icon}`]}  />
                      </i>   
                    </div> 
                    <span className='hidden w-full font-mono text-sm font-thin text-white xl:flex dark:text-black'>{name}</span>     
                </div>
           ))}

        </div>
  )
}

export default TechStack
