import React from 'react'
import Swiper from 'react-id-swiper';
import FeedbackItem from './FeedbackItem'

export default function Feedback() {
    const params = {
        slidesPerView: 5,
        spaceBetween: 5,
        containerClass: 'land_swiper',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            1024: {
              slidesPerView: 5,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 10
              },
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }
      };

    return (
        <div className="land_feed">
            <div className="land_feed-wrap">
                <div className="land_feed-wrap_item">
                    <div className="land_feed-wrap_item-heading">
                        <span className="land_feed-wrap_item-heading-item">
                            Отзывы
                        </span>
                    </div>
                </div>
                <div className="land_feed-wrap_item">
                    <Swiper {...params}>
                        <div>
                            <FeedbackItem 
                                desc={'“Дешевле, чем оригинальные комплектующие Случайно обнаружил в интернете...”'}
                                name={'Хоум Кредит'}
                                type={'Банк'}
                                image={'/landing/partner/home.svg'} />
                        </div>
                        <div>
                            <FeedbackItem 
                                desc={'“Дешевле, чем оригинальные комплектующие Случайно обнаружил в интернете...”'}
                                name={'otzovik.com'}
                                type={'Пользователь'}
                                image={'/landing/partner/otzovik.svg'} />
                        </div>
                        <div>
                            <FeedbackItem 
                                desc={'“Дешевле, чем оригинальные комплектующие Случайно обнаружил в интернете...”'}
                                name={'Хоум Кредит'}
                                type={'Банк'}
                                image={'/landing/partner/home.svg'} />
                        </div>
                        <div>
                            <FeedbackItem 
                                desc={'“Дешевле, чем оригинальные комплектующие Случайно обнаружил в интернете...”'}
                                name={'otzovik.com'}
                                type={'Пользователь'}
                                image={'/landing/partner/otzovik.svg'} />
                        </div>
                        <div>
                            <FeedbackItem 
                                desc={'“Дешевле, чем оригинальные комплектующие Случайно обнаружил в интернете...”'}
                                name={'Хоум Кредит'}
                                type={'Банк'}
                                image={'/landing/partner/home.svg'} />
                        </div>
                        <div>
                            <FeedbackItem 
                                desc={'“Дешевле, чем оригинальные комплектующие Случайно обнаружил в интернете...”'}
                                name={'otzovik.com'}
                                type={'Пользователь'}
                                image={'/landing/partner/otzovik.svg'} />
                        </div>
                        <div>
                            <FeedbackItem 
                                desc={'“Дешевле, чем оригинальные комплектующие Случайно обнаружил в интернете...”'}
                                name={'otzovik.com'}
                                type={'Пользователь'}
                                image={'/landing/partner/otzovik.svg'} />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
