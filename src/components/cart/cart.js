import React from "react"
import CartProcess from "./cart_process"
import CartItem from "./cart_item"
import CartTotal from "./cart_total"
import CartTableHeading from "./cart_table_heading"
import CartHeading from "./cart_heading"

export default function CartContent({ text }) {
    return (
        <div className="cart">
            <div className="cart_wrap">

                <CartProcess />

                <div className="cart_wrap-item">

                    <CartTableHeading />

                    <div className="cart_wrap-item_inner">

                        <div className="cart_wrap-item_inner-table">

                            <CartItem />
                            <CartItem />

                        </div>
                    </div>
                </div>

                <CartTotal />

            </div>
        </div>
    )
}