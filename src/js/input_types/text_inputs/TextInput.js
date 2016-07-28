import React from 'react';
import ReactDOM from 'react-dom';
import InputField from '../InputField';
import globals from '../../utils/globals';

/**
 * @abstract @class
 */
export default class TextInput extends InputField {
  constructor(...args) {
    super(...args);
    this.render = this.render.bind(this);
    this.inputEl = null; // To be set by subclasses
  }

  getResponse() {
    const response = ReactDOM.findDOMNode(this.refs.input).value;
    return response;
  }

  render() {
    const InputEl = this.inputEl;
    const handleInputChange = () => {
      if (this.props.ui.active) {
        // set inactive
        this.props.appControl.setQuestionCompleted(this.props.config.key, false);
      }
    };

    return (
      <div className={this.bemClass}>
        <InputEl
          className={`${this.bemSubComponent('input')} ${globals.FOCUS_CLASS}`}
          ref="input"
          type={this.type}
          defaultValue={this.props.question}
          placeholder={this.props.placeholder}

          onKeyDown={this.keyListener}
          onChange={handleInputChange}
          onBlur={() => this.saveResponse()}
          disabled={!this.props.ui.active}
        />
      </ div>
    );
  }
}
