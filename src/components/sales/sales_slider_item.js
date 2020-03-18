import React from 'react'
import {useStaticQuery,  graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'


export default function SalesSliderItem({title}) {
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: {eq: "ostatki/ostatkiBackground.png"}) {
                id
                childImageSharp {
                    fluid {
                        aspectRatio
                        sizes
                        src
                        srcSet
                        base64
                    }
                }
            }
        }
    `);
    return (
          <BackgroundImage
            Tag="div"
            className={'sales_slider-card'}
            fluid={data.file.childImageSharp.fluid}
            backgroundColor={`#e2e2e2`}
        >

        <div className="sales_slider-card_prod">
            <div className="sales_slider-card_prod-item">
                <img src={"/sales/salesProd.svg"} alt="product" />
            </div>
        </div>

        <div className="sales_slider-card_items">

          <div className="sales_slider-card_items-heading">Картридж</div>
          <div className="sales_slider-card_items-title">{title}</div>
          <div className="sales_slider-card_items-desc">(Аналог HP CF280A)</div>

          <div className="sales_slider-card_items-nums">
              <div className="sales_slider-card_items-nums_num">
                <span className="sales_slider-card_items-nums_num-item">9</span>

                <img className="sales_slider-card_items-nums_num_back" src="/sales/numBack.svg" alt="num" />
                <img className="sales_slider-card_items-nums_num_decor" src="/sales/numDec.svg" className="sales_slider-card_items-nums_num-dec" alt="decor" />
              </div>

              <div className="sales_slider-card_items-nums_num">
                <span className="sales_slider-card_items-nums_num-item">9</span>

                <img className="sales_slider-card_items-nums_num_back" src="/sales/numBack.svg" alt="num" />
                <img className="sales_slider-card_items-nums_num_decor" src="/sales/numDec.svg" className="sales_slider-card_items-nums_num-dec" alt="decor" />
              </div>
     
              <div className="sales_slider-card_items-nums_num">
                <span className="sales_slider-card_items-nums_num-item">9</span>

                <img className="sales_slider-card_items-nums_num_back" src="/sales/numBack.svg" alt="num" />
                <img className="sales_slider-card_items-nums_num_decor" src="/sales/numDec.svg" className="sales_slider-card_items-nums_num-dec" alt="decor" />
              </div>

              <div className="sales_slider-card_items-nums_num">
                <span className="sales_slider-card_items-nums_num-item">9</span>

                <img className="sales_slider-card_items-nums_num_back" src="/sales/numBack.svg" alt="num" />
                <img className="sales_slider-card_items-nums_num_decor" src="/sales/numDec.svg" className="sales_slider-card_items-nums_num-dec" alt="decor" />
              </div>
          </div>
        </div>
      </BackgroundImage>

    )
}
