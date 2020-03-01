import React from "react"

export default function CartItem({ text }) {
    return (

        <div className="cart_wrap-item_inner-table_row">
            <div className="cart_wrap-item_inner-table_row-col">
                <div className="cart_wrap-item_inner-table_row_heading desktop-hide">
                    <span>Картридж</span>
                </div>
                <div className="cart_wrap-item_inner-table_row-col_img">
                    <img src={"/unnecessary/product_cart.svg"} alt="product"/>
                </div>
                <div className="cart_wrap-item_inner-table_row-col_desc">

                    <div className="cart_wrap-item_inner-table_row-col_desc-head">
                        <span>Чёрный тонер-картридж</span>
                    </div>
                    <div className="cart_wrap-item_inner-table_row-col_desc-info">
                        <span>TC-H85A</span>
                    </div>
                    <div className="cart_wrap-item_inner-table_row-col_desc-about">
                        <span>для принтеров и МФУ:</span>
                    </div>
                </div>
            </div>
            <div className="cart_wrap-item_inner-table_row-col">
                <div className="cart_wrap-item_inner-table_row-col_price">
                    <span className="desktop-hide">Цена (шт)</span>
                    <span className="cart_wrap-item_inner-table_row-col_price-val-item">1500</span>
                    <img src={"/icons/rub.svg"} alt="currency"/>
                </div>
            </div>
            <div className="cart_wrap-item_inner-table_row-col">
                <span className="desktop-hide">Количество (шт)</span>
                <div className="cart_wrap-item_inner-table_row-col_btns">
                    <span className="cart_wrap-item_inner-table_row-col_btns-btn">
                        <span>3</span>
                        <span className="cart_wrap-item_inner-table_row-col_btns-btn-items">
                            <span>+</span>
                            <span>-</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="cart_wrap-item_inner-table_row-col">
                <span className="desktop-hide">Общая сумма товаров (шт)</span>
                <div className="cart_wrap-item_inner-table_row-col_total">
                    <span>4500</span>
                </div>
            </div>
            <div className="cart_wrap-item_inner-table_row-col desktop-hide">
                <span className="desktop-hide">Удалить товар</span>
                <div className="cart_wrap-item_inner-table_row-col_delete"></div>
            </div>
        </div>
    )
}