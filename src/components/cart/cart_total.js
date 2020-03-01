import React from "react"

export default function CartTotal({ text }) {
    return (
        <div className="cart_wrap-item_inner-total">

            <div className="cart_wrap-item_inner-total_inner">
                <span className="cart_wrap-item_inner-total_inner-item">Общая сумма</span>
                <span className="cart_wrap-item_inner-total_inner-item">22 500</span>
            </div>
            <div className="cart_wrap-item_inner-total_button">
                <span className="cart_wrap-item_inner-total_button-item">оформить заказ</span>
            </div>

        </div>
    )
}