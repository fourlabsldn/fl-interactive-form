/* globals xController */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import Form from './form_structure/Form';

xController((xdiv) => {
  const config = JSON.parse(xdiv.getAttribute('data-config'));
  ReactDOM.render(<Form config={config} />, xdiv);
});
