import React from 'react';
import InputField from './InputField';

export default class RadioBtns extends InputField {
  getResponse() {
    return this.props.config.answer;
  }

  isValidResponse(response) {
    return this.props.config.options[response] !== undefined;
  }

  render() {
    const handleInputChange = () => {
      if (this.props.ui.active) {
        // set inactive
        this.props.appControl.setQuestionCompleted(this.props.config.key, false);
      }
    };

    const options = this.props.config.options.map((option, index) => {
      const optionClasses = [this.bemSubComponent('option')];
      if (index === this.getResponse()) {
        optionClasses.push(this.bemSubComponentState('option', 'selected'));
      }

      return (
        <div
          className={optionClasses.join(' ')}
          key={`${this.props.config.key}${index}`}
          onClick={() => this.sendResponseWithAnimation(index, 'next')}
          ref={index === 0 ? 'focusElement' : null}
        >
          {option}
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
