import React from "react"

const Sales = () => (
  <div className="sales">
    <div className="sales-wrapper">

      <div className="sales-wrapper_item">
        <div className="sales-wrapper_item-inner">
          <div className="sales-wrapper_item-inner_image image1">
            <img src={'/sales/item1.png'} alt=""/>
          </div>
          <div className="sales-wrapper_item-inner_info">
            <div className="sales-wrapper_item-inner_info-text">
              <span>Картриджи <br/></span><span>Т2</span>
            </div>
            <div className="sales-wrapper_item-inner_info-desc">
              <span>описание товара или артикул</span>
            </div>
            <div className="sales-wrapper_item-inner_info-button">
              <span>Подробнее</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sales-wrapper_item">
        <div className="sales-wrapper_item-inner">
          <div className="sales-wrapper_item-inner_image image2">
            <img src={'/sales/item2.png'} alt=""/>
          </div>
          <div className="sales-wrapper_item-inner_info">
            <div className="sales-wrapper_item-inner_info-text">
              <span>Картриджи<br/></span><span>easyprint</span>
            </div>
            <div className="sales-wrapper_item-inner_info-desc">
              <span>описание товара или артикул</span>
            </div>
            <div className="sales-wrapper_item-inner_info-button">
              <span>Подробнее</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default Sales
