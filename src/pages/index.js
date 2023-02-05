import React from 'react'
import Layout from '../components/Layout';

import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Gretting from '../components/sections/Gretting';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';

import AppProvider from "../context/AppProvider"

const IndexPage = () => {
  return (
    <AppProvider>
      <Layout>
        <section>
          <About />
          <Gretting />
          <Contact />
          <Skills />
          <Projects />
        </section>
     </Layout>
    </AppProvider>
  )
}
export default IndexPage;
