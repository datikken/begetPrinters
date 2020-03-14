import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/scss/main.scss"
import ErrorPage from '../components/404/ErrorPage'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorPage />
  </Layout>
)

export default NotFoundPage
