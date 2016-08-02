import React from 'react';
import Error from '../Error';
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
    // If there is already an error being shown.
    if (this.state.error) {
      this.props.appControl.slideToFirstWithError();
      return;
    }

    const errorFields = await this.props.validateAllFields();
    if (errorFields.length > 0) {
      this.setState({
        error: `${errorFields.length} answer${errorFields.length > 1 ? 's' : ''} need completing`,
        text: 'Review',
      });
    } else {
      this.props.appControl.showThankYouScreen('Thank you!');
    }
  }

  keySelect() {
    this.onClick();
  }

  keyPrev() {
    this.props.appControl.goToField('prev');
  }

  keyNext() {
    return;
  }

  onBlur() {
    this.setState(this.initialState);
  }

  render() {
    const buttonClass = this.props.ui.active
      ? `${this.bemClass} ${this.bemState('active')}`
      : `${this.bemClass}`;

    const error = this.state.error
      ? <Error>{this.state.error}</Error>
      : null;

    return (
      <div
        className={buttonClass}
        onKeyDown={this.keyListener}
      >

        {error}

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
