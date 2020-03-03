import React from 'react'

export default function AboutNavigator({}) {
    let data = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

    let handler = (i) => {
        let nav = document.querySelector('.navigator')
        let el = nav.querySelector(`.per_${i}`);
        let heading = nav.querySelector('.navigator_content-wrap_item-heading-item');
        let descline = nav.querySelector('.descline')
        let line = nav.querySelector('.navigator_wrap-line');
        let items = nav.querySelectorAll('.navigator_wrap-items-item');
        let block = nav.querySelector('.navigator_wrap-items');

        let width = el.offsetLeft + 20;
        let mobWidth = el.getBoundingClientRect().left;

        block.addEventListener('scroll', function () {
            line.style.width = 0;
        })

        items.forEach((el) => {
            el.classList.contains('active_border') && el.classList.remove('active_border')
        });

        line.style.width = `${mobWidth}px`;
        descline.style.width = `${width}px`;

        el.classList.add('active_border');

        heading.textContent = i;

    }

    return (
        <>
            <div className="navigator">
                <div className="navigator_wrap">
                    <div className="navigator_wrap-items">
                        <div className="desktop-hide">
                            <div className="navigator_wrap-line"></div>
                        </div>
                        <div className="mobile-hide">
                            <div className="navigator_wrap-line descline"></div>
                        </div>
                        {data.map((i) =>
                            <div
                                onClick={() => handler(i)}
                                className={`navigator_wrap-items-item per_${i}`}
                                key={i}>
                                {i}</div>
                        )}
                    </div>
                </div>

                <div className="navigator_content">

                    <div className="navigator_content-wrap">

                        <img src={"/about/delimeter.svg"} alt="delimeter" className="navigator_content-wrap_delimeter" />

                        <div className="navigator_content-wrap_item">

                            <div className="navigator_content-wrap_item-wrap">
                                <div className="navigator_content-wrap_item-heading" style={{marginLeft: "75px"}}>
                                    <p className="navigator_content-wrap_item-heading-item">2017</p>
                                    <div className="navigator_content-wrap_item-heading-decor"
                                         style={{marginLeft: "20px"}}></div>
                                </div>

                                <div className="navigator_content-wrap_item-paragraph"  style={{float: "left"}}>
                                    <div className="navigator_content-wrap_item-paragraph-item" style={{justifyContent: "flex-start"}}>
                                        <img src={"/about/search.svg"} alt="Search" />
                                        <p style={{textAlign: "left", marginLeft: "20px"}}>
                                            Партнёрская программа начисления бонусов при покупке картриджей Т2 в Ситилинк.
                                        </p>
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item" style={{justifyContent: "flex-start"}}>
                                        <img src={"/about/search.svg"} alt="Search" />
                                        <p style={{textAlign: "left", marginLeft: "20px"}}>
                                            Бесплатная доставка картриджей Т2 от компании НИКС.
                                        </p>
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item" style={{justifyContent: "flex-start"}}>
                                        <img src={"/about/search.svg"} alt="Search" />
                                        <p style={{textAlign: "left", marginLeft: "20px"}}>
                                            Новинки ассортимента картриджей Т2 для печатающей техники Brother, Canon и HP.
                                        </p>
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item" style={{justifyContent: "flex-start"}}>
                                        <img src={"/about/search.svg"} alt="Search" />
                                        <p style={{textAlign: "left", marginLeft: "20px"}}>
                                            Новинки ассортимента картриджей Т2 для печатающей техники Ricoh.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="navigator_content-wrap_item-wrap">
                                <div className="navigator_content-wrap_item-heading" style={{marginRight: "75px"}}>
                                    <div className="navigator_content-wrap_item-heading-decor"></div>
                                </div>

                                <div className="navigator_content-wrap_item-paragraph" style={{float: "right"}}>
                                    <div className="navigator_content-wrap_item-paragraph-item">
                                        <p>
                                            Об изменении условий логистики и финансовых выгод нашим Оптовым Партнёрам.
                                        </p>
                                        <img src={"/about/search.svg"} alt="Search" />
                                    </div>

                                    <div className="navigator_content-wrap_item-paragraph-item">
                                        <p>
                                            Подарок при покупке картриджей Т2 в компании Бизнес Техника г.Краснодар.
                                        </p>
                                        <img src={"/about/search.svg"} alt="Search" />
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item">
                                        <p>
                                            Полный ассортимент струйных картриджей Т2 в компании Домотехника г.Владивосток .
                                        </p>
                                        <img src={"/about/search.svg"} alt="Search" />
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item">
                                        <p>
                                            Картриджи Т2 стало доступнее приобрести в  регионах РФ.
                                        </p>
                                        <img src={"/about/search.svg"} alt="Search" />
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="navigator_content-wrap_item">

                            <div className="navigator_content-wrap_item-wrap">
                                <div className="navigator_content-wrap_item-heading" style={{marginLeft: "75px"}}>
                                    <p className="navigator_content-wrap_item-heading-item">2017</p>
                                    <div className="navigator_content-wrap_item-heading-decor"
                                         style={{marginLeft: "20px"}}></div>
                                </div>

                                <div className="navigator_content-wrap_item-paragraph"  style={{float: "left"}}>
                                    <div className="navigator_content-wrap_item-paragraph-item" style={{justifyContent: "flex-start"}}>
                                        <img src={"/about/search.svg"} alt="Search" />
                                        <p style={{textAlign: "left", marginLeft: "20px"}}>
                                            Партнёрская программа начисления бонусов при покупке картриджей Т2 в Ситилинк.
                                        </p>
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item" style={{justifyContent: "flex-start"}}>
                                        <img src={"/about/search.svg"} alt="Search" />
                                        <p style={{textAlign: "left", marginLeft: "20px"}}>
                                            Бесплатная доставка картриджей Т2 от компании НИКС.
                                        </p>
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item" style={{justifyContent: "flex-start"}}>
                                        <img src={"/about/search.svg"} alt="Search" />
                                        <p style={{textAlign: "left", marginLeft: "20px"}}>
                                            Новинки ассортимента картриджей Т2 для печатающей техники Brother, Canon и HP.
                                        </p>
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item" style={{justifyContent: "flex-start"}}>
                                        <img src={"/about/search.svg"} alt="Search" />
                                        <p style={{textAlign: "left", marginLeft: "20px"}}>
                                            Новинки ассортимента картриджей Т2 для печатающей техники Ricoh.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="navigator_content-wrap_item-wrap">
                                <div className="mobile-hide">
                                    <div className="navigator_content-wrap_item-heading" style={{marginRight: "75px"}}>
                                        <div className="navigator_content-wrap_item-heading-decor"></div>
                                    </div>
                                </div>

                                <div className="navigator_content-wrap_item-paragraph" style={{float: "right",paddingTop: "2.4rem"}}>
                                    <div className="navigator_content-wrap_item-paragraph-item">
                                        <p>
                                            Об изменении условий логистики и финансовых выгод нашим Оптовым Партнёрам.
                                        </p>
                                        <img src={"/about/search.svg"} alt="Search" />
                                    </div>

                                    <div className="navigator_content-wrap_item-paragraph-item">
                                        <p>
                                            Подарок при покупке картриджей Т2 в компании Бизнес Техника г.Краснодар.
                                        </p>
                                        <img src={"/about/search.svg"} alt="Search" />
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item">
                                        <p>
                                            Полный ассортимент струйных картриджей Т2 в компании Домотехника г.Владивосток .
                                        </p>
                                        <img src={"/about/search.svg"} alt="Search" />
                                    </div>
                                    <div className="navigator_content-wrap_item-paragraph-item">
                                        <p>
                                            Картриджи Т2 стало доступнее приобрести в  регионах РФ.
                                        </p>
                                        <img src={"/about/search.svg"} alt="Search" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
