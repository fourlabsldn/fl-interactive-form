import React from 'react';
import ReactBEM from '../ReactBEM';

export default class InputField extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.keyListener = this.keyListener.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.isValidResponse = this.isValidResponse.bind(this);
    this.saveResponse = this.saveResponse.bind(this);
    this.saveResponseAndJumpToQuestion = this.saveResponseAndJumpToQuestion.bind(this);
  }

  /**
   * Saves question response and animates to the next
   * field according to the validation outcome.
   * @method saveResponseAndJumpToQuestion
   * @param  {String} jumpDirection
   * @return {Promise}
   */
  async saveResponseAndJumpToQuestion(response, jumpDirection = 'next') {
    const previouslyCompletedState = this.props.ui.completed;
    await this.saveResponse(response);

    // Now there will be a render pass and this element will be set to completed
    // we wait for the animation to finish before going to the next question.
    let animDuration = 0;
    if (!previouslyCompletedState && this.props.ui.completed) {
      animDuration = 500;
    }

    setTimeout(() => this.props.appControl.focusQuestion(jumpDirection), animDuration);
  }


  // To be overriden by subclasses
  getResponse() {
    throw new Error('Standard class not overriden');
  }

  // To be overriden by subclasses
  isValidResponse(response) {
    return !!response;
  }

  /**
   * Saves the response and sets the field as completed. No animation
   * @method saveResponse
   * @param  {Int | String | Array} response
   * @return {Promise}
   */
  async saveResponse(response = this.getResponse()) {
    if (!this.isValidResponse(response)) {
      // TODO: show error.
      // console.log('Invalid response');
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

  keyListener(e) { // eslint-disable-line complexity
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

    const response = this.getResponse();
    this.saveResponseAndJumpToQuestion(response, jumpDirection);
  }
}

InputField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
