import React from "react"
import Swiper from "react-id-swiper"
import SalesSliderItem from "./sales_slider_item"

const SalesSlider = () => {
  const params = {
    containerClass: 'sales_swiper',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <img
        alt="icon"
        className="swiper-button-next swiper-next"
        src={"/sales/arrow_right.svg"}
      />
    ),
    renderNextButton: () => (
      <img
        alt="icon"
        className="swiper-button-prev swiper-prev"
        src={"/sales/arrow_left.svg"}
      />
    ),
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className="sales_slider">
      <div className="sales_slider-wrapper">
        <div className="sales_slider-wrapper_background">
  
          <Swiper {...params}>
              <div>
                <SalesSliderItem />
              </div>
              <div>
                <SalesSliderItem />
              </div>
          </Swiper>
    
        </div>
      </div>
    </div>
  );
}

export default SalesSlider
