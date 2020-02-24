import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductDetails from "../components/products/product_details"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import { Link } from "gatsby"
import "../styles/scss/main.scss"

const Product = () => (
  <Layout>
    <SEO title="Product" />
    <div className="crumbs_wrap">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/" onClick={() => {}}>
          Главная
        </Link>
        <Typography color="textPrimary">Каталог</Typography>
      </Breadcrumbs>
    </div>

    <div class="columns catalog_columns">
      <ProductDetails />
    </div>
  </Layout>
)

export default Product
