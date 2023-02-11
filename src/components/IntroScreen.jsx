import React from "react"
import useUi from "../hooks/useUI"

const IntroScreen = ({ main_data }) => {

  const animations = main_data.map(({ animation }) => ({
    light: { ...animation[0].file },
    dark:{...animation[1].file}
  }))
 const [animation]= animations

  const { theme } = useUi();
  return (
    <div
  
      className="flex fixed top-0 left-[0%] z-[900] justify-center w-full h-full  p-10 overflow-hidden items-center">  
      <img className="relative flex justify-center items-center w-auto h-[16rem] md:h-[16rem]"  src={`https:${(theme==='dark')?animation.light.url:animation.dark.url}`} alt="Logo" />    
    </div>
  )
}

export default IntroScreen