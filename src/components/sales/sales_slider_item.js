import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SalesSliderItemNum from './sales_slide_item_num'
import TextBtn from '../btn/text_btn'

export default function SalesSliderItem({ title }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "ostatki/ostatkiBackground.png" }) {
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
  `)
  return (
    <BackgroundImage
      Tag="div"
      className={"sales_slider-card"}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={`#e2e2e2`}
    >
      <div className="sales_slider-card_prod">
        <div className="sales_slider-card_prod-item">
          <img src={"/sales/salesProd.svg"} alt="product" />
        </div>
      </div>

      <div className="sales_slider-card_items">
        <div className="sales_slider-card_items-wrap">
          <div className="sales_slider-card_items-wrap-heading">Картридж</div>
          <div className="sales_slider-card_items-wrap-title">{title}</div>
          <div className="sales_slider-card_items-wrap-desc">
            (Аналог HP CF280A)
          </div>

          <div className="sales_slider-card_items-wrap-nums">
           <SalesSliderItemNum num="0" />
           <SalesSliderItemNum num="0" />
           <SalesSliderItemNum num="9" />
           <SalesSliderItemNum num="9" />
          </div>

          <div className="mobile-hide">
            <TextBtn text={'успеть купить'} classVal={'sales_slider_btn'} />
          </div>

        </div>
      </div>
    </BackgroundImage>
  )
}
