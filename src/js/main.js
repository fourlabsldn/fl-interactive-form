/* globals xController */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import Form from './Form';

xController((xdiv) => {
  const config = JSON.parse(xdiv.dataset.config);
  ReactDOM.render(<Form config={config} />, xdiv);
});
