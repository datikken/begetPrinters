import React from "react"

export default function OwlCard() {
  return (
    <div className="owl-item">
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
            <div className="carousel_card-wrapper_item-image">
              <img src={"/unnecessary/owl-swiper.svg"} alt="cart" />
            </div>
          </div>

          <div className="carousel_card-wrapper_item">
            <div className="carousel_card-wrapper_item-buttons">
              <div className="carousel_card-wrapper_item-buttons_price">
                <span>360</span>
                <img
                  className="carousel_card-wrapper_item-buttons_price-currency"
                  src={"/menu/rub.svg"}
                  alt="rub"
                />
              </div>
              <div className="carousel_card-wrapper_item-buttons_cart">
                <img
                  className="carousel_card-wrapper_item-buttons_cart-item"
                  src={"/icons/cart.svg"}
                  alt="cart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}