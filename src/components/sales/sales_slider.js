import React from "react"

const SalesSlider = () => (
  <div className="sales_slider">
    <div className="sales_slider-wrapper">
      <div className="sales_slider-wrapper_background">
        <img src={'/sales/sales_slider.png'} alt=""/>
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
)

export default SalesSlider
