import React from 'react';
import ReactBEM from '../ReactBEM';

export default class Textarea extends ReactBEM {
  render() {
    return (
      <textarea
        className={this.bemClass}
        type="text"
        defaultValue={this.props.value}
        placeholder={this.props.placeholder}
      />);
  }
}
