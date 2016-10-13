import React from 'react';
import OptionsInput from './OptionsInput';
import globals from '../../../utils/globals';

export default class Dropdown extends OptionsInput {
  constructor(...args) {
    super(...args);

    this.onChange = this.onChange.bind(this);
    /** @override */
    this.bemClass = `${this.bemClass} fl-if_Dropdown`;
  }

  /**
   * @override
   * @method validateResponse
   * @param  {Array<Bool>} response
   * @return {String} - Error message.
   */
  validateResponse(response = this.getResponse()) {
    if (this.isRequired() && !response) {
      return 'Please choose an option';
    }

    return false;
  }

  onChange() {
    const selectedOption = this.refs.selectionBox.selectedIndex;
    this.saveResponseAndJumpToQuestion(selectedOption, 'next');
  }


  /**
   * @override
   * @method generateOptions
   * @param  {Array<String>} options
   * @return {Array<ReactDOMElements}
   */
  generateOptions(options) {
    const disabledIndexes = this.props.config.disabledIndexes || [];
    const optionEls = options.map((option, index) => {
      const disabled = disabledIndexes.includes(index);
      return (
        <option
          key={`${this.props.config.key}${index}`}
          tabIndex="0"
          disabled={disabled}
        >
          {option}
        </option>
      );
    });

    const classes = [
      this.bemSubComponent('option'),
      globals.FOCUS_CLASS,
    ].join(' ');

    const additionalProps = {};

    // If no answer was given, let's force the first option as selected
    // because it might be a placeholder, which is set to disabled and would
    // normally not be selected.
    const currResponse = this.getResponse();
    if (currResponse === null || currResponse === undefined) {
      additionalProps.value = 0;
    }

    return (
      <select
        className={classes}
        onChange={this.onChange}
        ref="selectionBox"
        {...additionalProps}
      >
        {optionEls}
      </ select>
    );
  }
}
