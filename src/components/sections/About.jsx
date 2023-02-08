import React from "react"
import {siteDescription, name} from "../../../config"

const About = () => {
  
    return (
      <div className="flex w-full h-auto font-mono text-xl font-black text-center text-black bg-orange-500 dark:text-white " id="about">
        <div className="grid w-full px-10 m-2 bg-red-800 pt-36 justify-self-center">
          {name}
          {siteDescription}
        </div>        
      </div>
    )
  }
  
  export default About