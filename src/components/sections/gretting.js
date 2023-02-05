import React from "react"
import { ReactJs } from '@icons-pack/react-simple-icons';

const Gretting = () => {
  return (
    <section className="h-auto space-y-20 font-mono text-xl font-black text-center text-black bg-white dark:bg-black dark:text-white " id="greeting">
      greeting
      <ReactJs className="w-32 h-32 text-black dark:text-white"/>
      <p className="px-10 font-mono text-3xl font-black text-black dark:text-white">I'm Jonas Morales</p>
      <p className="px-10 font-mono text-xl font-black text-black dark:text-white">I build Progresive Web application using PERN, MERN and MEAN stack Also I build mobile applications using React Native and Ionic</p>
    </section>
  )
}

export default Gretting
