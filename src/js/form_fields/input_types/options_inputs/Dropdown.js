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
    // We subtract one because we are adding a placeholder option which
    // should not count in the response
    const selectedOption = this.refs.selectionBox.selectedIndex - 1;
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
    const generateOptionElement = (option, disabled, index) =>
    (
      <option
        key={`${this.props.config.key}${index}`}
        tabIndex="0"
        disabled={disabled}
        value={option.value}
      >
        {option.caption}
      </option>
    );

    const optionEls = options.map(
      (option, index) =>
        generateOptionElement(
          option,
          disabledIndexes.indexOf(index) !== -1,
          index
        )
      );

    const placeholderOption = generateOptionElement(
      { caption: "Select an option", value: "Select an option" },
      true,
      -1
    );

    const optionElsWithPlaceholder = [placeholderOption, ...optionEls];

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
        {optionElsWithPlaceholder}
      </ select>
    );
  }
  }
