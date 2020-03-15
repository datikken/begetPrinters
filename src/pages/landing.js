import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Lenta from '../components/landing/Lenta'
import Video from '../components/landing/Video'
import Heading from '../components/landing/Heading'

export default function Landing() {
    return (
      <Layout>
        <SEO title="Landing"/>

        <Lenta />
        <Video />
        <Heading />
        
      </Layout>
    )
}
