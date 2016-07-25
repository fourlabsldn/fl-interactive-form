import React from 'react';
import ReactBEM from './ReactBEM';


export default class FormField extends ReactBEM {
  render() {
    return (
      <div className={this.bemClass}>
        <p className={this.bemSubComponent('legend')}>Legend for the question</p>

        <div className={this.bemSubComponent('input')}>
          <input
            type="text"
            placeholder={this.props.config.placeholder}
            className="slv-text-input js-slv-focus"
          />
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
