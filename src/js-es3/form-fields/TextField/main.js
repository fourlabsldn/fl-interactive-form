import initialState from './initialState';
import getState from './getState';
import render from './render';
import validate from './validate';

const TextField = {
  initialState,
  es3: {
    validate,
    getState,
    render,
  },
};

export default TextField;
