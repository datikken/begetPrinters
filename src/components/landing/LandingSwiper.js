import React from 'react'
import Swiper from 'react-id-swiper'
import LandingSwiperItem from './LandingSwiperItem'

export default function LandingSwiper() {
    return (
        <Swiper>
            <div>
                <LandingSwiperItem />
            </div>
            <div>
                <LandingSwiperItem />
            </div>
            <div>
                <LandingSwiperItem />
            </div>
        </Swiper>
    )
}
