import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [];
const labels = () => {
    for (let step = 1; step < 10; step++) {
        marks.push({value: step});
      }
}
labels();

function valuetext(value) {
    let line = `${value} лет`;
    
    return line;
  }


const IOSSlider = withStyles({
  root: {
    color: '#40404C',
    height: 2,
    padding: '15px 0',
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
    left: 'calc(-50%)',
    top: -22,
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
  },
})(Slider);

const labelHandler = () => {
   setTimeout(() => {
        let val = document.querySelector('.MuiSlider-thumb').getAttribute('aria-valuetext');
        // let placeholder = document.querySelector('.PrivateValueLabel-label-34').innerText = val;
    }, 5);
}

export default function CustomizedSlider() {
  const classes = useStyles();

  useEffect(() => {
       labelHandler();
  }, labelHandler);

  return (
    <div className={classes.root}>
      <IOSSlider 
        onChange={() => labelHandler()}
        aria-label="ios slider" 
        // marks={marks}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        defaultValue={5} min={1} max={10}/>
    </div>
  );
}