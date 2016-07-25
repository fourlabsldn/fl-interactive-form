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

    const input = React.createElement(
      inputTypes[this.props.config.type],
      { appControl: this.props.appControl }
    );

    const classNames = [this.bemClass];
    if (this.props.config.active) {
      classNames.push(this.bemState('active'));
    }

    return (
      <div className={classNames.join(' ')}>
        <p className={this.bemSubComponent('legend')}>Legend for the question</p>

        <div className={this.bemSubComponent('input')}>
          {input}
        </div>

        <div className={this.bemSubComponent('okButtonContainer')}>
          <button className={this.bemSubComponent('okButton')}>Click me</button>
        </div>
      </div>
    );
  }
}

FormField.PropTypes = {
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
