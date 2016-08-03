/* globals xController */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import assert from 'fl-assert';
import Form from './form_structure/Form';


window.flInteractiveForm = {
  create: (config, targetElement) => {
    assert(config && config.length !== undefined,
      'The first argument must be a configuration array');
    assert(targetElement && typeof targetElement.setAttribute !== undefined,
      'The second argument must be an HTML Element');

    ReactDOM.render(<Form config={config} />, targetElement);
  },
};
