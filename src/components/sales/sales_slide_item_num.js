import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

export default function SalesSliderItemNum({ num }) {
  const data = useStaticQuery(graphql`
    query SalesQuery {
      file(relativePath: { eq: "ostatki/numBackground.png" }) {
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
    <div className="sales_slider-card_items-wrap-nums_num">
      <BackgroundImage
        Tag="div"
        className={"sales_slider-card"}
        fluid={data.file.childImageSharp.fluid}
        backgroundColor={`#e2e2e2`}
      >
        <span className="sales_slider-card_items-wrap-nums_num-item">
          {num}
        </span>
      </BackgroundImage>
    </div>
  )
}
