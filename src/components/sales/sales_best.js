import React from "react"
import Swiper from 'react-id-swiper'
import SalesBestItem from './sales_best_item'

const SalesEco = () => {
  let params = {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    direction: "vertical",
    containerClass: 'swiper-container best_printers_swipe mobile-hide',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className="best_printers">
      <div className="best_printers_swipe-decor">
        <img src={'/sales/decor.svg'} alt=""/>
      </div>

      <div className="best_printers_swipe-heading">
        <span>Рейтинг лучших принтеров</span>
      </div>

      <Swiper {...params}>
        <div>
          <SalesBestItem title={'1'} />
        </div>
        <div>
          <SalesBestItem title={'2'} />
        </div>
        <div>
          <SalesBestItem title={'3'} />
        </div>
      </Swiper>
    </div>
  );
}

export default SalesEco