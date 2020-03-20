import React from 'react'
import CustomizedSlider from './BlockSliderSlide'

export default function Block({image, lie, truth, desc, footer, data}) {
    const reversed = data.reverse();

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

                            <div className="land_block-item_slider-item_label">
                                <span className="land_block-item_slider-item_label-min">1 год</span>
                                <span className="land_block-item_slider-item_label-max">10 лет</span>
                            </div>

                            <CustomizedSlider/>

                        </div>

                        <div className="land_block-item_slider-item">
                            <div className="land_block-item_slider-item_benefit">


                                <div className="land_block-item_slider-item_benefit-item">
                                    {
                                        reversed.map((el) => (
                                            <div className="land_block-item_slider-item_benefit-item_card">
                                                <div className="land_block-item_slider-item_benefit-item_card-image">
                                                    <img src={el.node.image.file.url} alt="image" />
                                                </div>
                                                <div className="land_block-item_slider-item_benefit-item_card-price">
                                                    <div className="land_block-item_slider-item_benefit-item_card-price-item">
                                                        <span>{el.node.price}</span>
                                                        <img src={'/icons/rub.svg'} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>


                            </div>
                        </div>

                        <div className="land_block-item_slider-item">
                            <div className="land_block-item_slider-item_totalbenefit">
                                <div className="land_block-item_slider-item_totalbenefit-heading">
                                    <span>Экономия</span>
                                </div>
                                <div className="land_block-item_slider-item_totalbenefit-text">
                                    <div className="land_block-item_slider-item_totalbenefit-text_item">
                                        <span>50000</span>
                                        <img src={'/icons/rub.svg'} alt="currency" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}