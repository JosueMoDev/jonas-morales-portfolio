
import React from "react"
import ContactMeSocialNetworks from "../ContactMeSocialNetworks"

const Contact = ({ contentfulContactMe }) => {
  const {  allContentfulSocialNetwork  } = contentfulContactMe
  // const { greeting, greetingPicture, name } = allContentfulGreeting.edges[0].node
 
  return (
    <section className="w-full h-auto " id="contact">
    {/* Wrapper */}
      <div  className=" text-black dark:text-white m-[auto]  font-mono p-[1.25rem] md:p-[2.5rem] w-full h-auto min-h-[100vh]   flex flex-col justify-start mb-[1rem]">
        <div className="flex-col xl:mt-[4rem] mt-[3rem] md:space-x-10">
          <p className="text-3xl md:text-4xl lg:text-6xl">Would you like contact me ?</p>
          <p className="text-lg"> if you want to discouse some ideas or projectes conctame throme my social networks or mail me</p>
          <div className="flex flex-row items-center md:items-start md:flex-col justify-start mt-[3rem] mb-[2rem] ">
            <div  className="flex flex-wrap w-full md:flex-nowrap">
              <img 
                className="w-full max-w-[ 8.75rem] bg-red-700 h-30 rounded-full mr-[4rem] mb-0 mb:mb-[2rem]"
              />
              <div className="w-full text-xl">
                <strong>Jonas Josue Morales Echeverria</strong>
                <br />
                {/* <a href={`mailto:${frontmatter.email}`}>
                  <Underlining highlight>{frontmatter.email}</Underlining>
                </a> */}
              </div>
            </div>
            
          </div>
          <div className="w-full  grid justify-start  mt-[1rem] space-y-5">
            <ContactMeSocialNetworks socialNetworks={ allContentfulSocialNetwork } />
          </div>
        </div>
      </div>
    </section>
  )
}
  
export default Contact