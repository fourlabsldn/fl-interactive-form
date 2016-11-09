import initialState from './initialState';
import getState from '../TextBox/getState';
import validate from '../TextBox/validate';
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
