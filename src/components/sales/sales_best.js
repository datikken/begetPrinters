import React from "react"

const SalesEco = () => (
  <div className="sales_best">
    <div className="sales_best-wrapper">
      <div className="sales_best-wrapper_item">
        <div className="sales_best-wrapper_item-decor">
          <img src={'/sales/decor.svg'} alt=""/>
        </div>
        <div className="sales_best-wrapper_item-bullets">
          <span className="active_bullet"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sales_best-wrapper_item">
        <div className="sales_best-wrapper_item-content">
          <div className="sales_best-wrapper_item-content_heading">
            <span>Рейтинг лучших принтеров</span>
          </div>
          <div className="sales_best-wrapper_item-content_inner">

            <div className="sales_best-wrapper_item-content_inner-text">
              <div className="sales_best-wrapper_item-content_inner-text-heading">
                <span>НАЗВАНИЕ<br/></span><span>ПРИНТЕРА</span>
              </div>
              <div className="sales_best-wrapper_item-content_inner-text-description">
                <span> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</span>
              </div>

              <div className="sales_best-wrapper_item-content_inner-text-cta">
                <span>ПОДРОБНЕЕ</span>
              </div>
            </div>

            <div className="sales_best-wrapper_item-content_inner-image">
              <img src={'/sales/sales_best.png'} alt=""/>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SalesEco