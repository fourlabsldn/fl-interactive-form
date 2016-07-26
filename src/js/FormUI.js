import React from 'react';
import ReactBEM from './ReactBEM';
import FormField from './FormField';
import translationManager from './utils/translationManager';
import clone from './utils/clone';
import NavigationBar from './NavigationBar';
import AnimationManager from './utils/AnimationManager';
import throttle from './utils/throttle';
import assert from 'fl-assert';


// Takes care of the UI part of things.
export default class FormUI extends ReactBEM {
  constructor(...args) {
    super(...args);

    // private
    this.componentDidMount = this.componentDidMount.bind(this);
    this.generateInitialState = this.generateInitialState.bind(this);
    this.focusQuestionWithIndex = this.focusQuestionWithIndex.bind(this);
    this.keyNavigation = this.keyNavigation.bind(this);
    this.wheelNavigation = this.wheelNavigation.bind(this);

    // public
    this.focusQuestion = throttle(this.focusQuestion.bind(this), 250, this, false);
    this.setActiveQuestion = this.setActiveQuestion.bind(this);
    this.setQuestionCompleted = this.setQuestionCompleted.bind(this);

    this.animations = new AnimationManager();
    this.state = this.generateInitialState(this.props.config);
  }

  /**
   * Processes a config object from this.props and returns it.
   * @private
   * @method importConfig
   * @return {Object}
   */
  generateInitialState() {
    // Create a ui object to control questions
    const ui = {};
    ui.questions = this.props.config.questions.map(q => {
      return {
        key: q.key,
        active: false,
        complete: false,
      };
    });

    return { ui };
  }

  /**
   * Called once when the component is created.
   * @private
   * @method componentDidMount
   * @return {void}
   */
  componentDidMount() {
    // Center active question on resize
    const centerActiveQuestion =
      () => this.focusQuestionWithIndex(this.getActiveQuestionIndex());

    window.addEventListener(
      'resize',
      () => this.animations.schedule(centerActiveQuestion, 'formResize', 20)
    );

    // Make first question active.
    this.animations.schedule(() => this.setActiveQuestion(0), '', 30);
  }

  /**
   * @public
   * Moves the focus to the next or previous question by
   * setting it as active and moving it to the center of the viewport.
   * @method focusQuestion
   * @param  {String} prevNext
   * @return {void}
   */
  focusQuestion(prevNext) {
    const next = prevNext === 'next';
    const active = this.getActiveQuestionIndex();
    const questionCount = this.state.ui.questions.length;
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
    const ui = clone(this.state.ui);
    for (const q of ui.questions) {
      q.active = false;
    }

    ui.questions[index].active = true;
    this.setState({ ui });
  }

  /**
   * @private
   * @method getActiveQuestionIndex
   * @return {Int}
   */
  getActiveQuestionIndex() {
    return this.state.ui.questions.findIndex(q => q.active === true);
  }

  /**
   * @private
   * @method keyNavigation
   * @param  {[Event} e
   */
  keyNavigation(e) { // eslint-disable-line complexity
    const up = 38;
    const down = 40;
    const tab = 9;

    if (e.ctrlKey) { return; }
    if (e.shiftKey && e.keyCode !== tab) { return; }

    if (e.keyCode === up) {
      this.focusQuestion('prev');
    } else if (e.keyCode === down) {
      this.focusQuestion('next');
    } else if (e.keyCode === tab && e.shiftKey) {
      this.focusQuestion('prev');
    } else if (e.keyCode === tab) {
      this.focusQuestion('next');
    } else {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
  }

  /**
   * @private
   * @method wheelNavigation
   * @param  {[Event} e
   */
  wheelNavigation(e) {
    if (!e.deltaY) { return true; }

    if (e.deltaY > 0) {
      this.focusQuestion('next');
    } else {
      this.focusQuestion('prev');
    }

    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  /**
   * Sets a question as completed.
   * @private
   * @method setQuestionCompleted
   * @param  {String} questionKey
   * @param  {Boolean} completed
   * @return {Promise}
   */
  setQuestionCompleted(questionKey, completed) {
    const qIndex = this.state.ui.questions.findIndex(q => q.key === questionKey);
    assert(qIndex !== -1, `Did not find question with key: ${questionKey}`);

    const ui = clone(this.state.ui);
    ui.questions[qIndex].completed = !!completed;

    return new Promise(resolve => this.setState({ ui }, resolve));
  }

  render() {
    const uiControl = {
      focusQuestion: this.focusQuestion,
      setActiveQuestion: this.setActiveQuestion,
      setQuestionCompleted: this.setQuestionCompleted,
    };

    const appControl = new Proxy(this.props.appControl, {
      get: (target, property) => {
        return target[property] ? target[property] : uiControl[property];
      },
    });

    const questions = this.props.config.questions.map((q, index) => {
      return (
        <FormField
          config={q}
          ui={this.state.ui.questions[index]}
          appControl={appControl}
          key={q.key}
        />);
    });

    return (
      <div
        className={this.bemClass}
        onKeyDown={this.keyNavigation}
        onWheel={this.wheelNavigation}
      >

        <div className={this.bemSubComponent('questionsViewBox')} ref="questionsViewBox">
          <div className={this.bemSubComponent('questions')} ref="questions" >
            {questions}
          </div>
        </div>

        <NavigationBar appControl={appControl} ui={this.state.ui} />
      </div>
    );
  }
}

FormUI.PropTypes = {
  config: React.PropTypes.object.isRequired,
  appControl: React.PropTypes.object.isRequired,
};
