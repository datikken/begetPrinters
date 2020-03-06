import React from 'react'
import Swiper from "react-id-swiper"
import BestPrintersSliderItem from './BestPrintersSliderItem'

export default function BestPrintersSlider() {
    const params = {
        containerClass: 'bestPrinters_swiper',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        renderPrevButton: () => (
            <img
                alt="icon"
                className="swiper-button-next swiper-next"
                src={"/icons/swiper_right.svg"}
            />
        ),
        renderNextButton: () => (
            <img
                alt="icon"
                className="swiper-button-prev swiper-prev"
                src={"/icons/swiper_left.svg"}
            />
        ),
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    }
    return (
        <>
            <Swiper {...params}>
                <div>
                    <BestPrintersSliderItem title="Название принтера" />
                </div>
                <div>
                    <BestPrintersSliderItem title="test" />
                </div>
            </Swiper>
        </>
    )
}
