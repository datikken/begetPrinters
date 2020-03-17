import React from 'react'

export default function SalesSliderItem({title}) {
    return (
        <div className="sales_slider-card" style={{backgroundImage:(``)}}>
        <img src={'/sales/salesBackground.svg'} alt="icon" />

        <div className="sales_slider-card_prod">
            <div className="sales_slider-card_prod-item">
                <img src={"/sales/salesProd.svg"} alt="product" />
            </div>
        </div>

        <div className="sales_slider-card_items">

          <div className="sales_slider-card_items-heading">Картридж</div>
          <div className="sales_slider-card_items-title">{title}</div>
          <div className="sales_slider-card_items-desc">(Аналог HP CF280A)</div>

          <div className="sales_slider-card_items-nums">
              <div className="sales_slider-card_items-nums_num">
                <span className="sales_slider-card_items-nums_num-item">9</span>

                <img className="sales_slider-card_items-nums_num_back" src="/sales/numBack.svg" alt="num" />
                <img className="sales_slider-card_items-nums_num_decor" src="/sales/numDec.svg" className="sales_slider-card_items-nums_num-dec" alt="decor" />
              </div>

              <div className="sales_slider-card_items-nums_num">
                <span className="sales_slider-card_items-nums_num-item">9</span>

                <img className="sales_slider-card_items-nums_num_back" src="/sales/numBack.svg" alt="num" />
                <img className="sales_slider-card_items-nums_num_decor" src="/sales/numDec.svg" className="sales_slider-card_items-nums_num-dec" alt="decor" />
              </div>
     
              <div className="sales_slider-card_items-nums_num">
                <span className="sales_slider-card_items-nums_num-item">9</span>

                <img className="sales_slider-card_items-nums_num_back" src="/sales/numBack.svg" alt="num" />
                <img className="sales_slider-card_items-nums_num_decor" src="/sales/numDec.svg" className="sales_slider-card_items-nums_num-dec" alt="decor" />
              </div>

              <div className="sales_slider-card_items-nums_num">
                <span className="sales_slider-card_items-nums_num-item">9</span>

                <img className="sales_slider-card_items-nums_num_back" src="/sales/numBack.svg" alt="num" />
                <img className="sales_slider-card_items-nums_num_decor" src="/sales/numDec.svg" className="sales_slider-card_items-nums_num-dec" alt="decor" />
              </div>
     
       
          </div>

        </div>
      </div>
    )
}
