import initialState from './initialState';
import getState from '../TextField/getState';
import validate from '../TextField/validate';
import info from './info';
import render from './render';


const TextArea = {
  initialState,
  info,
  es3: {
    validate,
    getState,
    render,
  },
};

export default TextArea;
