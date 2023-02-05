import React from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <div className='grid w-full h-screen min-h-screen grid-rows-1 my-20 space-y-10 bg-white scroll-none dark:bg-black layout'>
      <Navbar  />
      <body className="h-screen bg-white dark:bg-black">{ children }</body>
      
 
    </div>
  )
}
export default Layout;