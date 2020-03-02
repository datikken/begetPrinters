import React from 'react'

export default function AboutHero() {

    return (
        <div className="about_hero">
            <div className="about_hero-wrap">
                <div className="about_hero-wrap_item">
                    <img
                        className="about_hero-wrap_item-img"
                        src={"/about/about_banner.png"}
                        alt={"about_hero"}
                    />
                </div>

                <div className="about_hero-wrap_item">
                    <div className="about_hero-wrap_item-top">
                        <p className="about_hero-wrap_item-top_text">
                            C 2009 года мы производим картриджи,
                            фотобумагу и плёнку для принтеров,
                            многофункциональных устройств и факсов <strong> HP,
                            Samsung, Canon, Xerox, Brother,
                            Kyocera, Epson, Panasonic, Sharp и Lexmark.</strong>
                        </p>
                    </div>
                    <div className="about_hero-wrap_item-bottom">
                        <p className="about_hero-wrap_item-bottom_text">
                            В наших картриджах используются дорогие японские
                            американские, южно-корейские комплектующие.
                            На заводе внедрена система контроля качества.
                            Мы уверены в своих картриджах и даём на них гарантию.
                            Мы будем рады, если вы выберете продукцию Т2.
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}
