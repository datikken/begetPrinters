import React, { useState } from "react"
import Tip from "../tips/tip"
import CatalogFiltersVariants from "./catalog_filters_variants"

export default function CatalogFilterItem({ title, values, tip }) {
  const [show, setHide] = useState(false)

  return (
    <>
      <div className="filters_wrapper-item" onClick={() => setHide(!show)}>
        <div className="filters_wrapper-item_text">{title}</div>
        <img src={"/icons/arrow_right.svg"} alt="icon" />
        {tip && (<Tip/>)}
      </div>

      {show && <CatalogFiltersVariants values={values} />}
    </>
  )
}
