import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lenta from "../components/landing/Lenta"
import Video from "../components/landing/Video"
import Heading from "../components/landing/Heading"
import Block from "../components/landing/Block"
import Feedback from "../components/landing/Feedback"
import Helmet from "react-helmet"

const Landing = () => {
  return (
    <Layout>
      <SEO title="Landing" />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js" />
      </Helmet>

      <Lenta />
      <Video />
      <Heading />
      <Block />
      <Feedback />

    </Layout>
  )
}

export default Landing
