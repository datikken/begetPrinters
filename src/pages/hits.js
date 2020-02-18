import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyMap from "../components/map/map"
import ContactsContent from "../components/contacts/contacts_content"
import "../styles/scss/main.scss"
import HitsHero from "../components/hits/hits_hero"


const Hits = () => (
  <Layout>
    <SEO title="Hits" />
    <HitsHero />

  </Layout>
)

export default Hits