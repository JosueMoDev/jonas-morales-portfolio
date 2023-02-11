import React from 'react'
import { motion } from "framer-motion"
import { Github, Gmail, Linkedin, Twitter, Whatsapp } from '@icons-pack/react-simple-icons';
import { Link } from 'gatsby';

const ContactMeSocialNetworks = () => {
  return (
    <div className='flex content-center justify-center space-x-4 w-fit'>
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 1.5,
            }}
            >
            <Link className='text-gray-700 cursor-pointer dark:text-white '
             to={'#'}
            >
             <Linkedin className='w-12 h-12 p-2 rounded-xl hover:dark:bg-gray-800 hover:bg-gray-200'  /> 
            </Link>
        </motion.div>
          
    
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 1.5,
            }}
        >
            <Link className='text-gray-700 cursor-pointer dark:text-white '
             to={'#'}
            >
             <Gmail className='w-12 h-12 p-2 rounded-xl hover:dark:bg-gray-800 hover:bg-gray-200'  /> 
            </Link>
              
        </motion.div> 
              
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 1.5,
            }}
            >
            <Link className='text-gray-700 cursor-pointer dark:text-white '
             to={'#'}
            >
             <Github className='w-12 h-12 p-2 rounded-xl hover:dark:bg-gray-800 hover:bg-gray-200'  /> 
            </Link>
        </motion.div>  

        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 1.5,
            }}
            >
            <Link className='text-gray-700 cursor-pointer dark:text-white '
             to={'#'}
            >
             <Whatsapp className='w-12 h-12 p-2 rounded-xl hover:dark:bg-gray-800 hover:bg-gray-200'  /> 
            </Link>
        </motion.div>   
        
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 1.5,
            }}
            >
            <Link className='text-gray-700 cursor-pointer dark:text-white '
             to={"#"}
            >
             <Twitter className='w-12 h-12 p-2 rounded-xl hover:dark:bg-gray-800 hover:bg-gray-200'  /> 
            </Link>
        </motion.div>  
 
    </div>
  
  )
}

export default ContactMeSocialNetworks
