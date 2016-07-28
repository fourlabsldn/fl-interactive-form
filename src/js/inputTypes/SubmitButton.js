import React from 'react';
import InputField from './InputField';
import globals from '../utils/globals';

export default class SubmitButton extends InputField {
  constructor(...args) {
    super(...args);
    this.sendResponse = () => null;
    this.getResponse = () => null;
  }

  render() {
    const buttonClass = this.props.ui.active
      ? `${this.bemClass} ${this.bemState('active')}`
      : `${this.bemClass}`;

    return (
      <div
        className={buttonClass}
        onKeyDown={this.keyListener}
      >
        <button
          className={`${this.bemSubComponent('button')} ${globals.FOCUS_CLASS}`}
          ref="button"
          onClick={this.props.appControl.exportConfig}
          tabIndex="0"
        >
          Submit
        </button>
      </div>
    );
  }
}

SubmitButton.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired,
};
