import React from 'react'
import { motion } from "framer-motion"
// import { Link } from 'gatsby';
import { Icon } from '@mui/material';
import * as icons  from "@icons-pack/react-simple-icons";

const ContactMeSocialNetworks = ({ socialNetworks }) => {
    const { socialnetwoksdata } = socialNetworks.edges[0].node.socialnetworks
  return (
    <div className='flex content-center justify-center space-x-4 w-fit'>
        {socialnetwoksdata.map(({ name, icon, url }) => (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 1.5,
            }}
            key={name} 
            className='w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem]'  
            >
            <a className='text-gray-700 cursor-pointer dark:text-white'
             href={url}
             target="_blank"
             rel="noreferrer"
            >
                <Icon className='p-2 rounded-xl hover:dark:bg-gray-800 hover:bg-gray-200' sx={{ width:'100%', height:'100%'}} component={icons[`${icon}`]}  />
            </a>
        </motion.div>))}

    </div>
  
  )
}

export default ContactMeSocialNetworks
