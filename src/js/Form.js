import React from 'react';
import ReactBEM from './ReactBEM';
import FormField from './FormField';
import translationManager from './utils/translationManager';
import clone from './utils/clone';
import NavigationBar from './NavigationBar';
import AnimationManager from './utils/AnimationManager';
import throttle from './utils/throttle';

export default class Form extends ReactBEM {
  constructor(...args) {
    super(...args);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.processConfig = this.processConfig.bind(this);
    this.exportConfig = this.exportConfig.bind(this);
    this.setActiveQuestion = this.setActiveQuestion.bind(this);
    this.focusQuestion = throttle(this.focusQuestion.bind(this), 250);
    this.focusQuestionWithIndex = this.focusQuestionWithIndex.bind(this);
    this.keyNavigation = this.keyNavigation.bind(this);

    this.animations = new AnimationManager();
    this.state = {
      config: this.processConfig(this.props.config),
    };
  }

  componentDidMount() {
    const centerActiveQuestion =
      () => this.focusQuestionWithIndex(this.getActiveQuestionIndex());

    window.addEventListener(
      'resize',
      () => this.animations.schedule(centerActiveQuestion, 'formResize', 20)
    );

    this.animations.schedule(() => this.setActiveQuestion(0), '', 30);
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

  /**
   * @public
   * Moves the focus to the next or previous question
   * @method focusQuestion
   * @param  {String} prevNext
   * @return {void}
   */
  focusQuestion(prevNext) {
    const next = prevNext === 'next';
    const active = this.getActiveQuestionIndex();
    const questionCount = this.state.config.questions.length;
    const changedIndex = active + (next ? +1 : -1);
    // Restrict changed index between 0 and questionCount - 1
    const nextQuestionIndex = Math.max(0, Math.min(questionCount - 1, changedIndex));
    this.setActiveQuestion(nextQuestionIndex);
    this.focusQuestionWithIndex(nextQuestionIndex);
  }

  /**
   * @private
   * @method focusQuestionWithIndex
   * @param  {Int} index
   * @return {void}
   */
  focusQuestionWithIndex(index) {
    const questionToFocus = this.refs.questions.children[index];

    const questionHeight = questionToFocus.clientHeight;
    const viewBoxHeight = this.refs.questionsViewBox.clientHeight;
    // how much lower than the container will it end up.
    const displacementFromContainerTop = Math.max(0, (viewBoxHeight - questionHeight) / 2);
    const viewBoxTop = this.refs.questionsViewBox.getBoundingClientRect().top;
    const questionOffsetFromViewBox = questionToFocus.offsetTop - viewBoxTop;

    const translationYNeeded = displacementFromContainerTop - questionOffsetFromViewBox;
    const translationXNeeded = 0;
    translationManager.setTranslation(
      this.refs.questions,
      translationXNeeded,
      translationYNeeded
    );
  }

  /**
   * @private
   * @method setActiveQuestion
   * @param  {Int} index
   */
  setActiveQuestion(index = 0) {
    const newConfig = clone(this.state.config);
    for (const q of newConfig.questions) {
      q.active = false;
    }

    newConfig.questions[index].active = true;
    this.setState({ config: newConfig });
  }

  /**
   * @private
   * @method getActiveQuestionIndex
   * @return {Int}
   */
  getActiveQuestionIndex() {
    return this.state.config.questions.findIndex(q => q.active === true);
  }

  keyNavigation(e) { // eslint-disable-line complexity
    const up = 38;
    const down = 40;
    const tab = 9;

    if (e.keyCode === up) {
      this.focusQuestion('prev');
    } else if (e.keyCode === down) {
      this.focusQuestion('next');
    } else if (e.keyCode === tab && e.shiftKey) {
      this.focusQuestion('prev');
    } else if (e.keyCode === tab) {
      this.focusQuestion('next');
    } else {
      return true;
    }

    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render() {
    const appControl = {
      focusQuestion: this.focusQuestion,
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
      <div className={this.bemClass} onKeyDown={this.keyNavigation}>

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
