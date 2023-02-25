import React from 'react'
import AppProvider from "../context/AppProvider"

import Layout from '../components/Layout';



import Contact from '../components/sections/Contact';
import AboutMe from '../components/sections/AboutMe';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';


const IndexPage = ({ data }) => {
  const {  allContentfulContactMe, allContentfulMain, allContentfulGreeting, allContentfulSkills, allContentfulSocialNetwork } = data;
  
  return (
    <AppProvider>
      <Layout contentfulMain={allContentfulMain}>
        <Seo logos={allContentfulMain.edges[0].node.logos}/>
        <AboutMe contentfulGreeting={{ allContentfulGreeting, allContentfulSocialNetwork }} />
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