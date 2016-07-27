import React from 'react';
import ReactBEM from '../ReactBEM';
import ReactDOM from 'react-dom';

export default class InputField extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.keyListener = this.keyListener.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.isValidResponse = this.isValidResponse.bind(this);
    this.sendResponse = this.sendResponse.bind(this);
    this.sendResponseWithAnimation = this.sendResponseWithAnimation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Focus element when turned active
    if (nextProps.ui.active) {
      const focusElement = ReactDOM.findDOMNode(this.refs.focusElement);

      // Already has the focus
      if (window.activeElement === focusElement) { return; }

      // We need a timeout to make the focus work.
      setTimeout(() => focusElement.focus(), 15);
    }
  }

  async keyListener(e) { // eslint-disable-line complexity
    const up = 38;
    const down = 40;
    const tab = 9;
    const enter = 13;

    if (e.ctrlKey) { return; }
    if (e.shiftKey && e.keyCode !== tab) { return; }

    let jumpDirection;
    if (e.keyCode === enter) {
      jumpDirection = 'next';
    } else if (e.keyCode === up) {
      jumpDirection = 'prev';
    } else if (e.keyCode === down) {
      jumpDirection = 'next';
    } else if (e.keyCode === tab && e.shiftKey) {
      jumpDirection = 'prev';
    } else if (e.keyCode === tab) {
      jumpDirection = 'next';
    } else {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    this.sendResponseWithAnimation(this.getResponse(), jumpDirection);
  }


  /**
   * Saves question response and animates according to the validation outcome.
   * @method sendResponseWithAnimation
   * @param  {String} jumpDirection
   * @return {Promise}
   */
  async sendResponseWithAnimation(response, jumpDirection = 'next') {
    const previouseCompletedState = this.props.ui.completed;
    await this.sendResponse(response);

    // Now there will be a render pass and this element will be set to completed
    // we wait for the animation to finish before going to the next question.
    let animDuration = 0;
    if (!previouseCompletedState && this.props.ui.completed) {
      animDuration = 500;
    }

    setTimeout(() => this.props.appControl.focusQuestion(jumpDirection), animDuration);
  }


  // To be overriden by subclasses
  getResponse() {
    return this.refs.focusElement.value;
  }

  // To be overriden by subclasses
  isValidResponse(response) {
    return !!response;
  }

  async sendResponse(response = this.getResponse()) {
    if (!this.isValidResponse(response)) {
      // TODO: show error.
      console.log('Invalid response');
      return;
    }

    this.props.appControl.setQuestionResponse(
      this.props.config.key,
      response
    );

    await this.props.appControl.setQuestionCompleted(
      this.props.config.key,
      true
    );
  }
}

InputField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
