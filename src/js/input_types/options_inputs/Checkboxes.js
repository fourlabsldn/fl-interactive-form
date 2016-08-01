import React from 'react';
import OptionsInput from './OptionsInput';
import globals from '../../utils/globals';

export default class Checkboxes extends OptionsInput {
  /**
   * @override
   * @method getResponse
   * @return {Array<Boolean>} Each index corresponds to an option index
   * selection value.
   */
  getResponse() {
    if (Array.isArray(this.props.config.answer)) {
      return Array.from(this.props.config.answer);
    }

    // Return array of same size as options but all elements as false
    return this.props.config.options.map(() => false);
  }

  /**
   * @override
   * @method isValidResponse
   * @param  {Array<Bool>} response
   * @return {Boolean}
   */
  isValidResponse(response) {
    if (!Array.isArray(response)) {
      return false;
    }

    // Make sure all responses are valid option indexes
    for (const r of response) {
      if (this.props.config.options[r] === undefined) {
        return false;
      }
    }

    return true;
  }

  generateOptions(options) {
    const checkboxClick = (index) => {
      const selectedOptions = this.getResponse();
      // Toggle selection
      selectedOptions[index] = !selectedOptions[index];
      this.saveResponseAndJumpToQuestion(selectedOptions, 'next');
    };

    const responses = this.getResponse();
    return options.map((option, index) => {
      const optionClasses = [this.bemSubComponent('option'), globals.FOCUS_CLASS];

      if (responses[index]) {
        optionClasses.push(this.bemSubComponentState('option', 'selected'));
      }

      return (
        <div
          className={optionClasses.join(' ')}
          key={`${this.props.config.key}${index}`}
          onClick={() => checkboxClick(index)}
          tabIndex="0"
        >
          {option}
        </div>
      );
    });
  }
}
