import React, { useState } from 'react'
import Swiper from "react-id-swiper"
import OwlCard from './owl_card'

export default function Owl() {
  const params = {
    containerClass: 'owl_swiper',
    activeSlideKey: '5',
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  }

  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
        <div className="owl-wrapper">
            <div className="owl-controls-heading">
                <div className="owl-controls-heading-item">Новинки</div>
                <div className="owl-controls-heading_btns">
                    <img src={'/icons/arrow_right.svg'} 
                         alt="arrow" 
                         onClick={goPrev}
                         className="arrow_left" />
                    <img src={'/icons/arrow_right.svg'} 
                         alt="arrow"
                         onClick={goNext} 
                         className="arrow_right" />
                </div>
            </div>

            <Swiper {...params} getSwiper={setSwiper}>
              {Array.apply(0, Array(10)).map(function (x, i) {

                return (
                  <div key={`${i}`}>
                    <OwlCard/>
                  </div>
                )
              })}

            </Swiper>
        </div>

    )
}
