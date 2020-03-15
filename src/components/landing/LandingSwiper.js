import React from 'react'
import Swiper from 'react-id-swiper'
import LandingSwiperItem from './LandingSwiperItem'

export default function LandingSwiper() {
    const params = {
        slidesPerView: 'auto',
        activeSlideKey: '2',
        containerClass: 'landswipe_swiper',
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }

    return (
        <Swiper {...params}  x>
            <div key="1">
                <LandingSwiperItem />
            </div>
            <div key="2">
                <LandingSwiperItem />
            </div>
            <div key="3">
                <LandingSwiperItem />
            </div>
        </Swiper>
    )
}
