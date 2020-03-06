import React from 'react';
import Swiper from "react-id-swiper"
import OwlCard from './owl_card'

export default function Owl() {
    const params = {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
  
    return (
        <div className="owl-wrapper">
            <div className="owl-controls-heading">
                <div className="owl-wrapper_heading-item">Новинки</div>
            </div>
            <Swiper {...params}>

              <div>
                <OwlCard/>
              </div>
              <div>
                <OwlCard/>
              </div>
              <div>
                <OwlCard/>
              </div>
              <div>
                <OwlCard/>
              </div>

            </Swiper>
        </div>

    )
}
