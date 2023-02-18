
import React from "react"
import { motion } from "framer-motion"
import ContactMeSocialNetworks from "../ContactMeSocialNetworks"
import { Icon } from "@mui/material"
import { Gmail } from "@icons-pack/react-simple-icons"
import { Phone } from '@mui/icons-material';

const Contact = ({ contentfulContactMe }) => {
  const {  allContentfulSocialNetwork, allContentfulContactMe  } = contentfulContactMe
  const { fullname, job, mail, contacmePhoto, contactmedescription } = allContentfulContactMe.edges[0].node
  
  return (
    <section className="w-full h-auto " id="contact">
    {/* Wrapper */}
      <div  className=" text-black dark:text-white m-[auto]  font-mono p-[1.25rem] md:p-[2.5rem] w-full h-auto min-h-[100vh]   flex flex-col justify-start mb-[1rem]">
        <div className="flex-col xl:mt-[4rem] mt-[3rem] md:space-x-10">
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-6xl">Would you like contact me ?</p>
          <p className="text-xl lg:text-2xl"> {contactmedescription} </p>
          <div className="flex flex-row items-center md:items-start lg:flex-col justify-start mt-[3rem] mb-[2rem] ">
            <div  className="flex flex-wrap w-full lg:flex-nowrap">
              <img 
                className=" lg:w-[30%] sm:h-[30%] w-[100%] max-h-[100%] max-w-[ 8.75rem]  h-30 rounded-xl mr-[4rem] mb-0 mb:mb-[2rem]"
                src={`https://${contacmePhoto.file.url}`}
                alt='me profile'
              />
            
              <div className="flex-col items-center justify-center w-full text-xl ">
                <div className="flex items-center justify-center w-full px-5">
                  <div className="flex-row justify-start w-full">
                    <p className="text-xl font-semibold md:text-2xl lg:text-3xl">{fullname}</p>
                    <p className="font-thin text-basic">{job}👨🏻‍💻</p>
                      
                  
                    <div class="grid grid-cols-1 py-4  divide-y-2 w-full  justify-center divide-black mb-[1rem] dark:divide-white divide-solid">
                      <div className="w-full mb-2 space-y-8 text-center">Mail me</div>
                      
                      <div className="flex items-center justify-center pt-[2rem] w-full"> 
                        <motion.a 
                          size="small"
                          className=" flex justify-center  space-x-2 items-center m-2 w-fit mb-[1.5rem] p-2 px-4 text-xl  text-white  bg-black rounded-full cursor-pointer dark:text-black dark:bg-white"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          href={`mailto:${mail}`}
                          download
                          target="_blank"
                        >
                        <div className="flex items-center justify-center w-full h-full align-middle">
                          <div className='flex items-center justify-center space-x-2 align-middle rounded-full'>
                            <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                              <Icon className="text-[#EA4335]" component={Gmail}  sx={{ width:'100%', height:'100%'}}  />
                            </div>
                            <p className="flex items-center justify-center text-sm md:text-lg lg:text-xl xl:text-2xl "><pre className="px-2 ">{ mail }</pre></p>
                          </div>
                        </div>
                      </motion.a>    
                      </div>
                    </div>
                    <div class="grid grid-cols-1 py-4  divide-y-2 w-full  justify-center divide-black mb-[1rem] dark:divide-white divide-solid">
                      <div className="mb-2 space-y-8 text-center">Call me</div>
                      
                      <div className="flex items-center justify-center pt-[2rem] w-full"> 
                        <motion.a 
                          size="small"
                          className=" flex justify-center  space-x-2 items-center m-2 w-fit mb-[1.5rem] p-2 px-4 text-xl  text-white  bg-black rounded-full cursor-pointer dark:text-black dark:bg-white"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          href={`tel:+503 6043-6759`}
                        >
                        <div className="flex items-center justify-center w-full h-full align-middle">
                          <div className='flex items-center justify-center space-x-2 align-middle rounded-full'>
                            <div className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]  flex justify-center items-center ">
                              <Icon className="text-[#5bb15c]" component={Phone}  sx={{ width:'100%', height:'100%'}}  />
                            </div>
                            <p className="flex items-center justify-center text-sm md:text-lg lg:text-xl xl:text-2xl "><pre className="px-2 ">+503 6043-6759</pre></p>
                          </div>
                        </div>
                      </motion.a>    
                      </div>
                    </div>
              
                    <div class="grid grid-cols-1 py-4  divide-y-2 w-full  justify-center divide-black mb-[1rem] dark:divide-white divide-solid">
                      <div className="mb-2 space-y-8 text-center">or</div>
                      
                      <div className="w-full  grid justify-center   pt-[2rem] space-y-5">
                        <p className="text-xl font-bold text-center md:text-2xl ">Contact me here 👇🏻</p>
                        <ContactMeSocialNetworks socialNetworks={ allContentfulSocialNetwork } />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
  
export default Contact