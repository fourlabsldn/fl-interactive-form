import React from 'react';
import InputField from './InputField';
import globals from '../utils/globals';

export default class SubmitButton extends InputField {
  constructor(...args) {
    super(...args);
    this.saveResponse = () => null;
    this.getResponse = () => null;
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.initialState = {
      error: '',
      text: 'Submit',
    };

    this.state = this.initialState;
  }

  async onClick() {
    const errorCount = await this.props.validateAllFields();

    if (errorCount > 0) {
      this.setState({
        error: `${errorCount} answer${errorCount > 1 ? 's' : ''} need completing`,
        text: 'Review',
      });
    }
  }

  onBlur() {
    this.setState(this.initialState);
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
        {this.state.error}
        <button
          className={`${this.bemSubComponent('button')} ${globals.FOCUS_CLASS}`}
          ref="button"
          onClick={this.onClick}
          onBlur={this.onBlur}
          tabIndex="0"
        >
          {this.state.text}
        </button>
      </div>
    );
  }
}

SubmitButton.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired,
  validateAllFields: React.PropTypes.func.isRequired,
};
