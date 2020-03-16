import React from 'react'

export default function Block({image, lie, truth, desc, footer, cartoon}) {
    return (
        <div className="land">
            <div className="land_block">
                <div className="land_block-item">
                    <div className="land_block-item_icon">
                        <img src={image} alt="Icon"/>
                    </div>
                </div>
                <div className="land_block-item">
                    <div className="land_block-item_text">
                        <div className="land_block-item_text-false">
                            <span className="land_block-item_text-false_item">{lie}</span>
                        </div>
                        <div className="land_block-item_text-heading">
                            <span className="land_block-item_text-heading_item">{truth}</span>
                        </div>
                        <div className="land_block-item_text-text">
                            <span className="land_block-item_text-text_item">{desc}</span>
                            <span className="land_block-item_text-text_item">{footer}</span>
                        </div>
                    </div>
                </div>

                <div className="land_block-item">
                   <h1>Slider</h1>
                </div>
            </div>
        </div>
    )
}