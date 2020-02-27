import React from "react"
import CatalogFiltersVariants from './catalog_filters_variants'
import Tip from "../tips/tip"

export default function CatalogFilters() {

  return (
    <div class="filters">
      <div class="filters_wrapper">
        <div class="filters_wrapper-item">
          <div class="filters_wrapper-item_text">Тип принтера</div>
          <img src={'/icons/arrow_right.svg'} alt="icon" />
          <Tip />
        </div>
          
        <CatalogFiltersVariants/>

        <div class="filters_wrapper-item">
          <div class="filters_wrapper-item_text">Бренд</div>
          <img src={'/icons/arrow_right.svg'} alt="icon" />
        </div>
        <div class="filters_wrapper-item">
          <div class="filters_wrapper-item_text">Модель</div>
          <img src={'/icons/arrow_right.svg'} alt="icon" />
        </div>
      </div>
    </div>
  )
}
