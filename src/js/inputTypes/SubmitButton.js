import React from 'react';
import ReactBEM from '../ReactBEM';

export default class SubmitButton extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Focus element when turned active
    if (nextProps.ui.active) {
      // We need a timeout to make the focus work.
      setTimeout(() => this.refs.button.focus(), 15);
    }
  }

  render() {
    const buttonClass = this.props.ui.active
      ? `${this.bemClass} ${this.bemState('active')}`
      : `${this.bemClass}`;

    return (
      <div className={buttonClass}>
        <button className={this.bemSubComponent('button')} ref="button">
          Submit
        </button>
      </div>
    );
  }
}

SubmitButton.PropTypes = {
  appControl: React.PropTypes.object.isRequired,
  ui: React.PropTypes.object.isRequired,
};
