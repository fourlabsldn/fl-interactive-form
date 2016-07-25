import React from 'react';
import ReactBEM from './ReactBEM';
import FormField from './FormField';
import translationManager from './utils/translationManager';
import clone from './utils/clone';
import NavigationBar from './NavigationBar';
import AnimationManager from './utils/AnimationManager';

export default class Form extends ReactBEM {
  constructor(...args) {
    super(...args);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.processConfig = this.processConfig.bind(this);
    this.exportConfig = this.exportConfig.bind(this);
    this.setActiveQuestion = this.setActiveQuestion.bind(this);
    this.focusNextQuestion = this.focusNextQuestion.bind(this);
    this.focusQuestionWithIndex = this.focusQuestionWithIndex.bind(this);

    this.state = {
      config: this.processConfig(this.props.config),
    };
  }

  componentDidMount() {
    this.setActiveQuestion(0);
    const centerActiveQuestion =
      () => this.focusQuestionWithIndex(this.getActiveQuestionIndex());
    const animation = new AnimationManager();

    window.addEventListener(
      'resize',
      () => animation.schedule(centerActiveQuestion, 'formResize', 20)
    );
  }

  /**
   * Processes a config object from this.props and returns it.
   * @private
   * @method importConfig
   * @return {Object}
   */
  processConfig() {
    const conf = clone(this.props.config);

    // Add random key to all questions:
    for (const q of conf.questions) {
      q.key = String(Date.now() + Math.random());
    }

    return conf;
  }

  exportConfig() {
    // To be implemented
  }

  focusNextQuestion() {
    const activeQuestionIndex = this.getActiveQuestionIndex();
    let nextQuestionIndex;
    if (activeQuestionIndex === -1) {
      nextQuestionIndex = 0;
    } else {
      nextQuestionIndex = (activeQuestionIndex + 1) % this.state.config.questions.length;
    }

    this.focusQuestionWithIndex(nextQuestionIndex);
    this.setActiveQuestion(nextQuestionIndex);
  }

  focusQuestionWithIndex(index) {
    const questionToFocus = this.refs.questions.children[index];

    const questionHeight = questionToFocus.clientHeight;
    const viewBoxHeight = this.refs.questionsViewBox.clientHeight;
    // how much lower than the container will it end up.
    const displacementFromContainerTop = Math.max(0, (viewBoxHeight - questionHeight) / 2);

    const questionTop = questionToFocus.getBoundingClientRect().top;
    const viewBoxTop = this.refs.questionsViewBox.getBoundingClientRect().top;
    const questionOffsetFromViewBox = questionTop - viewBoxTop;

    const translationYNeeded = displacementFromContainerTop - questionOffsetFromViewBox;
    const translationXNeeded = 0;
    translationManager.addTranslation(
      this.refs.questions,
      translationXNeeded,
      translationYNeeded
    );
  }

  setActiveQuestion(index = 0) {
    const newConfig = clone(this.state.config);
    for (const q of newConfig.questions) {
      q.active = false;
    }

    newConfig.questions[index].active = true;
    this.setState({ config: newConfig });
  }

  getActiveQuestionIndex() {
    return this.state.config.questions.findIndex(q => q.active === true);
  }

  render() {
    const appControl = {
      focusNextQuestion: this.focusNextQuestion,
      focusPreviousQuestion: () => null,
    };

    const questions = this.state.config.questions.map(q => {
      return (
        <FormField
          config={q}
          appControl={appControl}
          key={q.key}
        />);
    });

    return (
      <div className={this.bemClass} >

        <div className={this.bemSubComponent('questionsViewBox')} ref="questionsViewBox">
          <div className={this.bemSubComponent('questions')} ref="questions" >
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
