import textFieldInitialState from '../TextBox/initialState';

import getState from '../TextBox/getState';
import render from '../TextBox/render';
import validate from './validate';

const info = {
  // Compulsory
  type: 'EmailBox',
  displayName: 'Email Box',
  group: 'Text Components',

  // Field type specific
  htmlElement: 'input',
  htmlInputType: 'email',
};

const initialState = state => {
  return textFieldInitialState(state)
    .then(initialised => Object.assign({}, initialised, info));
};


const EmailBox = {
  initialState,
  info,
  es3: {
    validate,
    getState,
    render,
  },
};

export default EmailBox;
