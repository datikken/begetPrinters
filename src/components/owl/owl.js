import React from 'react';
import Swiper from "react-id-swiper"
import OwlCard from './owl_card'

export default function Owl() {
    const params = {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
          },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
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
