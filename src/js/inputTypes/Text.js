import React from 'react';
import ReactBEM from '../ReactBEM';

export default class Text extends ReactBEM {
  render() {
    return (
      <input
        className={this.bemClass}
        type="text"
        defaultValue={this.props.value}
        placeholder={this.props.placeholder}
      />);
  }
}
