import React from "react"

export default function OwlCard() {
  return (
    <div className="owl-item cloned active">
      <div className="carousel_card">
        <div className="carousel_card-wrapper">
          <div className="carousel_card-wrapper_item">
            <span className="carousel_card-wrapper_item-name">Картридж</span>
          </div>
          <div className="carousel_card-wrapper_item">
            <span className="carousel_card-wrapper_item-heading">
              Название картриджа
            </span>
          </div>

          <div className="carousel_card-wrapper_item">
            <div className="carousel_card-wrapper_item-image"></div>
          </div>

          <div className="carousel_card-wrapper_item">
            <div className="carousel_card-wrapper_item-buttons">
              <div className="carousel_card-wrapper_item-buttons_price">
                <span>360</span>
              </div>
              <div className="carousel_card-wrapper_item-buttons_cart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
