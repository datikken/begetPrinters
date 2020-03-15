import React from 'react'

export default function FeedbackItem() {
    return (
        <div className="feed_item">
            <div className="feed_item-wrap">
                <div className="feed_item-wrap_item">
                    <div className="feed_item-wrap_item-icon">
                        <img src={'/landing/partner/home.svg'} alt="Home"/>
                    </div>
                    <div className="feed_item-wrap_item-heading">
                        <span className="feed_item-wrap_item-heading_item">Банк</span>
                        <span className="feed_item-wrap_item-heading_item">Хоум Кредит</span>
                    </div>
                </div>
                <div className="feed_item-wrap_item">
                    <div className="feed_item-wrap_item-desc">
                        <div className="feed_item-wrap_item-desc_item">
                            <span>“Дешевле, чем оригинальные комплектующие Случайно обнаружил в интернете...”</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
