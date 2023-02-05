import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full h-full min-h-screen grid-rows-1 space-y-reverse'>
        {children}
    </div>
  )
}
export default Layout;