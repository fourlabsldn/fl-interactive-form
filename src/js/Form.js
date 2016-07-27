import React from 'react';
import ReactBEM from './ReactBEM';
import clone from './utils/clone';
import assert from 'fl-assert';
import FormUI from './FormUI';

// The form will receive a config object which will describe the form fields.
// The form config contains an array of questions. The UI state object will
// mirror this questions array but will have the UI attributes for each form
// component.

// Config example:
const exampleConfig = { // eslint-disable-line
  questions: [{
    question: 'What is your name?',
    placeholder: 'My name is...',
    type: 'Text',
  }],
};

export default class Form extends ReactBEM {
  constructor(...args) {
    super(...args);

    // private
    this.generateInitialState = this.generateInitialState.bind(this);
    this.exportConfig = this.exportConfig.bind(this);

    // public
    this.setQuestionResponse = this.setQuestionResponse.bind(this);

    this.state = this.generateInitialState(this.props.config);
  }

  /**
   * Processes a config object from this.props and returns it.
   * @private
   * @method importConfig
   * @return {Object}
   */
  generateInitialState() {
    const config = clone(this.props.config);

    // Add a random key to all questions:
    for (const q of config.questions) {
      q.key = String(Date.now() + Math.random());
    }

    return { config };
  }

  exportConfig() {
    console.log(this.state);
    // To be implemented
  }

  /**
   * @public
   * @method setQuestionResponse
   * @param  {String} questionKey
   * @param  {} answerValue
   * @return Promise - will be resolved after the status is updated.
   */
  setQuestionResponse(questionKey, answerValue) {
    const qIndex = this.state.config.questions.findIndex(q => q.key === questionKey);
    assert(qIndex !== -1, `Did not find question with key: ${questionKey}`);

    const newConfig = clone(this.state.config);
    newConfig.questions[qIndex].answer = answerValue;

    return new Promise(resolve => this.setState({ config: newConfig }, resolve));
  }

  render() {
    const appControl = {
      setQuestionResponse: this.setQuestionResponse,
      exportConfig: this.exportConfig,
    };

    return <FormUI config={this.state.config} appControl={appControl} />;
  }
}

Form.PropTypes = {
  config: React.PropTypes.object.isRequired,
};
