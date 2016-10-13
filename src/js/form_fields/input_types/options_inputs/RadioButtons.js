import React from 'react';
import OptionsInput from './OptionsInput';
import globals from '../../../utils/globals';

export default class RadioButtons extends OptionsInput {
  /**
   * @method getResponse
   * @return {Int} Response index
   */
  getResponse() {
    // Even though radio buttons only have one response, all option
    // input elements hold their responses in an array.
    const anwerArray = this.props.config.answer;
    return anwerArray ? anwerArray[0] : undefined;
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

      const response = this.getResponse();
      if (index === response) {
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
