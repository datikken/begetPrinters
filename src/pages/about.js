import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMission from "../components/about/about"
import AboutNavigator from "../components/about/about_navigator"
import "../styles/scss/main.scss"

const About = () => (
  <Layout>
    <SEO title="About" />

      <AboutMission />
      <AboutNavigator />

  </Layout>
)

export default About