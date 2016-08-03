import React from 'react';
import ReactBEM from '../react_helpers/ReactBEM';
import Error from '../react_helpers/Error';
import TelephoneBox from './input_types/text_inputs/TelephoneBox';
import NumberBox from './input_types/text_inputs/NumberBox';
import EmailBox from './input_types/text_inputs/EmailBox';
import TextBox from './input_types/text_inputs/TextBox';
import TextArea from './input_types/text_inputs/TextArea';
import RadioBtns from './input_types/options_inputs/RadioBtns';
import Checkboxes from './input_types/options_inputs/Checkboxes';
import Dropdown from './input_types/options_inputs/Dropdown';

const inputTypes = {
  TextBox,
  TextArea,
  RadioBtns,
  Checkboxes,
  Dropdown,
  EmailBox,
  NumberBox,
  TelephoneBox,
};


export default class FormField extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleClick() {
    if (!this.props.ui.active) {
      this.props.appControl.setFieldActive(this.props.config.key);
    }
  }

  /**
   * Shows error and returns error message
   * @method validate
   * @return {String} Error message
   */
  async validate() {
    const response = this.refs.input.getResponse();
    const error = this.refs.input.validateResponse(response);
    if (error) {
      await this.refs.input.showError(error);
    }
    return error;
  }

  render() {
    // assert(
    //   typeof inputTypes[this.props.config.type] !== 'undefined',
    //   `Invalid input type: ${this.props.config.type}`
    // );

    const classNames = [this.bemClass];
    if (this.props.ui.active) {
      classNames.push(this.bemState('active'));
    }
    if (this.props.ui.completed) {
      classNames.push(this.bemState('completed'));
    }

    const inputProps = {
      ui: this.props.ui,
      config: this.props.config,
      appControl: this.props.appControl,
      key: this.props.config.key,
      ref: 'input',
    };
    const inputType = this.props.config.type;
    const errorMsg = this.props.ui.error;
    const error = errorMsg
      ? <Error speechBubble> {errorMsg} </ Error>
      : null;

    return (
      <div className={classNames.join(' ')} onClick={this.handleClick}>

        <p className={this.bemSubComponent('legend')}>
          <i className={`fa fa-check-circle ${this.bemSubComponent('okIcon')}`} />
          {this.props.config.title}
        </p>

        {React.createElement(inputTypes[inputType], inputProps)}

        {error}

      </div>
    );
  }
}

FormField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
