import React from "react"
import Swiper from "react-id-swiper"

const SalesSlider = () => {

  const params = {
    containerClass: 'sales_swiper',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <img
        className="swiper-button-next swiper-next"
        src={"/sales/arrow_right.svg"}
      />
    ),
    renderNextButton: () => (
      <img
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
  
          <img src={'/sales/sales_slider.png'} alt=""/>
          <img src={'/sales/sales_slider2.png'} alt=""/>
        
        </Swiper>
  
  
        </div>
        <div className="sales_slider-wrapper_ctas">
          <div className="sales_slider-wrapper_ctas-heading">
            <span>Картридж<br/></span>
            <span>T2 TC-H80A<br/></span>
            <span>(Аналог HP CF280A)</span>
          </div>
          <div className="sales_slider-wrapper_ctas-timer">
            <img src={'/sales/timer.png'} alt=""/>
          </div>
          <div className="sales_slider-wrapper_ctas-button">
            <span>успеть купить</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesSlider
