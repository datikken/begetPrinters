import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function Feedback() {
    return (
        <div className="land_feed">
            <div className="land_feed-wrap">
                <div className="land_feed-wrap_item">
                    <div className="land_feed-wrap_item-heading">
                        <span className="land_feed-wrap_item-heading-item">
                            Отзывы
                        </span>
                    </div>
                </div>
                <div className="land_feed-wrap_item">
                    <FeedbackItem />
                </div>
            </div>
        </div>
    )
}
