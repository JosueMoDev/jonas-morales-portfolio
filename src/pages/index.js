import React from 'react'
import AppProvider from "../context/AppProvider"

import Layout from '../components/Layout';



import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Gretting from '../components/sections/Gretting';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';


const IndexPage = () => {
  return (
    <AppProvider>
      <Layout>
          <Gretting />
          <About />
          <Skills />
          <Projects />
          <Contact />
      </Layout>
    </AppProvider>
  )
}
export default IndexPage;
