import React from 'react';
import ReactBEM from './ReactBEM';
import assert from 'fl-assert';
import TextBox from './input_types/text_inputs/TextBox';
import TextArea from './input_types/text_inputs/TextArea';
import RadioBtns from './input_types/options_inputs/RadioBtns';

const inputTypes = { TextBox, TextArea, RadioBtns };

export default class FormField extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.ui.active) {
      this.props.appControl.setQuestionActive(this.props.config.key);
    }
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
    };

    let inputType;
    switch (this.props.config.type) {
      case 'EmailBox':
        inputType = 'TextBox';
        break;
      case 'NumberBox':
        inputType = 'TextBox';
        break;
      case 'TelephoneBox':
        inputType = 'TextBox';
        break;
      case 'TextBox':
        inputType = 'TextBox';
        break;
      case 'TextArea':
        inputType = 'TextArea';
        break;
      case 'Checkboxes':
        inputType = 'RadioBtns';
        break;
      case 'Dropdown':
        inputType = 'RadioBtns';
        break;
      case 'RadioBtns':
        inputType = 'RadioBtns';
        break;
      default:
        assert(false, `Invalid type ${this.props.config.type}`);
    }

    return (
      <div className={classNames.join(' ')} onClick={this.handleClick}>
        <p className={this.bemSubComponent('legend')}>
          <i className={`fa fa-check-circle ${this.bemSubComponent('okIcon')}`} />
          {this.props.config.title}
        </p>
        {React.createElement(inputTypes[inputType], inputProps)}
      </div>
    );
  }
}

FormField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
