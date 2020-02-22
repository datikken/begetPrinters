import React from 'react'

export default function Comments({amount}) {
    return (
        <div className="commentsIcon">
            <div className="commentsIcon_item">
                <div className="commentsIcon_item-icon">
                    <img src={'/icons/CommentsGray.svg'} alt="comments" />
                </div>
                <div className="commentsIcon_item-amout">{amount}</div>
            </div>
        </div>
    )
}
