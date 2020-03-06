import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InformationContent from "../components/information/information"
import "../styles/scss/main.scss"

const Information = () => {

  return (
    <Layout>
      <SEO title="Information"/>

      <InformationContent/>
      
    </Layout>
  )
}

export default Information
