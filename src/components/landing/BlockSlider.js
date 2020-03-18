import React from 'react'
import CustomizedSlider from './BlockSliderSlide'

export default function Block({image, lie, truth, desc, footer, cartoon, sroki}) {
    return (
        <div className="land">
            <div className="land_block land_block-slider">
                <div className="land_block-item">
                    <div className="land_block-item_icon">
                        <img src={image} alt="Icon"/>
                    </div>
                </div>
                <div className="land_block-item">
                    <div className="land_block-item_text">
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

                    <div className="land_block-item_slider">
                        <div className="land_block-item_slider-item">
                            <CustomizedSlider/>
                        </div>
                        <div className="land_block-item_slider-item">
                            <div className="land_block-item_slider-item_old"></div>
                            <div className="land_block-item_slider-item_new"></div>
                        </div>
                        <div className="land_block-item_slider-item">
                            <div className="land_block-item_slider-item_priceOld">{sroki[0].node.cost}</div>
                            <div className="land_block-item_slider-item_priceNew">{sroki[1].node.cost}</div>
                        </div>
                        <div className="land_block-item_slider-item">
                            <div className="land_block-item_slider-item_benefit">
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}