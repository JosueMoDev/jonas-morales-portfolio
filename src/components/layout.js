import React from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <div className='grid w-full h-screen min-h-screen grid-rows-1 my-20 space-y-10'>
      <Navbar  />
      <div className="">
        {children}
      </div>
      
 
    </div>
  )
}
export default Layout;