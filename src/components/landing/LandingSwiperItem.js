import React from 'react'

export default function LandingSwiperItem() {
    return (
        <div className="landswipe">
            <div className="landswipe_wrap">
                
                <div className="landswipe_wrap-decor">
                    <img src={'/landing/swiper/decor.svg'} alt="Decor" className="landswipe_wrap-decor_item" />
                </div>

                 <div className="landswipe_wrap-item">
                    <div className="landswipe_wrap-item_img">
                        <img src={'/landing/swiper/sertificate.svg'} alt="Image" />
                    </div>
                </div>
                <div className="landswipe_wrap-item">
                    <div className="landswipe_wrap-item_head">
                        <div className="landswipe_wrap-item_head-logo">
                            <img src={'/landing/partner/home.svg'} alt="Logo" />
                        </div>
                        <div className="landswipe_wrap-item_head-text">
                            <span className="landswipe_wrap-item_head-text_item">Банк</span>
                            <span className="landswipe_wrap-item_head-text_item">Хоум Кредит</span>
                        </div>
                    </div>

                    <div className="landswipe_wrap-item_desc">
                        <div className="landswipe_wrap-item_desc-text">
                            <span className="landswipe_wrap-item_desc-text_item">
                                Случайно обнаружил на просторах интернета, 
                                что есть более дешёвые нежели оригинальные "кэноновские" картриджи. 
                                На счёт качества ничего плохого сказать не могу. 
                                Всё дело в цене. Оригинальные картриджи стандартного объёма стоят даже дороже, чем картриджи от Т2, объём которых увеличен (XL). 
                                Недостаток данных картриджей только в малом распространении. Купить можно только в паре-тройке интернет-магазинов. 
                                Для моей модели МФУ подходят два вида картриджа: чёрный 445 (или увеличенная версия 445XL) и цветной 446 (увеличенный - 446XL). 
                                Так вот у Т2 Имеются в наличии только объёмные версии XL. 
                                Однако недавно случилось недоразумение с купленным в Ситилинке цветным картриджем.
                                Он оказался бракованным и мне пришлось долго (около месяца) ждать результатов проверки качества. В итоге мне заменили бракованный экземпляр.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="landswipe_wrap-decor2">
                    <img src={'/landing/swiper/decor.svg'} alt="Decor" className="landswipe_wrap-decor_item" />
                </div>

            </div>
        </div>
    )
}
