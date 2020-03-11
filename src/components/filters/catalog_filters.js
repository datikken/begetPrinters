import React from "react"
import CatalogFiltersVariants from './catalog_filters_variants'
import Tip from "../tips/tip"

export default function CatalogFilters() {
  return (
    <div className="filters">
      <div className="filters_wrapper">
        <div className="filters_wrapper-item">
          <div className="filters_wrapper-item_text">Тип принтера</div>
          <img src={'/icons/arrow_right.svg'} alt="icon" />
          <Tip />
        </div>
          
        <CatalogFiltersVariants/>

        <div className="filters_wrapper-item">
          <div className="filters_wrapper-item_text">Бренд</div>
          <img src={'/icons/arrow_right.svg'} alt="icon" />
        </div>
        <div className="filters_wrapper-item">
          <div className="filters_wrapper-item_text">Модель</div>
          <img src={'/icons/arrow_right.svg'} alt="icon" />
        </div>
      </div>
    </div>
  )
}
