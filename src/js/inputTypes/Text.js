import React from 'react';
import ReactBEM from '../ReactBEM';

export default class Text extends ReactBEM {
  render() {
    const val = this.props.value;
    return <input className={this.bemClass} type="text" value={val} />;
  }
}
