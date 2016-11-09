import initialState from '../Checkboxes/initialState';
import getState from '../Checkboxes/getState';
import render from '../Checkboxes/render';
import validate from './validate';
import info from './info';

const RadioButtons = {
  info,
  initialState,
  es3: {
    validate,
    getState,
    render,
  },
};

export default RadioButtons;
