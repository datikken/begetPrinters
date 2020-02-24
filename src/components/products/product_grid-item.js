import React from 'react'

export default function ProductGridItem() {
    return (
        <div className="product">
                <a href="/catalog/id1">
                    <div className="product_wrapper">
                        <div className="product_wrapper-item">
                            <div className="product_wrapper-item_heading"><span className="product_wrapper-item_heading-item">IC-HLOR70A</span></div>
                            <div className="product_wrapper-item_amount"><span className="product_wrapper-item_amount-item">Много</span></div>
                        </div>
                        <div className="product_wrapper-item">
                            <div className="product_wrapper-item_image">
                                <img src={'/unnecessary/product1.png'} alt="product" />
                            </div>
                            <div className="product_wrapper-item_overlay">
                                <div className="product_wrapper-item_overlay_wrapper">
                                    <div className="product_wrapper-item_overlay_wrapper-item">
                                        <span className="product_wrapper-item_overlay_wrapper-item_text">быстрый просмотр</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product_wrapper-item">
                            <div className="product_wrapper-item_head"><span className="product_wrapper-item_price-item">IC-HLOR70A</span></div>
                            <div className="product_wrapper-item_price"><span className="product_wrapper-item_price-item">29900</span></div>
                            <div className="product_wrapper-item_btn"><span className="product_wrapper-item_price-item">Купить</span></div>
                            <div className="product_wrapper-item_cart"></div>
                        </div>
                    </div>
                </a>
            </div>  
    )
}
