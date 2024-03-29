import React from "react";
import AppProvider from "../context/AppProvider";
import Layout from "../components/Layout";
import Contact from "../components/sections/Contact";
import AboutMe from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import {
  getAllAboutMeContentfulData,
  getAllMainContentfulData,
  getAllProjectsContentfulData,
  getAllSkillsContentfulData,
} from "../helpers/getData";

const IndexPage = ({ data }) => {
  const {
    allContentfulAboutMe,
    allContentfulMain,
    allContentfulProjects,
    allContentfulSkills,
  } = data;
  const {
    aboutMeData,
    localEn,
    localEs,
    stackData,
    socialNetworks,
    contactMe,
  } = getAllAboutMeContentfulData(allContentfulAboutMe);
  const { logos, navigation, buttonsLabelMainEn, buttonsLabelMainEs } =
    getAllMainContentfulData(allContentfulMain);
  const allProjectsData = getAllProjectsContentfulData(allContentfulProjects);
  const skillsData = getAllSkillsContentfulData(allContentfulSkills);

  return (
    <AppProvider>
      <Layout
        contentfulMain={{
          navigation,
          buttonsLabelMainEn,
          buttonsLabelMainEs,
          logos,
        }}
      >
        <Seo logos={logos} />
        <AboutMe
          contentfulAboutMe={{ aboutMeData, socialNetworks, localEn, localEs }}
        />
        <Skills contenfulSkills={{ stackData, skillsData }} />
        <Projects contenfulProjects={allProjectsData} />
        <Contact contentfulContactMe={{ contactMe, socialNetworks }} />
      </Layout>
    </AppProvider>
  );
};
export default IndexPage;
export const query = graphql`
  query MyQuery {
    allContentfulAboutMe {
      edges {
        node {
          name
          shortName
          aboutMeAssets {
            buttonsLabels {
              descargar
              download
            }
            cvEn
            cvEs
            email
            profession
            telephone
          }
          aboutMeDescriptionEn {
            aboutMeDescriptionEn
          }
          aboutMeDescriptionEs {
            aboutMeDescriptionEs
          }
          aboutMePhoto {
            gatsbyImageData(width: 2684, jpegProgressive: true, height: 3245)
          }
          myStack {
            techs {
              icon
              name
            }
            shownItems
          }
          socialNetworks {
            socialnetwoksdata {
              icon
              name
              url
            }
          }
          contactMePhoto {
            gatsbyImageData(width: 3024, jpegProgressive: true, height: 2874)
          }
        }
      }
    }
    allContentfulMain {
      edges {
        node {
          logos {
            gatsbyImageData(width: 1600, jpegProgressive: true, height: 1600)
          }
          navigation {
            menuEn {
              name
              url
            }
            menuEs {
              name
              url
            }
            buttonsLabel {
              cerrar
              close
              themeDarkEn
              themeDarkEs
              themeLightEn
              themeLightEs
            }
          }
        }
      }
    }
    allContentfulProjects {
      edges {
        node {
          assets {
            deployDemo
            repositoryGithub
            buttonsLabel {
              repositoryEn
              repositoryEs
            }
          }
          photos {
            gatsbyImageData(width: 1440, height: 781, jpegProgressive: true)
          }
          techs {
            techs {
              icon
              name
            }
          }
          name
          descriptionEn {
            descriptionEn
          }
          descriptionEs {
            descriptionEs
          }
        }
      }
    }

    allContentfulSkills {
      edges {
        node {
          title
          titulo
          descripcion {
            descripcion
          }
          description {
            description
          }
          banner {
            gatsbyImageData(width: 3168, height: 792, jpegProgressive: true)
          }
        }
      }
    }
  }
`;
