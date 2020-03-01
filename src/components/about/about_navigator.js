import React from 'react'

export default function AboutNavigator({}) {
    let data = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

    return (
        <>
        <div className="navigator">
            <div className="navigator_wrap">
                <div className="navigator_wrap-line"></div>

                <div className="navigator_wrap-items">
                    {data.map((i) =>
                        <div className="navigator_wrap-items-item" key={i}>{i}</div>
                    )}
                </div>
            </div>
        </div>

            <div className="navigator_content">
                <div className="navigator_content-wrap">
                    <div className="navigator_content-wrap_item">
                        <div className="navigator_content-wrap_item-heading">
                            <h1>2017</h1>
                        </div>
                    </div>

                    <div className="navigator_content-wrap_item">
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
        </>
    )
}
