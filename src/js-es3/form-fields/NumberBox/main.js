import textFieldInitialState from '../TextBox/initialState';

import getState from '../TextBox/getState';
import render from '../TextBox/render';
import validate from './validate';

const info = {
  // Compulsory
  type: 'NumberBox',
  displayName: 'Number Box',
  group: 'Text Components',

  // Field type specific
  htmlElement: 'input',
  htmlInputType: 'number',
};

const initialState = state => {
  return textFieldInitialState(state)
    .then(initialised => Object.assign({}, initialised, info));
};


const NumberBox = {
  initialState,
  info,
  es3: {
    validate,
    getState,
    render,
  },
};

export default NumberBox;
