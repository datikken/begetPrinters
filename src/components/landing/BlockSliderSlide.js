import React, {useEffect, useState} from 'react';
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
    left: -24,
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

const labelHandler = () => {

   setTimeout(() => {
       let val, min, max,factor, economy;
       let numbers = document.querySelectorAll('[data-price]');

       val = document.querySelector('.MuiSlider-thumb').getAttribute('aria-valuetext');
       factor = parseFloat(document.querySelector('.MuiSlider-thumb').getAttribute('aria-valuenow'));
       economy = document.querySelector('.land_block-item_slider-item_totalbenefit-text_item-val');

       min = document.querySelector('.land_block-item_slider-item_label-min');
       max = document.querySelector('.land_block-item_slider-item_label-max');

       let bad = parseFloat(numbers[0].getAttribute('data-price')) * factor;
       let good = parseFloat(numbers[1].getAttribute('data-price')) * factor;

       // document.querySelector('.muiLabel').innerText = val

       numbers[0].innerText = bad;
       numbers[1].innerText = good;

       economy.innerText = bad - good;

       if(val === '1 год') {
           min.classList.add('as-none');
       } else {
           min.classList.remove('as-none');
       }

       if(val === '10 лет') {
           max.classList.add('as-none');
       } else {
           max.classList.remove('as-none');
       }

    }, 1);
}

export default function CustomizedSlider() {
  const classes = useStyles();
  const [slider, setSlider] = useState(false);

  useEffect(() => {
      labelHandler();
      let span = document.createElement('span')
          span.classList.add('muiLabel')
      if(!slider) {
          document.querySelector('.MuiSlider-thumb').appendChild(span);
          setSlider(true);
      }


  }, labelHandler);

  return (
    <div className={classes.root}>
      <IOSSlider 
        onChange={() => labelHandler()}
        aria-label="ios slider"
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        defaultValue={5} min={1} max={10}/>
    </div>
  );
}