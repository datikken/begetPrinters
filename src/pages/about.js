import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMission from "../components/about/about"
import AboutHero from "../components/about/about_hero"
import AboutNavigator from "../components/about/about_navigator"
import "../styles/scss/main.scss"

const About = () => (
  <Layout>
    <SEO title="About" />

      <AboutMission />

      <div className="mobile_hide">
          <AboutHero/>
      </div>

      <AboutNavigator />

  </Layout>
)

export default About