import React from "react"

export default function ViwedItem() {
  return (
    <div className="viewed_wrapper-item">
      <div className="viewed_wrapper-item_image">
        <img src={"/viewed/viewed_product.png"} alt="" />
      </div>
      <div className="viewed_wrapper-item_text">
        <div className="viewed_wrapper-item_text-heading">
          <span>Тонер картридж</span>
          <br />
          <span className="viewed_wrapper-item_text-heading-item">tc 052 h</span>
        </div>
        <div className="viewed_wrapper-item_text-price">
          <span>759</span>
          <img src={"/icons/rub.svg"} alt="rub" />
        </div>
      </div>
    </div>
  )
}