import React from 'react'

export default function Like({amount}) {
    return (
        <div className="like">
            <div className="like_item">
                <div className="like_item-icon">
                    <img src={'/icons/LikeGray.svg'} alt="like" />
                </div>
                <div className="like_item-amout">{amount}</div>
            </div>
        </div>
    )
}
