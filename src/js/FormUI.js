import React from 'react';
import ReactBEM from './ReactBEM';
import FormField from './FormField';
import translationManager from './utils/translationManager';
import clone from './utils/clone';
import NavigationBar from './NavigationBar';
import SubmitButton from './SubmitButton';
import AnimationManager from './utils/AnimationManager';
import throttle from './utils/throttle';
import debounce from './utils/debounce';
import assert from 'fl-assert';


// Takes care of the UI part of things.
export default class FormUI extends ReactBEM {
  constructor(...args) {
    super(...args);

    // private
    this.componentDidMount = this.componentDidMount.bind(this);
    this.generateInitialState = this.generateInitialState.bind(this);
    this.focusElement = this.focusElement.bind(this);
    this.keyNavigation = this.keyNavigation.bind(this);
    this.wheelNavigation = this.wheelNavigation.bind(this);
    this.setActiveFieldIndex = this.setActiveFieldIndex.bind(this);
    this.getFormFields = this.getFormFields.bind(this);
    this.getFieldNode = this.getFieldNode.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.setQuestionActive = this.setQuestionActive.bind(this);

    // public
    this.focusQuestion = throttle(this.focusQuestion.bind(this), 250, this, false);
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
    const createUiObj = (objKey) => {
      return { key: objKey, active: false, complete: false };
    };

    // Create a ui object to control questions
    const ui = {};
    ui.submitButton = createUiObj('submit');
    ui.questions = this.props.config.questions.map(q => createUiObj(q.key));
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
    const centerActiveQuestion = () => {
      const activeIndex = this.getActiveFieldIndex();
      const el = this.getFieldNode(activeIndex);
      this.focusElement(el);
    };

    const centerDebounced = debounce(centerActiveQuestion, 50);

    window.addEventListener(
      'resize',
      () => this.animations.schedule(centerDebounced, 'formResize', 20)
    );

    // Make first question active.
    this.animations.schedule(() => this.setActiveFieldIndex(0), '', 30);
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
    const fieldCount = this.getFormFields().length;
    const activeIndex = this.getActiveFieldIndex();
    const changedIndex = activeIndex + (next ? +1 : -1);
    const newActiveIndex = Math.max(0, Math.min(fieldCount - 1, changedIndex));

    const el = this.getFieldNode(newActiveIndex);

    this.focusElement(el);
    this.setActiveFieldIndex(newActiveIndex);
  }

  /**
   * Focuses a question or the submit button.
   * @private
   * @method focusElement
   * @param  {HTMLElement} el
   * @return {void}
   */
  focusElement(elToFocus) {
    return;
    const questionHeight = elToFocus.clientHeight;
    const viewBoxHeight = this.refs.questionsViewBox.clientHeight;
    // how much lower than the container will it end up.
    const displacementFromContainerTop = Math.max(0, (viewBoxHeight - questionHeight) / 2);
    const viewBoxTop = this.refs.questionsViewBox.getBoundingClientRect().top;
    const questionOffsetFromViewBox = elToFocus.offsetTop - viewBoxTop;

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
   * @method setActiveFieldIndex
   * @param  {String} index
   */
  setActiveFieldIndex(index) {
    const ui = clone(this.state.ui);

    // set everyone not active
    ui.submitButton.active = false;
    for (const q of ui.questions) {
      q.active = false;
    }

    const formFields = this.getFormFields();
    const newActiveField = formFields[index];

    if (newActiveField.key === ui.submitButton.key) {
      ui.submitButton.active = true;
    } else {
      const questionIndex = ui.questions.findIndex(q => q.key === newActiveField.key);
      assert(questionIndex !== -1, `Invalid question index ${index}`);
      ui.questions[questionIndex].active = true;
    }

    this.setState({ ui });
  }

  /**
   * Returns an array containing all form questions and the submit button.
   * @method getFormFields
   * @return {Array}
   */
  getFormFields() {
    const formFields = [
      ... this.state.ui.questions,
      this.state.ui.submitButton,
    ];
    return formFields;
  }

  /**
   * @private
   * @method getActiveQuestionIndex
   * @return {Int}
   */
  getActiveFieldIndex() {
    const formFields = this.getFormFields();
    return formFields.findIndex(f => f.active === true);
  }

  getFieldNode(index) {
    return this.refs.questions.children[index];
  }

  /**
   * @public
   * @method setQuestionActive
   * @param  {[type]} questionKey [description]
   */
  setQuestionActive(questionKey) {
    const formFields = this.getFormFields();
    const qIndex = formFields.findIndex(q => q.key === questionKey);
    this.setActiveFieldIndex(qIndex);
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
    return;
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

  handleScroll() {
    const viewBoxTop = this.refs.questionsViewBox.getBoundingClientRect().top;
    let closestToTop = {
      distance: null,
      index: null,
    };


    const fieldCount = this.getFormFields();
    for (let i = 0; i < fieldCount.length; i++) {
      const fieldEl = this.getFieldNode(i);
      const fieldElTop = fieldEl.getBoundingClientRect().top;
      const fieldDistanceToTop = Math.abs(viewBoxTop - fieldElTop);

      if (typeof closestToTop.distance !== 'number'
        || fieldDistanceToTop < closestToTop.distance) {
        closestToTop = {
          distance: fieldDistanceToTop,
          index: i,
        };
      }
    }

    const activeIndex = this.getActiveFieldIndex();
    if (closestToTop.index !== activeIndex) {
      this.setActiveFieldIndex(closestToTop.index);
    }
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
      setQuestionCompleted: this.setQuestionCompleted,
      setQuestionActive: this.setQuestionActive,
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
        onScroll={() => {
          this.animations.schedule(this.handleScroll, 'scroll', 3);
        }}
      >

        <div className={this.bemSubComponent('questionsViewBox')} ref="questionsViewBox">
          <div className={this.bemSubComponent('questions')} ref="questions" >
            {questions}

            <SubmitButton
              ui={this.state.ui.submitButton}
              appControl={appControl}
              ref="submitButton"
            />
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
