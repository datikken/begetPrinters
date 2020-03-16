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
  );
}

export default SalesEco