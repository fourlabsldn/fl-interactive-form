import React from 'react';
import ReactBEM from './ReactBEM';
import assert from 'fl-assert';
import Text from './inputTypes/Text';
import Textarea from './inputTypes/Textarea';

const inputTypes = { Text, Textarea };

export default class FormField extends ReactBEM {
  render() {
    assert(
      typeof inputTypes[this.props.config.type] !== 'undefined',
      `Invalid input type: ${this.props.config.type}`
    );

    const classNames = this.props.config.active
      ? [this.bemClass, this.bemState('active')]
      : [this.bemClass];

    const inputProps = {
      config: this.props.config,
      appControl: this.props.appControl,
    };

    return (
      <div className={classNames.join(' ')}>
        <p className={this.bemSubComponent('legend')}>{this.props.config.question}</p>
        {React.createElement(inputTypes[this.props.config.type], inputProps)}
      </div>
    );
  }
}

FormField.PropTypes = {
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
