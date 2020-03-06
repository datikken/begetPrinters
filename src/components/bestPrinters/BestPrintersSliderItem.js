import React from 'react'
import TextBtn from '../btn/text_btn'

export default function BestPrintersSliderItem({title}) {
    return (
        <div className="bestPrinters">
            <div className="bestPrinters_item">
                <div className="bestPrinters_item-heading">
                    <p>Рейтинг лучших принтеров</p>
                </div>
                <div className="bestPrinters_item-title">
                    <p>{title}</p>
                </div>
                <div className="bestPrinters_item-desc">
                    <p>
                        Lorem Ipsum - это текст - "рыба", часто используемый в печати и вэб-дизайне.
                    </p>
                </div>
                <div className="bestPrinters_item-btn">
                    <TextBtn text="Подробнее" />
                </div>
            </div>
            <div className="bestPrinters_image">
                <img src={'/bestPrinters/printer.png'} alt="banner" />
            </div>
        </div>
    )
}
