import React from 'react';
import InputField from './InputField';

export default class RadioBtns extends InputField {
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
      const inputId = `${this.props.config.key}${index}`;
      return (
        <div
          className={this.bemSubComponent('optionWrapper')}
          key={`${this.props.config.key}${index}`}
        >
          <input
            className={this.bemSubComponent('option', 'input')}
            type="radio"
            name={this.props.config.key}
            id={inputId}
          />
          <label
            htmlFor={inputId}
            className={this.bemSubComponent('option')}
          >
            {option}
          </label>
        </div>
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
