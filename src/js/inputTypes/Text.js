import React from 'react';
import ReactBEM from '../ReactBEM';
import ReactDOM from 'react-dom';

export default class Text extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Focus element when turned active
    if (nextProps.config.active) {
      const inputEl = ReactDOM.findDOMNode(this.refs.input);

      // We need a timeout to make the focus work.
      setTimeout(() => inputEl.focus(), 15);
    }
  }

  render() {
    return (
      <div className={this.bemClass}>
        <input
          className={this.bemSubComponent('input')}
          ref="input"
          type="text"
          defaultValue={this.props.question}
          placeholder={this.props.placeholder}
        />

        <div className={this.bemSubComponent('okButtonContainer')}>
          <button className={this.bemSubComponent('okButton')}>Click me</button>
        </div>
      </ div>
    );
  }
}
