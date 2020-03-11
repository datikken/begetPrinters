import React from "react"

export default function BuyBtn({ text }) {
    return (
        <div className="product_wrapper-item_btn">
            <div className="product_wrapper-item_price-item">{text}</div>
            <img src={'/icons/cart.svg'} alt="cart"/>
        </div>
    )
}