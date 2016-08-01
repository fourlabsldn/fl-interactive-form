import React from 'react';
import OptionsInput from './OptionsInput';
import globals from '../../utils/globals';
import assert from 'fl-assert';

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
   * @method validateResponse
   * @param  {Array<Bool>} response
   * @return {String} - Error message.
   */
  validateResponse(response) {
    if (!this.isRequired()) { return null; }
    if (!Array.isArray(response)) {
      return 'This field must be filled';
    }

    assert(response.length === this.props.config.options.length,
      `Invalid response array. Response of length ${response.length}
       and options with length ${this.props.config.options.length}`);

       // All values are boolean
    assert(
      response.reduce((valid, r) => valid && typeof r === 'boolean', true),
      'Response array has non-boolean values'
    );

    // If it is required, it must contain at least on checked opiton;
    const checkedOptionCount = response.filter(r => !!r).length;

    if (checkedOptionCount === 0) {
      return 'You must check at least one option.';
    }

    return null;
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
