import React from 'react';
import ReactBEM from '../ReactBEM';
import ReactDOM from 'react-dom';

export default class Text extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.keyListener = this.keyListener.bind(this);
    this.sendResponse = this.sendResponse.bind(this);

    this.inputEl = 'input';
  }

  componentWillReceiveProps(nextProps) {
    // Focus element when turned active
    if (nextProps.ui.active) {
      const inputEl = ReactDOM.findDOMNode(this.refs.input);

      // Already has the focus
      if (window.activeElement === inputEl) { return; }

      // We need a timeout to make the focus work.
      setTimeout(() => inputEl.focus(), 15);
    }
  }

  keyListener(e) {
    const enterKey = 13;
    // Allow for line-break holding shift key
    if (e.keyCode === enterKey && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      this.sendResponse();
    }
  }

  async sendResponse() {
    this.props.appControl.setQuestionResponse(
      this.props.config.key,
      this.refs.input.value
    );

    await this.props.appControl.setQuestionCompleted(
      this.props.config.key,
      true
    );

    // Now we wait for the animation to finish before going to
    // the next question.
    const animDuration = 500;
    setTimeout(() => this.props.appControl.focusQuestion('next'), animDuration);
  }

  render() {
    const InputEl = this.inputEl;
    const handleInputChange = () => {
      if (this.props.ui.active) {
        // set inactive
        this.props.appControl.setQuestionCompleted(this.props.config.key, false);
      }
    };

    const okBtnClasses = this.props.ui.completed
      ? `${this.bemSubComponent('okButton')} ${this.bemSubComponentState('okButton', 'completed')}`
      : `${this.bemSubComponent('okButton')}`;

    return (
      <div className={this.bemClass}>
        <InputEl
          className={this.bemSubComponent('input')}
          ref="input"
          type="text"
          defaultValue={this.props.question}
          placeholder={this.props.placeholder}
          onKeyDown={this.keyListener}
          onChange={handleInputChange}
        />

        <div className={this.bemSubComponent('okButtonContainer')}>
          <button className={okBtnClasses} onClick={this.sendResponse} >
            Ok
          </button>
        </div>
      </ div>
    );
  }
}

Text.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
