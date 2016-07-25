import React from 'react';
import ReactBEM from '../ReactBEM';
import ReactDOM from 'react-dom';

export default class Text extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.keyListener = this.keyListener.bind(this);
    this.sendResponse = this.sendResponse.bind(this);
    this.getOkButton = this.getOkButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Focus element when turned active
    if (nextProps.config.active) {
      const inputEl = ReactDOM.findDOMNode(this.refs.input);

      // We need a timeout to make the focus work.
      setTimeout(() => inputEl.focus(), 15);
    }
  }

  keyListener(e) {
    const enterKey = 13;
    // Allow for line-break holding shift key
    if (e.keyCode === enterKey && !e.shiftKey) {
      this.sendResponse();
    }
  }

  async sendResponse() {
    await this.props.appControl.setQuestionResponse(
      this.props.config.key,
      this.refs.input.value
    );

    // Now we wait for the animation to finish before going to
    // the next question.
    const animDuration = 500;
    setTimeout(() => this.props.appControl.focusQuestion('next'), animDuration);
  }

  getOkButton() {
    const butonClasses = this.props.config.completed
      ? [this.bemSubComponent('okButton'), this.bemSubComponentState('okButton', 'completed')]
      : [this.bemSubComponent('okButton')];
    const btnClassName = butonClasses.join(' ');
    return (
      <button className={btnClassName} onClick={this.sendResponse} >
        Ok
      </button>
    );
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
          onKeyDown={this.keyListener}
        />

        <div className={this.bemSubComponent('okButtonContainer')}>
          {this.getOkButton()}
        </div>
      </ div>
    );
  }
}
