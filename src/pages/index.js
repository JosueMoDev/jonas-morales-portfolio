import React from 'react'
import AppProvider from "../context/AppProvider"

import Layout from '../components/Layout';



import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Gretting from '../components/sections/Gretting';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import { graphql } from 'gatsby';


const IndexPage = ({ data }) => {
  const { allContentfulAboutMe, allContentfulContactMe, allContentfulMain, allContentfulGreeting, allContentfulSkills, allContentfulSocialNetwork } = data;
  
  return (
    <AppProvider>
      <Layout contentfulMain={allContentfulMain}>
        <Gretting contentfulGreeting={{ allContentfulGreeting, allContentfulSocialNetwork }} />
        <About contentfulAbout={ allContentfulAboutMe} />
        <Skills contenfulSkills={ allContentfulSkills} />
        <Projects />
        <Contact contentfulContactMe={{  allContentfulSocialNetwork, allContentfulContactMe }}/>
      </Layout>
    </AppProvider>
  )
}
export default IndexPage;
export const query = graphql` 
query MyQuery {
  allContentfulMain {
    edges {
      node {
        navigation {
          menu {
            name
            url
          }
        }
        animation {
          file {
            fileName
            url
          }
        }
        logos {
          file {
            fileName
            url
          }
        }
      }
    }
  }
  allContentfulGreeting {
    edges {
      node {
        name
        greeting
        greetingPicture {
          file {
            url
            fileName
          }
        }
      }
    }
  }
  allContentfulAboutMe {
    edges {
      node {
        aboutMePhoto {
          file {
            url
            fileName
          }
        }
        aboutText {
          aboutText
        }
        cvPdf {
          file {
            fileName
            url
          }
        }
      }
    }
  }
  allContentfulSkills {
    edges {
      node {
        skills {
          shownItems
          techs {
            icon
            name
          }
        }
      }
    }
  }

  allContentfulSocialNetwork {
    edges {
      node {
        socialnetworks {
          socialnetwoksdata {
            icon
            name
            url
          }
        }
      }
    }
  }

  allContentfulContactMe {
    edges {
      node {
        contactmedescription
        fullname
        job
        mail
        contacmePhoto {
          file {
            fileName
            url
          }
        }
      }
    }
  }

}
`