import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Lenta from '../components/landing/Lenta'
import Video from '../components/landing/Video'

export default function Landing() {
    return (
      <Layout>
        <SEO title="Landing"/>

        <Lenta />
        <Video />
        
      </Layout>
    )
}
