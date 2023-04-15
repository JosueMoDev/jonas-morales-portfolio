import React from 'react'
import Helmet from "react-helmet"

const Seo = ({ logos } ) => {
  const  lang ="en"
  return (
      <Helmet
      htmlAttributes={{
        lang
      }}  
      >
        <meta charSet="utf-8" />
        <title>Jonas Morales</title>
        <link rel="icon" type="image/x-icon" href='logo.jpg' />
      
    </Helmet>
  )
}


export default Seo
