import React from 'react';
import ReactDOM from 'react-dom';
import InputField from '../InputField';
import globals from '../../../utils/globals';

/**
 * @abstract @class
 */
export default class TextInput extends InputField {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    this.inputEl = null; // To be set by subclasses

    // Make sure we just trigger a revalidarion on blur when there has been
    // some change.
    this.changedSinceLastUpdate = false;

    /** @override */
    this.bemClass = `${this.modulePrefix}_TextInput`;
  }

  getResponse() {
    const response = ReactDOM.findDOMNode(this.refs.input).value;
    return response.trim();
  }

  /**
   * @override
   */
  validateResponse(response = this.getResponse()) {
    if (this.isRequired() && !response) {
      return 'This field must be completed.';
    }

    return false;
  }

  render() {
    const InputEl = this.inputEl;
    const handleInputChange = () => {
      this.changedSinceLastUpdate = true;
      if (this.props.ui.active) {
        // set incomplete
        this.props.appControl.setQuestionCompleted(this.props.config.key, false);
      }

      if (this.props.ui.error) {
        this.showError(this.validateResponse());
      }
    };

    const handleBlur = () => {
      if (!this.changedSinceLastUpdate) { return; }
      this.changedSinceLastUpdate = false;
      this.saveResponse();
    };

    return (
      <div className={this.bemClass}>
        <InputEl
          className={`${this.bemSubComponent('input')} ${globals.FOCUS_CLASS}`}
          ref="input"
          type={this.type}
          defaultValue={this.props.config.answer}
          placeholder={this.props.config.placeholder}

          onKeyDown={this.keyListener}
          onChange={handleInputChange}
          onBlur={handleBlur}
          disabled={!this.props.ui.active}
        />
      </ div>
    );
  }
}
