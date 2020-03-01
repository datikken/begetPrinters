/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import Menu from "./menu/menu"
import Footer from "./footer/footer"
import Payments from "./footer/payments"
import Subscriptions from "./subscription/subscription"

const Layout = ({ children }) => {
    useEffect(() => {
        document.querySelector("body").classList.toggle('overflow');
    });

  return (
    <>
      <Header siteTitle="test" />
      <Menu/>
      <main>{children}</main>
      
      <Subscriptions/>
      <Footer/>
      <Payments/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
