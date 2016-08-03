import React from 'react';
import OptionsInput from './OptionsInput';
import globals from '../../../utils/globals';

export default class RadioBtns extends OptionsInput {
  getResponse() {
    return this.props.config.answer;
  }

  validateResponse(response) {
    if (
      !this.isRequired() ||
      this.props.config.options[response] !== undefined
    ) {
      return null;
    }
    return 'You must choose at lease one option';
  }

  generateOptions(options) {
    return options.map((option, index) => {
      const optionClasses = [
        this.bemSubComponent('option'),
        this.bemSubComponent('radio'),
        globals.FOCUS_CLASS,
      ];

      if (index === this.getResponse()) {
        optionClasses.push(this.bemSubComponentState('option', 'selected'));
      }

      return (
        <div
          className={optionClasses.join(' ')}
          key={`${this.props.config.key}${index}`}
          onClick={() => this.saveResponseAndJumpToQuestion([index], 'next')}
          tabIndex="0"
        >
          {option}
        </div>
      );
    });
  }
}
