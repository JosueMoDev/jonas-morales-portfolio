import React from 'react'
import { motion } from "framer-motion"
import { Github, Gmail, Linkedin, Twitter, Whatsapp } from '@icons-pack/react-simple-icons';
import { IconButton } from '@mui/material';

const ContactMeSocialNetworks = () => {
  return (
    <div className='flex justify-around space-x-3 w-fit'>
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 3,
            }}
            >
            <IconButton 
            className='w-12 h-12 text-gray-700 rounded-full md:w-16 md:h-16 hover:dark:bg-gray-800 dark:text-white hover:bg-gray-200'
            >
             <Linkedin className='w-24 h-24 m-1 md:m-2 md:w-32 md:h-32' /> 
          </IconButton>
        </motion.div>
          
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 3,
            }}
            >
            <IconButton 
            className='w-12 h-12 text-gray-700 rounded-full md:w-16 md:h-16 hover:dark:bg-gray-800 dark:text-white hover:bg-gray-200'
            >
             <Gmail className='w-24 h-24 m-1 md:m-2 md:w-32 md:h-32' /> 
          </IconButton>
          </motion.div> 
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 3,
            }}
            >
            <IconButton 
            className='w-12 h-12 text-gray-700 rounded-full md:w-16 md:h-16 hover:dark:bg-gray-800 dark:text-white hover:bg-gray-200'
            >
             <Github className='w-24 h-24 m-1 md:m-2 md:w-32 md:h-32' /> 
              </IconButton>
              
        </motion.div> 
              
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 3,
            }}
            >
            <IconButton 
            className='w-12 h-12 text-gray-700 rounded-full md:w-16 md:h-16 hover:dark:bg-gray-800 dark:text-white hover:bg-gray-200'
            >
             <Twitter className='w-24 h-24 m-1 md:m-2 md:w-32 md:h-32' /> 
          </IconButton>
        </motion.div>  

        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 3,
            }}
            >
            <IconButton 
            className='w-12 h-12 text-gray-700 rounded-full md:w-16 md:h-16 hover:dark:bg-gray-800 dark:text-white hover:bg-gray-200'
            >
             <Whatsapp className='w-24 h-24 m-1 md:m-2 md:w-32 md:h-32' /> 
          </IconButton>
        </motion.div>   
    </div>
  )
}

export default ContactMeSocialNetworks
