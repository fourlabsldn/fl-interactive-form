import React from 'react';
import ReactBEM from '../ReactBEM';

export default class Textarea extends ReactBEM {
  render() {
    const val = this.props.value;
    return <textarea className={this.bemClass} value={val} />;
  }
}
