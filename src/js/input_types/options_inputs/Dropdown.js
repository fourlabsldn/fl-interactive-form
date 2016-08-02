import React from 'react';
import OptionsInput from './OptionsInput';
import globals from '../../utils/globals';

export default class Dropdown extends OptionsInput {
  /**
   * @override
   * @method getResponse
   * @return {Array<Boolean>} Each index corresponds to an option index
   * selection value.
   */
  getResponse() {

  }

  /**
   * @override
   * @method validateResponse
   * @param  {Array<Bool>} response
   * @return {String} - Error message.
   */
  validateResponse(response) {

  }


  /**
   * @override
   * @method generateOptions
   * @param  {Array<String>} options
   * @return {Array<ReactDOMElements}
   */
  generateOptions(options) {
    const optionEls = options.map((option, index) => {
      return (
        <option
          key={`${this.props.config.key}${index}`}
          tabIndex="0"
        >
          {option}
        </option>
      );
    });

    const classes = [this.bemSubComponent('option'), globals.FOCUS_CLASS].join(' ');
    return (<select className={classes}> {optionEls} </ select>);
  }
}
