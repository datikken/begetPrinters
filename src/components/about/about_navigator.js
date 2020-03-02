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

        block.addEventListener('scroll', function() {
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


                    <div className="navigator_content-wrap_item">
                        <div className="navigator_content-wrap_item-wrap">
                            <div className="navigator_content-wrap_item-heading">
                                <h1 className="navigator_content-wrap_item-heading-item">2017</h1>
                            </div>

                            <div className="navigator_content-wrap_item-paragraph">
                                <p>
                                    Партнёрская программа начисления бонусов при покупке картриджей Т2 в Ситилинк.
                                </p>
                                <p>
                                    Об изменении условий логистики и финансовых выгод нашим Оптовым Партнёрам.
                                </p>
                                <p>
                                    Бесплатная доставка картриджей Т2 от компании НИКС.
                                </p>
                                <p>
                                    Подарок при покупке картриджей Т2 в компании Бизнес Техника г.Краснодар .
                                </p>
                                <p>
                                    Новинки ассортимента картриджей Т2 для печатающей техники Brother, Canon и HP.
                                </p>
                                <p>
                                    Полный ассортимент струйных картриджей Т2 в компании Домотехника г.Владивосток .
                                </p>
                                <p>
                                    Новинки ассортимента картриджей Т2 для печатающей техники Ricoh.
                                </p>
                                <p>
                                    Картриджи Т2 стало доступнее приобрести в регионах РФ.
                                </p>
                            </div>
                        </div>

                        <div className="navigator_content-wrap_item-wrap">
                            <div className="navigator_content-wrap_item-heading">
                                <h1 className="navigator_content-wrap_item-heading-item">&nbsp;</h1>
                            </div>

                            <div className="navigator_content-wrap_item-paragraph">
                                <p>
                                    Партнёрская программа начисления бонусов при покупке картриджей Т2 в Ситилинк.
                                </p>
                                <p>
                                    Об изменении условий логистики и финансовых выгод нашим Оптовым Партнёрам.
                                </p>
                                <p>
                                    Бесплатная доставка картриджей Т2 от компании НИКС.
                                </p>
                                <p>
                                    Подарок при покупке картриджей Т2 в компании Бизнес Техника г.Краснодар .
                                </p>
                                <p>
                                    Новинки ассортимента картриджей Т2 для печатающей техники Brother, Canon и HP.
                                </p>
                                <p>
                                    Полный ассортимент струйных картриджей Т2 в компании Домотехника г.Владивосток .
                                </p>
                                <p>
                                    Новинки ассортимента картриджей Т2 для печатающей техники Ricoh.
                                </p>
                                <p>
                                    Картриджи Т2 стало доступнее приобрести в регионах РФ.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="navigator_content-wrap_item">
                        <div className="navigator_content-wrap_item-wrap">
                            <div className="navigator_content-wrap_item-heading">
                                <h1 className="navigator_content-wrap_item-heading-item">2017</h1>
                            </div>

                            <div className="navigator_content-wrap_item-paragraph">
                                <p>
                                    Партнёрская программа начисления бонусов при покупке картриджей Т2 в Ситилинк.
                                </p>
                                <p>
                                    Об изменении условий логистики и финансовых выгод нашим Оптовым Партнёрам.
                                </p>
                                <p>
                                    Бесплатная доставка картриджей Т2 от компании НИКС.
                                </p>
                                <p>
                                    Подарок при покупке картриджей Т2 в компании Бизнес Техника г.Краснодар .
                                </p>
                                <p>
                                    Новинки ассортимента картриджей Т2 для печатающей техники Brother, Canon и HP.
                                </p>
                                <p>
                                    Полный ассортимент струйных картриджей Т2 в компании Домотехника г.Владивосток .
                                </p>
                                <p>
                                    Новинки ассортимента картриджей Т2 для печатающей техники Ricoh.
                                </p>
                                <p>
                                    Картриджи Т2 стало доступнее приобрести в регионах РФ.
                                </p>
                            </div>
                        </div>

                        <div className="navigator_content-wrap_item-wrap">
                            <div className="navigator_content-wrap_item-heading">
                                <h1 className="navigator_content-wrap_item-heading-item">&nbsp;</h1>
                            </div>

                            <div className="navigator_content-wrap_item-paragraph">
                                <p>
                                    Партнёрская программа начисления бонусов при покупке картриджей Т2 в Ситилинк.
                                </p>
                                <p>
                                    Об изменении условий логистики и финансовых выгод нашим Оптовым Партнёрам.
                                </p>
                                <p>
                                    Бесплатная доставка картриджей Т2 от компании НИКС.
                                </p>
                                <p>
                                    Подарок при покупке картриджей Т2 в компании Бизнес Техника г.Краснодар .
                                </p>
                                <p>
                                    Новинки ассортимента картриджей Т2 для печатающей техники Brother, Canon и HP.
                                </p>
                                <p>
                                    Полный ассортимент струйных картриджей Т2 в компании Домотехника г.Владивосток .
                                </p>
                                <p>
                                    Новинки ассортимента картриджей Т2 для печатающей техники Ricoh.
                                </p>
                                <p>
                                    Картриджи Т2 стало доступнее приобрести в регионах РФ.
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
        </>
    )
}
