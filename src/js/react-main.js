/* globals xController */
// import 'babel-polyfill'; // Removing to avoid conflict in squarespace
import './utils/ie8-polyfills';
import './utils/customEventsPolyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import assert from 'fl-assert';
import Form from './form_structure/Form';

const flInteractiveForm = {
  create: (config, customComponents) => {
    assert(config && config.length !== undefined,
      'The first argument must be a configuration array');

    const targetElement = document.createElement('div');
    targetElement.className = 'fl-if';
    ReactDOM.render(<Form config={config} customComponents={customComponents} />, targetElement);

    return targetElement;
  },
};

export default flInteractiveForm;
