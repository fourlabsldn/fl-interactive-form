import React from 'react';
import ReactBEM from '../../react_helpers/ReactBEM';

export default class InputField extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.keyListener = this.keyListener.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.validateResponse = this.validateResponse.bind(this);
    this.saveResponse = this.saveResponse.bind(this);
    this.saveResponseAndJumpToQuestion = this.saveResponseAndJumpToQuestion.bind(this);
    this.isRequired = this.isRequired.bind(this);
    this.keyPrev = this.keyPrev.bind(this);
    this.keyNext = this.keyNext.bind(this);
    this.keySelect = this.keySelect.bind(this);
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

    // We will not move to the next question if there is an error.
    const err = this.validateResponse(response);
    if (err) { return; }

    // Now there will be a render pass and this element will be set to completed
    // we wait for the animation to finish before going to the next question.
    let animDuration = 0;
    if (!previouslyCompletedState && this.props.ui.completed) {
      animDuration = 500;
    }

    setTimeout(() => this.props.appControl.goToField(jumpDirection), animDuration);
  }


  // To be overriden by subclasses
  getResponse() {
    throw new Error('Standard class not overriden');
  }

  /**
   * @private
   * @method isRequired
   * @return {Boolean}
   */
  isRequired() {
    return this.props.config.required;
  }

  /**
   * @private
   * @method validateResponse
   * @param  {Array | String | Int} response
   * @return {String} Returns an error message, if there is an error.
   * If there is no error it returns a falsy value.
   */
  validateResponse(response = this.getResponse()) {
    if (this.isRequired() && !response) {
      return 'Field must be filled.';
    }
    return null;
  }

  /**
   * Saves the response and sets the field as completed. No animation
   * @method saveResponse
   * @param  {Int | String | Array} response
   * @return {Promise}
   */
  async saveResponse(response = this.getResponse()) {
    this.props.appControl.setQuestionResponse(
      this.props.config.key,
      response
    );

    // Show error if there is any
    const err = this.validateResponse(response);
    await this.showError(err);

    await this.props.appControl.setQuestionCompleted(
      this.props.config.key,
      !err
    );
  }

  keyListener(e) { // eslint-disable-line complexity
    const up = 38;
    const down = 40;
    const tab = 9;
    const enter = 13;

    if (e.ctrlKey) { return; }
    if (e.shiftKey && e.keyCode !== tab) { return; }
    if (e.keyCode === enter) {
      this.keySelect();
    } else if (e.keyCode === up) {
      this.keyPrev();
    } else if (e.keyCode === down) {
      this.keyNext();
    } else if (e.keyCode === tab && e.shiftKey) {
      this.keyPrev();
    } else if (e.keyCode === tab) {
      this.keyNext();
    } else {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
  }

  keyPrev() {
    const response = this.getResponse();
    this.saveResponseAndJumpToQuestion(response, 'prev');
  }

  keyNext() {
    const response = this.getResponse();
    this.saveResponseAndJumpToQuestion(response, 'next');
  }

  keySelect() {
    this.keyNext();
  }

  async showError(message) {
    return await this.props.appControl.setFieldError(this.props.config.key, message);
  }
}

InputField.PropTypes = {
  ui: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
