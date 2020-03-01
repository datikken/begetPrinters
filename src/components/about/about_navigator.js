import React from 'react'

export default function AboutNavigator({}) {
    let data = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

    return (
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
    )
}
