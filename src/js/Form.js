import React from 'react';
import ReactBEM from './ReactBEM';
import FormField from './FormField';
import clone from './utils/clone';
import NavigationBar from './NavigationBar';


export default class Form extends ReactBEM {
  constructor(...args) {
    super(...args);
    this.importConfig = this.importConfig.bind(this);
    this.exportConfig = this.exportConfig.bind(this);
    this.importConfig();
    this.state.activeQuestionKey = this.state.questions[0].key;
  }

  /**
   * Gets a config object from this.props and processes it.
   * @private
   * @method importConfig
   * @return {void}
   */
  importConfig() {
    const conf = clone(this.props.config);

    // Add random key to all questions:
    for (const q of conf.questions) {
      q.key = String(Date.now() + Math.random());
    }

    this.state = conf;
  }

  exportConfig() {

  }

  render() {
    const appControl = {
      focusNextQuestion: () => null,
      focusPreviousQuestion: () => null,
    };

    const questions = this.state.questions.map(q => {
      return (
        <FormField
          config={q}
          appControl={appControl}
          key={q.key}
          active={this.state.activeQuestionKey === q.key}
        />);
    });

    return (
      <div className={this.bemClass} >

        <div className={this.bemSubComponent('questionsViewBox')} >
          <div className={this.bemSubComponent('questions')} >
            {questions}
          </div>
        </div>

        <NavigationBar appControl={appControl} />
      </div>
    );
  }
}

Form.PropTypes = {
  config: React.PropTypes.object.isRequired,
};
