import React from 'react'
import AppProvider from "../context/AppProvider"

import Layout from '../components/Layout';



import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Gretting from '../components/sections/Gretting';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Navbar from '../components/Navbar';


const IndexPage = () => {
  return (
    <AppProvider>
      <div className='md:mx-10 '>
        <div className='sticky top-0 z-110'>
          <Navbar/>
        </div>
        <Layout>
            <Gretting />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Layout>
      </div>
    </AppProvider>
  )
}
export default IndexPage;
