import React from 'react'

export default function Block() {
    return (
        <div className="land">
            <div className="land_block">
                <div className="land_block-item">
                    <div className="land_block-item_icon">
                        <img src={"/landing/printerIcon.svg"} alt="Icon"/>
                    </div>
                </div>
                <div className="land_block-item">
                    <div className="land_block-item_text">
                        <div className="land_block-item_text-false">
                            <span className="land_block-item_text-false_item">Портят</span>
                        </div>
                        <div className="land_block-item_text-heading">
                            <span className="land_block-item_text-heading_item">Не портят принтеры</span>
                        </div>
                        <div className="land_block-item_text-text">
                            <span className="land_block-item_text-text_item">В России много дешёвых картриджей сомнительного качества. Мы бы и сами не рискнули поставить их в свои принтеры. А по данным многочисленных исследований, до 30% «оригинальных» картриджей на самом деле подделка.</span>
                            <span className="land_block-item_text-text_item">Мы создаём картриджи из дорогих японских, американских и южно-корейских комплектующих. Наши сотрудники принимают и тестируют каждую партию прямо на заводе. Мы уверены в своих картриджах и гарантируем, что они не сломают принтер.</span>
                        </div>
                    </div>
                </div>

                <div className="land_block-item">
                    <div className="land_block-item_image">
                        <img src={"/landing/printer.svg"} alt="Icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
