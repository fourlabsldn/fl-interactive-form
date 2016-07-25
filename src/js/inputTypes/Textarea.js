import React from 'react';
import Text from './Text';

export default class Textarea extends Text {
  render() {
    return (
      <div className={this.bemClass}>
        <textarea
          className={this.bemSubComponent('input')}
          ref="input"
          type="text"
          defaultValue={this.props.question}
          placeholder={this.props.placeholder}
          onKeyDown={this.keyListener}
        />

        <div className={this.bemSubComponent('okButtonContainer')}>
          {this.getOkButton()}
        </div>
      </ div>
    );
  }
}
