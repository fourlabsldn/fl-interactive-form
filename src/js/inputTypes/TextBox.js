import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';

export default class TextBox extends InputField {
  constructor(...args) {
    super(...args);
    this.inputEl = 'input';
  }

  getResponse() {
    const response = ReactDOM.findDOMNode(this.refs.focusElement).value;
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
          className={`${this.bemSubComponent('input')} fl-if_focusMe`}
          ref="focusElement"
          type="text"
          defaultValue={this.props.question}
          placeholder={this.props.placeholder}

          onKeyDown={this.keyListener}
          onChange={handleInputChange}
          onBlur={() => this.sendResponse()}
          disabled={!this.props.ui.active}
        />
      </ div>
    );
  }
}
