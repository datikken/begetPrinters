import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CartContent from "../components/cart/cart"
import "../styles/scss/main.scss"

const Cart = () => (
  <Layout>
    <SEO title="Cart" />

    <CartContent />

  </Layout>
)

export default Cart