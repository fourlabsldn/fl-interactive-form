import React from 'react';
import InputField from './InputField';

export default class Radio extends InputField {
  getResponse() {
    return this.refs.focusElement.value;
  }

  render() {
    const handleInputChange = () => {
      if (this.props.ui.active) {
        // set inactive
        this.props.appControl.setQuestionCompleted(this.props.config.key, false);
      }
    };

    const options = this.props.config.options.map((option, index) => {
      return (
        <span
          className={this.bemSubComponent('option')}
          key={`${this.props.config.key}${index}`}
        >
          <input
            type="radio"
            name={this.props.config.key}
          />
          {option}
        </span>
      );
    });

    return (
      <div
        className={this.bemClass}
        ref="focusElement"
        onKeyDown={this.keyListener}
        onChange={handleInputChange}
        onBlur={this.sendResponse}
      >
        {options}
      </ div>
    );
  }
}
