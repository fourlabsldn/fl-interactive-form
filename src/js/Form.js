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
    this.focusQuestion = this.focusQuestion.bind(this);
    this.focusQuestionWithIndex = this.focusQuestionWithIndex.bind(this);

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
