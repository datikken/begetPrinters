import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InformationContent from "../components/information/information"

const Information = () => {

  return (
    <Layout>
      <SEO title="Information"/>

      <div className="breadcrumbs">
        <ul className="breadcrumbs_list">
          <li className="breadcrumbs_list--item"><a className="breadcrumbs_list--item_text" href="/">Главная</a></li>
          <li className="breadcrumbs_list--item"><a className="breadcrumbs_list--item_text" href="/catalog">Каталог</a></li>
          <li className="breadcrumbs_list--item"><span className="breadcrumbs_list--item_text">Картриджы</span></li>
          <li className="breadcrumbs_list--item"><span className="breadcrumbs_list--item_text">Т2</span></li>
        </ul>
      </div>

      <InformationContent/>
    </Layout>
  )
}

export default Information
