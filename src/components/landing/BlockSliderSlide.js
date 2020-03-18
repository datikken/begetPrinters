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

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

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
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

const labelHandler = () => {
   setTimeout(() => {
        let val = document.querySelector('.MuiSlider-thumb').getAttribute('aria-valuetext');
        let placeholder = document.querySelector('.PrivateValueLabel-label-35').innerText = val;
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
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        defaultValue={5} marks={marks} min={1} max={10}/>
    </div>
  );
}