/* globals xController */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import assert from 'fl-assert';
import Form from './form_structure/Form';


window.flInteractiveForm = {
  create: (config, targetElement) => {
    assert(typeof config === 'object',
      'The first argument must be a configuration object');
    assert(targetElement && typeof targetElement.setAttribute !== undefined,
      'The second argument must be an HTML Element');

    ReactDOM.render(<Form config={config} />, targetElement);
  },
};
