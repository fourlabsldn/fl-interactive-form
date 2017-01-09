import React from 'react';
import ReactDOM from 'react-dom';
import InputField from '../InputField';
import globals from '../../../utils/globals';

export default class OptionsInput extends InputField {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    this.generateOptions = this.generateOptions.bind(this);

    /** @override */
    this.bemClass = `${this.modulePrefix}_OptionsInput`;
  }

  keyPrev() {
    const container = ReactDOM.findDOMNode(this);
    const options = Array.from(container.querySelectorAll(`.${globals.FOCUS_CLASS}`));
    const focusedIndex = options.findIndex(p => p === document.activeElement);

    if (options[focusedIndex - 1]) {
      this.props.appControl.focus(options[focusedIndex - 1]);
    } else {
      super.keyPrev();
    }
  }

  keyNext() {
    const container = ReactDOM.findDOMNode(this);
    const options = Array.from(container.querySelectorAll(`.${globals.FOCUS_CLASS}`));
    const focusedIndex = options.findIndex(p => p === document.activeElement);

    if (options[focusedIndex + 1]) {
      this.props.appControl.focus(options[focusedIndex + 1]);
    } else {
      super.keyNext();
    }
  }

  keySelect() {
    const container = ReactDOM.findDOMNode(this);
    const options = Array.from(container.querySelectorAll(`.${globals.FOCUS_CLASS}`));
    const focusedIndex = options.findIndex(p => p === document.activeElement);

    if (options[focusedIndex]) {
      options[focusedIndex].click();
    } else {
      super.keySelect();
    }
  }

  /**
   * To be overriden by subclasses
   * @method generateOptions
   * @param  {Array} optionsArray
   * @return {Array<ReactElement>}
   */
  generateOptions(options) {
    throw new Error('Should be implemented by subclass');
  }

  render() {
    const options = this.generateOptions(this.props.config.options);

    return (
      <div
        className={this.bemClass}
        onKeyDown={this.keyListener}
      >
        {options}
      </ div>
    );
  }
}
