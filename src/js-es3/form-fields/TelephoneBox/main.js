import textFieldInitialState from '../TextBox/initialState';

import getState from '../TextBox/getState';
import render from '../TextBox/render';
import validate from './validate';

const info = {
  // Compulsory
  type: 'TelephoneBox',
  displayName: 'Telephone Box',
  group: 'Text Components',

  // Field type specific
  htmlElement: 'input',
  htmlInputType: 'tel',
};

const initialState = state => {
  return textFieldInitialState(state)
    .then(initialised => Object.assign({}, initialised, info));
};


const TelephoneBox = {
  initialState,
  info,
  es3: {
    validate,
    getState,
    render,
  },
};

export default TelephoneBox;
