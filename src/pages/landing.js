import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Lenta from '../components/landing/Lenta'
import Video from '../components/landing/Video'
import Heading from '../components/landing/Heading'
import Block from '../components/landing/Block'
import Feedback from "../components/landing/Feedback"

export default function Landing() {
    return (
      <Layout>
        <SEO title="Landing"/>

        <Lenta />
        <Video />
        <Heading />
        <Block />
        <Feedback />
        
      </Layout>
    )
}
