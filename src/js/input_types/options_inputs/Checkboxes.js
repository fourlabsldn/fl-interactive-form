import React from 'react';
import OptionsInput from './OptionsInput';
import globals from '../../utils/globals';

export default class Checkboxes extends OptionsInput {
  constructor(...args) {
    super(...args);
    this.checkboxClick = this.checkboxClick.bind(this);
  }

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
    return Array.isArray(response) &&
      // correct length
      response.length === this.props.config.options.length &&
      // All values are boolean
      response.reduce(
        (valid, r) => valid && typeof r === 'boolean',
        true
      );
  }

  /**
   * @private
   * @method checkboxClick
   * @param  {Int} index - clicked option index
   * @return {void}
   */
  checkboxClick(index) {
    const selectedOptions = this.getResponse();
    // Toggle selection
    selectedOptions[index] = !selectedOptions[index];
    this.saveResponse(selectedOptions);
  }

  /**
   * @override
   * @method generateOptions
   * @param  {Array<String>} options
   * @return {Array<ReactDOMElements}
   */
  generateOptions(options) {
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
          onClick={() => this.checkboxClick(index)}
          tabIndex="0"
        >
          {option}
        </div>
      );
    });
  }
}
