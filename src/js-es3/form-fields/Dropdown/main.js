import initialState from './initialState';
import getState from './getState';
import render from './render';
import validate from './validate';
import info from './info';

const Dropdown = {
  info,
  initialState,
  es3: {
    validate,
    getState,
    render,
  },
};

export default Dropdown;
