import React from "react"
import ViwedItem from "./viwed_item"

const Viewed = () => (
  <div className="viewed">
    <div className="viewed_wrapper">
      <div className="viewed_wrapper-item_heading">
        <span className="viewed_wrapper-item_heading-text">Просмотренные товары</span>
      </div>

      <ViwedItem/>
      <ViwedItem/>
      <ViwedItem/>
      <ViwedItem/>
      <ViwedItem/>
      
    </div>
  </div>
)

export default Viewed
