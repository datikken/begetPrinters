import React from "react"

export default function CartProcess({ text }) {
    return (
        <div className="cart_wrap-crumb">

            <div className="cart_wrap-crumb-item active">
                <span>Ваша корзина</span>
            </div>
            <div className="cart_wrap-crumb-item">
                <span>Авторизация</span>
            </div>
            <div className="cart_wrap-crumb-item">
                <span>Доставка</span>
            </div>
            <div className="cart_wrap-crumb-item">
                <span>Оплата</span>
            </div>

        </div>
    )
}