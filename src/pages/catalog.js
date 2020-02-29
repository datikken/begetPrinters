import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import {Link} from "gatsby"
import "../styles/scss/main.scss"
import CatalogBanner from "../components/banner/catalog_banner"
import CatalogFilters from "../components/filters/catalog_filters"
import Viewed from "../components/viewed/viewed"
import CatalogFiltersMob from "../components/filters/catalog_filters_mob"
import ProductsGrid from "../components/products/products_grid"

const Catalog = () => (

  <Layout>
    <SEO title="Catalog" />

    <div className="crumbs_wrap mobile-hide">
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
        <div class="left_column mobile-hide">

          <CatalogFilters/>
          <CatalogBanner/>

          <div class="mobile-hide">
            <Viewed />
          </div>
        </div> 

        <div class="right_column">
            <CatalogFiltersMob/>

            <div class="products_grid">
                <ProductsGrid/>
            </div>
        </div>
      </div>

  </Layout>
)

export default Catalog
