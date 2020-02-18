import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyMap from "../components/map/map"
import ContactsContent from "../components/contacts/contacts_content"
import BlogContent from "../components/blog/blog_content"
import "../styles/scss/main.scss"

import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Link } from "gatsby"

const Blog = () => (
  <Layout>
    <SEO title="Blog" /> 
    <div className="crumbs_wrap">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={() => {}}>
            Главная
          </Link>
          <Typography color="textPrimary">Блог</Typography>
        </Breadcrumbs>
      </div>
    <BlogContent />

  </Layout>
)

export default Blog