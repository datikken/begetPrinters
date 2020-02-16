import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/scss/main.scss"
import { graphql } from "gatsby"
import SwiperImage from "../components/swiper/swiperImage"
import News from "../components/news/news"
import Banner from "../components/banner/banner"
import Viewed from "../components/viewed/viewed"
import Helmet from "react-helmet"
import Swiper from "react-id-swiper"
import Sales from "../components/sales/sales"
import SalesSlider from "../components/sales/sales_slider"
import SalesEco from "../components/sales/sales_eco"
import SalesBest from "../components/sales/sales_best"

const IndexPage = ({ data: { allContentfulSwiper } }) => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }

  return (
    <Layout>
      <SEO title="Home"/>

      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600&display=swap" rel="stylesheet"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"/>
      </Helmet>

      <Swiper {...params}>
        {allContentfulSwiper.edges.map(({ node }) => (
          <SwiperImage
            key={node.id}
            node={{ ...node, url: `${node.image.file.url}` }}
          />
        ))}
        <div style={{ background: "red" }}>Slide #5</div>
        <div style={{ background: "yellow" }}>Slide #4</div>
      </Swiper>

      <div className="columns desktop-layout">
        <div className="left_column">
          <News/>
          <Banner/>
          <Viewed/>
        </div>
        <div className="main_column">

          <Sales/>
          <SalesSlider/>
          <SalesEco/>
          <SalesBest/>

        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
    {
        allContentfulSwiper {
            edges {
                node {
                    image {
                        file {
                            url
                        }
                    }
                    title
                }
            }
        }
    }
`

export default IndexPage