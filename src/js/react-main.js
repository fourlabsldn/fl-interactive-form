/* globals xController */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import assert from 'fl-assert';
import Form from './form_structure/Form';

window.flInteractiveForm = {
  create: (config) => {
    assert(config && config.length !== undefined,
      'The first argument must be a configuration array');

    const targetElement = document.createElement('div');
    targetElement.className = 'fl-if';
    ReactDOM.render(<Form config={config} />, targetElement);

    return targetElement;
  },
};
