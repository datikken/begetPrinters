import React from "react"

export default function CartTableHeading({ text }) {
    return (
        <div className="cart_wrap-item_inner-table_row">
            <div className="cart_wrap-item_inner-table_row-col">
                <span className="cart_wrap-item_inner-table_row-col-heading">Картридж</span>
            </div>
            <div className="cart_wrap-item_inner-table_row-col">
                <span className="cart_wrap-item_inner-table_row-col-heading">Цена (шт)</span>
            </div>
            <div className="cart_wrap-item_inner-table_row-col">
                <span className="cart_wrap-item_inner-table_row-col-heading">Количество</span>
            </div>
            <div className="cart_wrap-item_inner-table_row-col">
                <span className="cart_wrap-item_inner-table_row-col-heading">Общая сумма</span>
            </div>
        </div>
    )
}