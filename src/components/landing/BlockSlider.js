import React, { useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [];
(function () {
    for (let step = 1; step < 10; step++) {
        marks.push({value: step});
    }
})();

let words = ['год', 'года', 'лет'];

function valuetext(value) {
    let line;

    if(value < 2) {
        line = `${value} ${words[0]}`
    }

    if(value >= 2) {
        line = `${value} ${words[1]}`
    }

    if(value >= 5) {
        line = `${value} ${words[2]}`
    }

    return line;
}

const IOSSlider = withStyles({
    root: {
        color: '#40404C',
        height: 2,
        padding: '15px 0',
        width: '100%'
    },
    thumb: {
        height: 30,
        width: 5,
        backgroundColor: '#40404C',
        marginRight: 5,
        marginLeft: 0,
        borderRadius: 0,
        top: 11
    },
    valueLabel: {
        left: -23,
        top: -25,
        width: 50,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 10
    },
    rail: {
        height: 9,
        opacity: 0.5,
        backgroundColor: '#fff',
        border: '1px solid black'
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 10,
        width: 1,
        marginTop: 0,
    },
    markActive: {
        opacity: 0,
        backgroundColor: 'currentColor',
    }
})(Slider);


export default function Block({image, lie, truth, desc, footer, data}) {
    const reversed = data.reverse();
    const classes = useStyles();
    const prices = [];

    reversed.map((el) => prices.push(el.node.price));

    useEffect(() => {
        let span = document.createElement('span');
            span.classList.add('muiLabel');

        let block = document.querySelector('.land_block-slider');
        let elements = block.querySelectorAll('.land_block-item_slider-item_benefit-item_card-price-item_val');
        let mui = block.querySelector('.MuiSlider-root');

        let setThumb = function() {
            let factor = parseFloat(block.querySelector('.MuiSlider-thumb').getAttribute('aria-valuenow'));
            let bad = parseFloat(elements[0].innerText) * factor;
            let good = parseFloat(elements[1].innerText) * factor;

            prices[0] = bad;
            prices[1] = good;

            span.innerText = `${factor} лет`;
            // block.querySelector('.MuiSlider-thumb').appendChild(span);
        };

        mui.addEventListener('click', () => {
            setThumb();
        });

        setThumb();

    });

    return (
        <div className="land">
            <div className="land_block land_block-slider">
                <div className="land_block-item">
                    <div className="land_block-item_icon">
                        <img src={image} alt="Icon"/>
                    </div>
                </div>
                <div className="land_block-item">
                    <div className="land_block-item_text">
                        <div className="land_block-item_text-heading"
                             style={{
                                 marginBottom: '25px',
                                 marginTop:' 15px'
                             }}>
                            <span className="land_block-item_text-heading_item">{truth}</span>
                        </div>
                        <div className="land_block-item_text-text">
                            <span className="land_block-item_text-text_item">{desc}</span>
                            <span className="land_block-item_text-text_item">{footer}</span>
                        </div>
                    </div>
                </div>

                <div className="land_block-item">

                    <div className="land_block-item_slider">
                        <div className="land_block-item_slider-item">

                            <div className="land_block-item_slider-item_label">
                                <span className="land_block-item_slider-item_label-min">1 год</span>
                                <span className="land_block-item_slider-item_label-max">10 лет</span>
                            </div>

                            <div className={classes.root}>
                                <IOSSlider
                                    aria-label="ios slider"
                                    getAriaValueText={valuetext}
                                    defaultValue={5} min={1} max={10}/>
                            </div>

                        </div>

                        <div className="land_block-item_slider-item">
                            <div className="land_block-item_slider-item_benefit">

                                <div className="land_block-item_slider-item_benefit-item">
                                    {
                                        reversed.map((el) => (
                                            <div className="land_block-item_slider-item_benefit-item_card">
                                                <div className="land_block-item_slider-item_benefit-item_card-image">
                                                    <img src={el.node.image.file.url} alt="image" />
                                                </div>
                                                <div className="land_block-item_slider-item_benefit-item_card-price">
                                                    <div className="land_block-item_slider-item_benefit-item_card-price-item">
                                                        <span className="land_block-item_slider-item_benefit-item_card-price-item_val">
                                                            {el.node.price}
                                                        </span>
                                                        <img src={'/icons/rub.svg'} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="land_block-item_slider-item">
                            <div className="land_block-item_slider-item_totalbenefit">
                                <div className="land_block-item_slider-item_totalbenefit-heading">
                                    <span>Экономия</span>
                                </div>
                                <div className="land_block-item_slider-item_totalbenefit-text">
                                    <div className="land_block-item_slider-item_totalbenefit-text_item">
                                        <span className="land_block-item_slider-item_totalbenefit-text_item-val">50000</span>
                                        <img src={'/icons/rub.svg'} alt="currency" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}