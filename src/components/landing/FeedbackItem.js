import React from 'react'

export default function FeedbackItem({image, type, name, desc}) {
    return (
        <div className="feed_item">
            <div className="feed_item-wrap">
                <div className="feed_item-wrap_item">
                    <div className="feed_item-wrap_item-icon">
                        <img src={image} alt="Icon"/>
                    </div>
                    <div className="feed_item-wrap_item-heading">
                        <span className="feed_item-wrap_item-heading_item">{type}</span>
                        <span className="feed_item-wrap_item-heading_item">{name}</span>
                    </div>
                </div>
                <div className="feed_item-wrap_item">
                    <div className="feed_item-wrap_item-desc">
                        <div className="feed_item-wrap_item-desc_item">
                            <span>{desc}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
